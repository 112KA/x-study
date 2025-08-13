import {
	abs,
	add,
	cos,
	Fn,
	min,
	mul,
	negate,
	positionLocal,
	select,
	sin,
	time,
	uniform,
	vec2,
	vec3,
} from "three/tsl";
import {
	Box,
	Butterfly,
	Circle,
	Ellipse,
	Flower,
	IntersectedCircleBox,
	Moon,
	UnionedCircleBox,
} from "./shape2D";
import type { IFunction } from "./types";

/**
 * @remarks
 * This function generates a Distance Lines effect using TSL.
 * The code is adapted from https://sbcode.net/tsl/distance-lines/.
 */

const uniforms = {
	radius: uniform(0.1),
	fade: uniform(3),
	amplitude: uniform(135),
};

export const DistanceLines: IFunction = {
	name: "DistanceLines",
	uniforms,
	Fn: Fn(() => {
		const p = positionLocal.xy;
		const t = time.div(2);
		const { radius, fade, amplitude } = uniforms;

		const offset = radius.mul(3.3);
		const circle = Circle(p.sub(vec2(-1, 1).mul(offset)), radius);

		const intersectedCircleBox = IntersectedCircleBox(
			p.sub(vec2(0, 1).mul(offset)),
			radius,
			t,
		);

		const ellipse = Ellipse(
			p.sub(vec2(1, 1).mul(offset)),
			radius,
			vec2(1, 2),
			t,
		);

		const flower = Flower(p.sub(vec2(-1, 0).mul(offset)), radius, 8, 0.1, t);

		// const butterfly = Butterfly(p, radius, 4, 0.1);
		const butterfly = Butterfly(
			vec2(p.x.div(sin(time.mul(2))), p.y),
			radius,
			4,
			0.1,
		);

		const moon = Moon(p.sub(vec2(1, 0).mul(offset)), radius, t);

		const box = Box(
			p.sub(vec2(-1, -1).mul(offset)),
			vec2(radius, 0.25),
			negate(t),
		);

		const unionedCircleBox = UnionedCircleBox(
			p.sub(vec2(0, -1).mul(offset)),
			radius,
			t,
		);

		const torus = Circle(p.sub(vec2(1, -1).mul(offset)), radius)
			.abs()
			.sub(0.05);
		// const torus = Ellipse(p.sub(vec2(0.5, -0.5)), radius, vec2(1, 2), time).abs().sub(0.05)
		// const torus = Box(p.sub(vec2(0.66, -0.66)), vec2(radius, 0.25), t).abs().sub(0.05)

		const sdfScene = min(circle, intersectedCircleBox);
		sdfScene.assign(min(sdfScene, ellipse));
		sdfScene.assign(min(sdfScene, flower));
		sdfScene.assign(min(sdfScene, butterfly));
		sdfScene.assign(min(sdfScene, moon));
		sdfScene.assign(min(sdfScene, box));
		sdfScene.assign(min(sdfScene, unionedCircleBox));
		sdfScene.assign(min(sdfScene, torus));

		// const colour = vec3(1);
		const colour = select(
			sdfScene.greaterThan(0),
			vec3(1.0, 0.05, 0.3).mul(sdfScene.mul(fade).oneMinus()),
			vec3(0.1, 0.2, 0.8).mul(sdfScene.mul(fade).add(1)),
		);
		// const colour = select(
		// 	sdfScene.lessThan(0),
		// 	vec3(add(0.5, mul(0.5, cos(time.add(p).add(vec3(0, 2, 4)))))).mul(
		// 		sdfScene.mul(fade).oneMinus(),
		// 	),
		// 	vec3(add(0.5, mul(0.5, cos(time.add(p).add(vec3(4, 2, 0)))))).mul(
		// 		abs(sdfScene.mul(fade)).oneMinus(),
		// 	),
		// );

		// const finalColour = colour.mul(sdfScene);
		const finalColour = colour.mul(
			sdfScene.mul(amplitude).add(time).sin().abs(),
		);

		return finalColour;
	})(),
};
