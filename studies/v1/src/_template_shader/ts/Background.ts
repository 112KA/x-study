import { texture } from "three/tsl";
import { type NodeMaterial, QuadMesh, type Texture, type WebGPURenderer } from "three/webgpu";

export class Background extends QuadMesh {
	setup(map: Texture) {
		console.log({ map });
		(this.material as NodeMaterial).colorNode = texture(map);
	}

	update(dt: number, elapsedTime: number) {
		// (this.material as ShaderMaterial).uniforms.time.value = elapsedTime;
	}

	resize() {
		// const { width, height } = this.#renderer.domElement;
		// (this.material as ShaderMaterial).uniforms.resolution.value.set(
		// 	width,
		// 	height,
		// );
	}
}
