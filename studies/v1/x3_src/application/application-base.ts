import { type Camera, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { Ticker } from "x";
import { PluginManager } from "./plugins";
import { RendererAdapter, RendererFactory } from "./renderer/index.js";
import type { ApplicationConfig } from "./types";
import { Viewport } from "./viewport";

export class ApplicationBase {
	public ticker = new Ticker();
	public plugin = new PluginManager(this);

	public viewport!: Viewport;
	public rendererAdapter!: RendererAdapter;

	protected scene = new Scene();
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
			this.rendererAdapter = new RendererAdapter(renderer);
		} else {
			const renderer = await RendererFactory.createBestAvailable();
			this.rendererAdapter = new RendererAdapter(renderer);
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
		this.viewport.addEventListener("resize", this.handleResize);
		this.ticker.addEventListener("tick", this.handleTick as EventListener);
	}

	public start() {
		this.ticker.start();
	}

	protected handleTick = (e: CustomEvent<{ dt: number; time: number }>) => {
		const { dt, time } = e.detail;
		this.update(dt, time);
	};

	protected async update(dt: number, time: number) {
		// プラグインの更新を先に実行
		this.plugin.updateAll(dt, time);

		await this.rendererAdapter.render(this.scene, this.camera);
	}

	protected handleResize = (event: { width: number; height: number }) => {
		this.resize(event.width, event.height);
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
		this.ticker.stop();
		this.rendererAdapter.dispose();
		this.plugin.destroyAll();
	}
}
