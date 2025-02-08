import { color, output, uniform } from "three/tsl";
import { MeshStandardNodeMaterial, Vector3 } from "three/webgpu";
import { blendHalftoneColor } from "x3/nodes/halftone";

/**
 * HalfToneMaterial class
 * @see https://threejs.org/examples/#webgpu_tsl_halftone
 */
export class HalfToneMaterial extends MeshStandardNodeMaterial {
	public uniforms = {
		count: uniform(110),
		color: uniform(color("#94ffd1")),
		direction: uniform(new Vector3(1, 1, 0.4)),
		start: uniform(0.55),
		end: uniform(0.2),
		mixLow: uniform(0.5),
		mixHigh: uniform(1),
		radius: uniform(0.8),
	};

	constructor() {
		super({ color: "#ff622e" });
		this.name = "HalfTone";

		this.outputNode = blendHalftoneColor(output, this.uniforms);
	}
}
