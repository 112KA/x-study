import { EventDispatcher, TimestampQuery } from "three";
import type { WebGPURenderer } from "three/webgpu";
import type { AbstractPostProcessing } from "./abstract-postporcessing";
import type { RendererHostContext, SupportedRenderer } from "./types";

export type TRendererAdapterEventMap = {
	tick: { dt: number; time: DOMHighResTimeStamp };
};

export class RendererAdapter extends EventDispatcher<TRendererAdapterEventMap> {
	protected previousTime = 0;
	protected postProcessing: AbstractPostProcessing | null = null;

	constructor(
		public renderer: SupportedRenderer,
		protected hostContext: RendererHostContext,
	) {
		super();
	}

	setPixelRatio(ratio: number): void {
		this.renderer.setPixelRatio(ratio);
	}

	getPixelRatio(): number {
		return this.renderer.getPixelRatio();
	}

	setSize(width: number, height: number, updateStyle = true): void {
		this.renderer.setSize(width, height, updateStyle);
		if (this.postProcessing !== null) {
			this.postProcessing.resize();
		}
	}

	// WebGPU特有の処理
	async render(): Promise<void> {
		const renderer = this.renderer as WebGPURenderer;
		const { scene, camera } = this.hostContext;

		if (renderer.isWebGPURenderer) {
			if (this.postProcessing !== null) {
				await this.postProcessing.renderAsync();
			} else {
				await renderer.renderAsync(scene, camera);
			}
			renderer.resolveTimestampsAsync(TimestampQuery.RENDER);
		} else {
			this.renderer.render(scene, camera);
		}
	}

	start() {
		this.renderer.setAnimationLoop(this.handleTick);
	}

	protected handleTick = (
		time: DOMHighResTimeStamp,
		_frame: XRFrame | undefined,
	) => {
		const dt = time - this.previousTime;
		this.previousTime = time;
		this.dispatchEvent({ type: "tick", dt, time });
	};

	dispose(): void {
		this.renderer.setAnimationLoop(null);
		this.renderer.dispose();
	}

	get domElement(): HTMLCanvasElement {
		return this.renderer.domElement;
	}

	addPostProcessing(postProcessing: AbstractPostProcessing): void {
		this.postProcessing = postProcessing;
	}
}
