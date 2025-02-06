import {
	abs,
	float,
	mx_cell_noise_float,
	mx_fractal_noise_float,
	mx_fractal_noise_vec3,
	mx_noise_float,
	mx_noise_vec3,
	mx_worley_noise_float,
	mx_worley_noise_vec3,
	oscSine,
	texture,
	time,
	uv,
	vec4,
} from "three/tsl";
import { NodeMaterial, QuadMesh, type Texture, type WebGPURenderer } from "three/webgpu";

export class Background extends QuadMesh {
	constructor() {
		const material = new NodeMaterial();
		// material.colorNode = vec4(1, 0, 0, 1);
		// material.colorNode = vec4(uv(), abs(oscSine(time.mul(0.1))), 1);
		material.colorNode = mx_noise_float(uv().mul(10).add(time), float(1));

		super(material);
	}

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
