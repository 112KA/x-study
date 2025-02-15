import { Fn, type ShaderNodeObject, mix, rotate, screenCoordinate, screenSize, sin, vec4 } from "three/tsl";
import type { Color, UniformNode, Vector3 } from "three/webgpu";

export type HalftoneTuple = [
	ShaderNodeObject<UniformNode<number>>,
	ShaderNodeObject<UniformNode<Color>>,
	ShaderNodeObject<UniformNode<Vector3>>,
	ShaderNodeObject<UniformNode<number>>,
	ShaderNodeObject<UniformNode<number>>,
	ShaderNodeObject<UniformNode<number>>,
	ShaderNodeObject<UniformNode<number>>,
	ShaderNodeObject<UniformNode<number>>,
];

/**
 * Dot pattern
 * @see https://threejs.org/examples/#webgpu_tsl_halftone
 */
export const dotPattern = /*@__PURE__*/ Fn(
	([count, color, direction, start, end, radius, mixLow, mixHigh]: HalftoneTuple) => {
		// grid pattern

		const gridUv = screenCoordinate.xy.div(screenSize.yy).mul(count);
		const rotatedGridUv = rotate(gridUv, Math.PI * 0.25).mod(1);

		// orientation strength

		const orientationStrength = direction.remapClamp(end, start, 0, 1);

		// mask

		const mask = rotatedGridUv
			.sub(0.5)
			.length()
			.step(orientationStrength.mul(radius).mul(0.5))
			.mul(mix(mixLow, mixHigh, orientationStrength));

		return vec4(color, mask);
	},
);

/**
 * Dot pattern
 * @see https://wgld.org/d/webgl/w077.html
 */
export const linePattern = /*@__PURE__*/ Fn(
	([count, color, direction, start, end, radius, mixLow, mixHigh]: HalftoneTuple) => {
		// grid pattern

		const gridUv = screenCoordinate.xy.div(screenSize.yy).mul(count);

		// orientation strength

		const orientationStrength = direction.remapClamp(end, start, 0, 1);

		// mask

		const mask = sin(gridUv.x.add(gridUv.y))
			.oneMinus()
			.step(orientationStrength.mul(radius))
			.mul(mix(mixLow, mixHigh, orientationStrength));

		return vec4(color, mask);
	},
);
