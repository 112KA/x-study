import { blendColor, normalWorld, output, color as tslColor, uniform, varying } from "three/tsl";
import { MeshStandardNodeMaterial, Vector3 } from "three/webgpu";
import { dotPattern } from "x3/nodes/halftone";

/**
 * HalfToneDotMaterial class
 */
export class HalfToneDotMaterial extends MeshStandardNodeMaterial {
	public uniforms = {
		count: uniform(90),
		color: uniform(tslColor("#94ffd1")),
		direction: uniform(new Vector3(1, 1, 0.4)),
		start: uniform(0.6),
		end: uniform(0.1),
		mixLow: uniform(0.5),
		mixHigh: uniform(1),
		radius: uniform(0.6),
	};

	constructor() {
		super({ color: "#ff622e" });
		this.name = "HalfToneDot";

		const { count, color, direction, start, end, radius, mixLow, mixHigh } = this.uniforms;
		const vDirection = varying(normalWorld.dot(direction.normalize()));
		const dotPatternOutput = dotPattern(count, color, vDirection, start, end, radius, mixLow, mixHigh);
		this.outputNode = blendColor(output, dotPatternOutput);
	}
}
