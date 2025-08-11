import {
	type Camera,
	type EventListener,
	PerspectiveCamera,
	Scene,
} from "three";
import { PluginManager } from "./plugins";
import {
	RendererAdapter,
	type RendererAdapterHostContext,
	RendererFactory,
	type TRendererAdapterEventMap,
} from "./renderer/index.js";
import type { ApplicationConfig } from "./types";
import { type TViewportEventMap, Viewport } from "./viewport";

export class ApplicationBase implements RendererAdapterHostContext {
	public plugin = new PluginManager(this);

	public viewport!: Viewport;
	public rendererAdapter!: RendererAdapter;

	public scene = new Scene();
	public camera!: Camera;

	constructor(
		public $wrapper: HTMLElement,
		protected config: ApplicationConfig = {},
	) {
		this.viewport = new Viewport(this.$wrapper);

		if (this.config.renderer?.type === "webgpu" && !navigator.gpu) {
			throw new Error(
				"WebGPU is not supported on this device. Please use a different renderer.",
			);
		}
	}

	public async initialize() {
		await this.setupRenderer();

		await this.plugin.initializeAllBeforeScene();
		this.initializeScene();
		await this.plugin.initializeAllAfterScene();

		this.setupEventListeners();
	}

	protected async setupRenderer() {
		// レンダラーの初期化
		if (this.config.renderer) {
			const renderer = await RendererFactory.create(this.config.renderer);
			this.rendererAdapter = new RendererAdapter(renderer, this);
		} else {
			const renderer = await RendererFactory.createBestAvailable();
			this.rendererAdapter = new RendererAdapter(renderer, this);
		}
		this.rendererAdapter.setSize(this.viewport.width, this.viewport.height);
		this.rendererAdapter.setPixelRatio(window.devicePixelRatio);

		// DOMに追加
		this.$wrapper.appendChild(this.rendererAdapter.domElement);
	}

	protected initializeScene() {
		this.camera = new PerspectiveCamera(
			75,
			this.viewport.aspectRatio,
			0.1,
			1000,
		);

		this.scene.add(this.camera);
	}

	protected setupEventListeners(): void {
		this.viewport.addEventListener("resize", this.onResize);
		this.rendererAdapter.addEventListener("tick", this.onTick);
	}

	public start() {
		this.rendererAdapter.start();
	}

	protected onTick = ({ dt, time }: TRendererAdapterEventMap["tick"]) => {
		this.update(dt, time);
	};

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
