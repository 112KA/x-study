import type MathNode from "three/src/nodes/math/MathNode.js";
import type OperatorNode from "three/src/nodes/math/OperatorNode.js";
import type {
	MathNodeParameter,
	OperatorNodeParameter,
	ShaderNodeObject,
} from "three/src/nodes/TSL.js";
import {
	abs,
	atan,
	cos,
	Fn,
	length,
	max,
	min,
	negate,
	rotateUV,
	vec2,
} from "three/tsl";
import type { Node } from "three/webgpu";

export const Circle = Fn(
	([position, radius]: [MathNodeParameter, OperatorNodeParameter]) => {
		return length(position).sub(radius);
	},
);

export const Ellipse = Fn(
	([position, radius, scale, angle]: [
		Node,
		OperatorNodeParameter,
		OperatorNodeParameter,
		Node,
	]) => {
		const angledPosition = rotateUV(position, angle, vec2());
		const scaledPosition = angledPosition.mul(scale);
		return length(scaledPosition).sub(radius);
	},
);

export const Box = Fn(
	([position, dimensions, angle]: [Node, OperatorNodeParameter, Node]) => {
		const angledPosition = rotateUV(position, angle, vec2());
		const distance = abs(angledPosition).sub(dimensions);
		return length(max(distance, 0.0)).add(
			min(max(distance.x, distance.y), 0.0),
		);
	},
);

export const Flower = Fn(
	([position, radius, frequency, amplitude, angle]: [
		Node,
		OperatorNodeParameter,
		OperatorNodeParameter,
		OperatorNodeParameter,
		Node,
	]) => {
		const angledPosition = rotateUV(position, angle, vec2());
		const circleAngle = atan(angledPosition.y, angledPosition.x); // Get the angle around the circle
		const bumps = cos(circleAngle.mul(frequency)).mul(amplitude);
		return length(position).sub(radius).add(bumps);
	},
);

export const Butterfly = Fn(
	([position, radius, frequency, amplitude]: [
		ShaderNodeObject<MathNode>,
		OperatorNodeParameter,
		OperatorNodeParameter,
		ShaderNodeObject<OperatorNode>,
	]) => {
		const circleAngle = atan(position.y, position.x);
		const bumps = cos(circleAngle.mul(frequency)).mul(
			amplitude.mul(negate(position.y).mul(1.5).oneMinus()),
		);
		return length(position).sub(radius).add(bumps);
	},
);

export const Moon = Fn(
	([position, radius, angle]: [Node, OperatorNodeParameter, Node]) => {
		const angledPosition = rotateUV(position, angle, vec2());
		const innerCircle = length(
			angledPosition.div(0.8).sub(vec2(0.15, 0.0)),
		).sub(radius);
		const outerCircle = length(position).sub(radius);
		return max(negate(innerCircle), outerCircle); // subtraction
	},
);

export const IntersectedCircleBox = Fn(
	([position, radius, angle]: [Node, ShaderNodeObject<OperatorNode>, Node]) => {
		const circle = length(position).sub(radius);
		const angledPosition = rotateUV(position, angle, vec2());
		const box = Box(
			angledPosition,
			vec2(radius.sub(0.025), radius.sub(0.025)),
			0,
		);
		return max(circle, box);
	},
);

export const UnionedCircleBox = Fn(
	([position, radius, angle]: [Node, ShaderNodeObject<OperatorNode>, Node]) => {
		const circle = length(position).sub(radius);
		const angledPosition = rotateUV(position, angle, vec2());
		const box = Box(
			angledPosition,
			vec2(radius.sub(0.025), radius.sub(0.025)),
			0,
		);
		return min(circle, box);
	},
);
