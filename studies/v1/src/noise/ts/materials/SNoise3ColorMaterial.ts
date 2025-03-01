import { time, uniform, uv, vec2, vec3, vec4 } from "three/tsl";
import { snoise3 } from "x3/nodes/noise/snoise3";
import { AbstractControlNodeMaterial } from "../../../common/AbstractControlNodeMaterial";

export class SNoise3ColorMaterial extends AbstractControlNodeMaterial {
	constructor() {
		super();

		this.name = "SNoise3Color";

		this.uniforms = {
			timeScale: uniform(1),
			red: uniform(vec2(1, 1)),
			green: uniform(vec2(2, 1)),
			blue: uniform(vec2(2, 2)),
		};

		const { red, green, blue } = this.uniforms;
		const scaledTime = time.mul(this.uniforms.timeScale);
		const rgb = vec3(
			snoise3(vec3(red.mul(uv()), scaledTime)),
			snoise3(vec3(green.mul(uv()), scaledTime.mul(0.2))),
			snoise3(vec3(blue.mul(uv()), scaledTime.mul(0.5))),
		)
			.add(1.0)
			.div(2.0);
		this.colorNode = vec4(rgb, 1.0);
	}
}
