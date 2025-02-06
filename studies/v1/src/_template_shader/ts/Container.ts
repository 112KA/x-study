import Stats from "three/examples/jsm/libs/stats.module.js";
import { WebGPURenderer } from "three/webgpu";

import type { DeviceSize } from "x";

export type ContainerProps = {
	canvas: HTMLCanvasElement;
};
export class Container {
	public renderer: WebGPURenderer;
	#stats = new Stats();

	constructor({ canvas }: ContainerProps) {
		this.renderer = new WebGPURenderer({
			canvas,
			// forceWebGL: true,
		});

		this.renderer.setClearColor(0x000000, 1);
		this.renderer.setPixelRatio(1);

		document.querySelector("body")?.appendChild(this.#stats.dom);
	}

	update(dt: number, elapsedTime: number) {
		this.#stats.update();
	}

	resize() {
		const width = window.innerWidth;
		const height = window.innerHeight;

		this.renderer.setSize(width, height);
	}

	setDeviceSize(deviceSize: DeviceSize) {
		console.log({ deviceSize });
	}
}
