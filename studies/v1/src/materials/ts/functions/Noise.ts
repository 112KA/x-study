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
import type { IFunction } from "./types";

const uniforms = {
	timeScale: uniform(10.0),
	amplitude: uniform(1.0),
	pivot: uniform(0),
};

export const Noise: IFunction = {
	name: "Noise",
	uniforms,
	Fn: mx_noise_float(
		uv().mul(uniforms.timeScale).add(time),
		uniforms.amplitude,
		uniforms.pivot,
	),
};
