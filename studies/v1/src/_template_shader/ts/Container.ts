import type { WebGLRenderer } from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import type { WebGPURenderer } from "three/webgpu";

import type { DeviceSize } from "x";

export type ContainerProps = {
	renderer: WebGPURenderer | WebGLRenderer;
};
export class Container {
	public renderer: WebGPURenderer | WebGLRenderer;
	#stats = new Stats();

	constructor({ renderer }: ContainerProps) {
		this.renderer = renderer;

		this.renderer.setClearColor(0x000000, 1);
		this.renderer.setPixelRatio(window.devicePixelRatio);

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
