import { time, uniform, uv, vec3 } from "three/tsl";
import { snoise3 } from "x3/nodes/noise/snoise3";
import { AbstractControlNodeMaterial } from "../../../common/AbstractControlNodeMaterial";

export class SNoise3Material extends AbstractControlNodeMaterial {
	constructor() {
		super();

		this.name = "SNoise3";

		this.uniforms = {
			timeScale: uniform(0.1),
		};

		const { timeScale, amplitude, pivot } = this.uniforms;
		this.colorNode = snoise3(vec3(uv(), time.mul(timeScale)).mul(5));
	}
}
