import type { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class CameraControls {
	orbitControls;

	constructor(
		public camera: PerspectiveCamera,
		public domElement: HTMLElement,
	) {
		this.orbitControls = new OrbitControls(camera, domElement);
	}

	update(_dt: number) {
		this.orbitControls.update();
	}
}
