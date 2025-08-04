import { type Camera, type Scene, TimestampQuery } from "three";
import type { WebGPURenderer } from "three/webgpu";
import type { SupportedRenderer } from "./types";

export class RendererAdapter {
	constructor(public renderer: SupportedRenderer) {}

	setSize(width: number, height: number, updateStyle = true): void {
		this.renderer.setSize(width, height, updateStyle);
	}

	// WebGPU特有の処理
	async render(scene: Scene, camera: Camera): Promise<void> {
		const renderer = this.renderer as WebGPURenderer;
		if (renderer.isWebGPURenderer) {
			await renderer.renderAsync(scene, camera);
			renderer.resolveTimestampsAsync(TimestampQuery.RENDER);
		} else {
			this.renderer.render(scene, camera);
		}
	}

	setPixelRatio(ratio: number): void {
		this.renderer.setPixelRatio(ratio);
	}

	dispose(): void {
		this.renderer.dispose();
	}

	get domElement(): HTMLCanvasElement {
		return this.renderer.domElement;
	}
}
