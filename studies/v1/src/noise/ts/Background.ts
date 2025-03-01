import {
	Fn,
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
	vec3,
	vec4,
} from "three/tsl";
import { type NodeMaterial, QuadMesh, type Texture, type WebGPURenderer } from "three/webgpu";
import { snoise3 } from "x3/nodes/noise/snoise3";

export class Background extends QuadMesh {
	// constructor() {
	// 	const material = new NodeMaterial();
	// 	// material.colorNode = vec4(1, 0, 0, 1);
	// 	// material.colorNode = vec4(uv(), abs(oscSine(time.mul(0.1))), 1);
	// 	// material.colorNode = mx_noise_float(uv().mul(10).add(time), float(1));
	// 	// material.colorNode = mx_noise_vec3(uv().mul(10).add(time), float(1));
	// 	// material.colorNode = snoise3(vec3(uv(), time.mul(0.1)).mul(5));

	// 	// @see https://www.pentacreation.com/blog/2021/04/210403.html
	// 	const red = vec3(1, 1, time).toVar();
	// 	const green = vec3(2.0, 1.0, time.mul(0.2)).toVar();
	// 	const blue = vec3(2.0, 2.0, time.mul(0.5)).toVar();
	// 	const r = float(snoise3(vec3(red.xy.mul(uv()), red.z))).toVar();
	// 	const g = float(snoise3(vec3(green.xy.mul(uv()), green.z))).toVar();
	// 	const b = float(snoise3(vec3(blue.xy.mul(uv()), blue.z))).toVar();
	// 	material.colorNode = vec4(
	// 		r.add(1.0).div(2.0).add(0.1),
	// 		g.add(1.0).div(2.0).add(0.1),
	// 		b.add(1.0).div(2.0).add(0.1),
	// 		1.0,
	// 	);

	// 	super(material);
	// }

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
