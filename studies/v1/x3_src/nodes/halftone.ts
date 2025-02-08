import { Fn, type ShaderNodeObject, mix, normalWorld, rotate, screenCoordinate, screenSize, vec4 } from "three/tsl";
import type { Color, PropertyNode, UniformNode, Vector3 } from "three/webgpu";

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

export const halftone = /*@__PURE__*/ Fn(
	([count, color, direction, start, end, radius, mixLow, mixHigh]: HalftoneTuple) => {
		// grid pattern

		const gridUv = screenCoordinate.xy.div(screenSize.yy).mul(count);
		const rotatedGridUv = rotate(gridUv, Math.PI * 0.25).mod(1);

		// orientation strength

		const orientationStrength = normalWorld.dot(direction.normalize()).remapClamp(end, start, 0, 1);

		// mask

		const mask = rotatedGridUv
			.sub(0.5)
			.length()
			.step(orientationStrength.mul(radius).mul(0.5))
			.mul(mix(mixLow, mixHigh, orientationStrength));

		return vec4(color, mask);
	},
);

export type BlendHalftoneColorTuple = [
	ShaderNodeObject<PropertyNode>,
	{
		count: ShaderNodeObject<UniformNode<number>>;
		color: ShaderNodeObject<UniformNode<Color>>;
		direction: ShaderNodeObject<UniformNode<Vector3>>;
		start: ShaderNodeObject<UniformNode<number>>;
		end: ShaderNodeObject<UniformNode<number>>;
		radius: ShaderNodeObject<UniformNode<number>>;
		mixLow: ShaderNodeObject<UniformNode<number>>;
		mixHigh: ShaderNodeObject<UniformNode<number>>;
	},
];

export const blendHalftoneColor = /*@__PURE__*/ Fn(([input, uniforms]: BlendHalftoneColorTuple) => {
	const blendedOutput = input;
	const { count, color, direction, start, end, radius, mixLow, mixHigh } = uniforms;
	const halftoneOutput = halftone(count, color, direction, start, end, radius, mixLow, mixHigh);
	blendedOutput.rgb.assign(mix(blendedOutput.rgb, halftoneOutput.rgb, halftoneOutput.a));
	return blendedOutput;
});
