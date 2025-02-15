import { blendColor, normalWorld, output, color as tslColor, uniform, varying } from "three/tsl";
import { MeshStandardNodeMaterial, Vector3 } from "three/webgpu";
import { linePattern } from "x3/nodes/halftone";

/**
 * HalfToneLineMaterial class
 */
export class HalfToneLineMaterial extends MeshStandardNodeMaterial {
	public uniforms = {
		count: uniform(400),
		color: uniform(tslColor("#94ffd1")),
		direction: uniform(new Vector3(1, 1, 0.4)),
		start: uniform(0.9),
		end: uniform(0.25),
		mixLow: uniform(0.1),
		mixHigh: uniform(1),
		radius: uniform(0.9),
	};

	constructor() {
		super({ color: "#ff622e" });
		this.name = "HalfToneLine";

		const { count, color, direction, start, end, radius, mixLow, mixHigh } = this.uniforms;
		const vDirection = varying(normalWorld.dot(direction.normalize()));
		const linePatternOutput = linePattern(count, color, vDirection, start, end, radius, mixLow, mixHigh);
		this.outputNode = blendColor(output, linePatternOutput);
	}
}
