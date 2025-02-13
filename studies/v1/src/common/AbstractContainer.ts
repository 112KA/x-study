import Stats from "stats-gl";
import { Clock, EventDispatcher, type WebGLRenderer } from "three";
import type { Camera, Mesh, PerspectiveCamera, Scene, WebGPURenderer } from "three/webgpu";
import { assertIsDefined } from "x";

export interface AbstractContainerEventMap {
	update: {
		delta: number;
		elapsedTime: number;
	};
	resize: {
		width: number;
		height: number;
	};
}

export type RendererParams = {
	antialias: boolean;
	transparent: boolean;
};

export abstract class AbstractContainer<
	T extends WebGLRenderer | WebGPURenderer,
	// TEventMap extends AbstractContainerEventMap = AbstractContainerEventMap,
> extends EventDispatcher<AbstractContainerEventMap> {
	public renderer: T;
	public scene: Scene | null = null;
	public camera: Camera | null = null;
	#clock = new Clock();
	#stats = new Stats({
		precision: 4,
		horizontal: false,
		trackGPU: true,
		trackCPT: true,
		logsPerSecond: 10,
		graphsPerSecond: 60,
		samplesGraph: 30,
	});

	constructor(
		public wrapper: HTMLDivElement,
		rendererClass: new (params: RendererParams) => T,
	) {
		super();

		this.renderer = new rendererClass({
			antialias: true,
			transparent: true,
		});

		this.renderer.setClearColor(0x000000, 1);
		this.renderer.setPixelRatio(window.devicePixelRatio);

		const resizeObserver = new ResizeObserver((entries) => {
			const { width, height } = entries[0].contentRect;
			this.resize(width, height);
		});
		resizeObserver.observe(wrapper);

		this.renderer.setAnimationLoop(this.update.bind(this));

		this.wrapper.appendChild(this.renderer.domElement);
		document.querySelector("body")?.appendChild(this.#stats.dom);
	}

	public update() {
		this.#stats.update();

		this.dispatchEvent({
			type: "update",
			delta: this.#clock.getDelta(),
			elapsedTime: this.#clock.elapsedTime,
		});
	}

	public resize(width: number, height: number) {
		this.renderer.setSize(width, height);

		if (this.camera !== null && (this.camera as PerspectiveCamera).isPerspectiveCamera) {
			const camera = this.camera as PerspectiveCamera;

			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}

		this.dispatchEvent({
			type: "resize",
			width,
			height,
		});
	}

	public async debugShader(targetMesh: Mesh) {
		if (this.renderer !== null && (this.renderer as WebGPURenderer).isWebGPURenderer) {
			const renderer = this.renderer as WebGPURenderer;
			const { scene, camera } = this;
			assertIsDefined(scene);
			assertIsDefined(camera);
			const rawShader = await renderer.debug.getShaderAsync(scene, camera, targetMesh);
			const style =
				"background-color: #333; color: white; font-style: italic; border: 2px solid #777; font-size: 22px;";

			console.log("%c  [ WGSL ] Vertex Shader      ", style);
			console.log(rawShader.vertexShader);
			console.log("%c  [ WGSL ] Fragment Shader    ", style);
			console.log(rawShader.fragmentShader);
		}
	}
}
