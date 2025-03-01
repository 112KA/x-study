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
	uniform,
	uv,
	vec4,
} from "three/tsl";
import { AbstractControlNodeMaterial } from "../../../common/AbstractControlNodeMaterial";

export class NoiseMaterial extends AbstractControlNodeMaterial {
	constructor() {
		super();

		this.name = "Noise";

		this.uniforms = {
			timeScale: uniform(10),
			amplitude: uniform(1),
			pivot: uniform(0),
		};

		const { timeScale, amplitude, pivot } = this.uniforms;
		this.colorNode = mx_noise_float(uv().mul(timeScale).add(time), amplitude, pivot);
	}
}
