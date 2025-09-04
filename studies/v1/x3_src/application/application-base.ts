import {
	type Camera,
	type EventListener,
	PerspectiveCamera,
	Scene,
} from "three";
import type { WebGPURenderer } from "three/webgpu";
import { PluginManager } from "./plugins";
import {
	RendererAdapter,
	RendererFactory,
	type RendererHostContext,
	type SupportedRenderer,
} from "./renderer/index.js";
import type { ApplicationConfig } from "./types";
import { type TViewportEventMap, Viewport } from "./viewport";

export class ApplicationBase implements RendererHostContext {
	public plugin = new PluginManager(this);

	public viewport!: Viewport;
	public rendererAdapter!: RendererAdapter;

	public scene = new Scene();
	public camera: Camera = new PerspectiveCamera(75);

	constructor(
		public $wrapper: HTMLElement,
		protected config: ApplicationConfig = {},
	) {
		if (this.config.renderer?.type === "webgpu" && !navigator.gpu) {
			throw new Error(
				"WebGPU is not supported on this device. Please use a different renderer.",
			);
		}

		this.viewport = new Viewport(this.$wrapper);

		this.scene.add(this.camera);
	}

	public async initialize() {
		await this.setupRenderer();

		const renderer = this.rendererAdapter.renderer as WebGPURenderer;
		if (renderer.isWebGPURenderer) {
			// postprocessing設定後、asset load前に実行する
			await renderer.init();
		}

		await this.plugin.initializeAllBeforeScene();
		this.initializeScene();
		await this.plugin.initializeAllAfterScene();

		this.setupEventListeners();
	}

	protected async setupRenderer() {
		// レンダラーの初期化
		let renderer: SupportedRenderer;

		if (this.config.renderer) {
			renderer = await RendererFactory.create(this.config.renderer);
		} else {
			renderer = await RendererFactory.createBestAvailable();
		}

		this.rendererAdapter = new RendererAdapter(
			renderer,
			this,
			this.update.bind(this),
		);
		this.rendererAdapter.setSize(this.viewport.width, this.viewport.height);
		this.rendererAdapter.setPixelRatio(window.devicePixelRatio);

		// DOMに追加
		this.$wrapper.appendChild(this.rendererAdapter.domElement);
	}

	protected initializeScene() {}

	protected setupEventListeners(): void {
		this.viewport.addEventListener("resize", this.onResize);
	}

	public start() {
		this.rendererAdapter.start();
	}

	protected async update(dt: number, timeMS: number) {
		// プラグインの更新を先に実行
		this.plugin.updateAll(dt, timeMS);

		await this.rendererAdapter.render();
	}

	protected onResize = ({ width, height }: TViewportEventMap["resize"]) => {
		this.resize(width, height);
	};

	protected resize(width: number, height: number) {
		// Update camera aspect ratio
		const camera = this.camera as PerspectiveCamera;
		if (camera.isPerspectiveCamera) {
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}

		// Update renderer size
		this.rendererAdapter.setSize(width, height);

		// プラグインのリサイズ処理
		this.plugin.resizeAll(width, height);
	}

	// クリーンアップ
	public dispose(): void {
		this.rendererAdapter.dispose();
		this.plugin.destroyAll();
	}
}
