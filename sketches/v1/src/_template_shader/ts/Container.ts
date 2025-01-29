import { Camera, Scene, WebGLRenderer } from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";

import type { DeviceSize } from "x";

export type ContainerProps = {
	canvas: HTMLElement;
};
export class Container {
	public renderer: WebGLRenderer;
	public scene = new Scene();
	public camera = new Camera();
	private _stats = Stats();

	constructor({ canvas }: ContainerProps) {
		this.renderer = new WebGLRenderer({
			canvas,
			antialias: false,
			alpha: false,
		});
		this.renderer.setClearColor(0x000000, 0);
		this.renderer.setPixelRatio(1);

		document.querySelector("body")?.appendChild(this._stats.dom);
	}

	render() {
		this.renderer.render(this.scene, this.camera);
		this._stats.update();
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
