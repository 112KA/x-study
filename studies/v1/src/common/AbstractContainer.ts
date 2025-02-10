import Stats from "stats-gl";
import { Clock, EventDispatcher, type WebGLRenderer } from "three";
import type { WebGPURenderer } from "three/webgpu";

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

		this.dispatchEvent({
			type: "resize",
			width,
			height,
		});
	}
}
