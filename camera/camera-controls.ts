import type { PerspectiveCamera } from "three";

export class CameraControls {
	constructor(public camera: PerspectiveCamera) {}

	update(_dt: number) {
		// console.log('update', dt)
	}
}
