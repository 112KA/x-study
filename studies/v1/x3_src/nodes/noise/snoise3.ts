//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//        noise functions.
//   Author : Ian McEwan, Ashima Arts.
// Maintainer : stegu
//  Lastmod : 20201014 (stegu)
//  License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//      Distributed under the MIT License. See LICENSE file.
//      https://github.com/ashima/webgl-noise
//      https://github.com/stegu/webgl-noise
//
//
// 本ファイルは上記リポジトリのコードをベースに、MITライセンスに従って作成されました。
// 元のコードの著作権は Ashima Arts に帰属します。

import {
	Fn,
	type ShaderNodeObject,
	abs,
	dot,
	float,
	floor,
	max,
	min,
	mul,
	step,
	sub,
	vec2,
	vec3,
	vec4,
} from "three/tsl";
import type { VarNode } from "three/webgpu";

export const mod289_v3 = /*#__PURE__*/ Fn(([x_immutable]: [ShaderNodeObject<VarNode>]) => {
	const x = vec3(x_immutable).toVar();

	return x.sub(floor(x.mul(1.0 / 289.0)).mul(289.0));
}).setLayout({
	name: "mod289_v3",
	type: "vec3",
	inputs: [{ name: "x", type: "vec3" }],
});

export const mod289_v4 = /*#__PURE__*/ Fn(([x_immutable]: [ShaderNodeObject<VarNode>]) => {
	const x = vec4(x_immutable).toVar();

	return x.sub(floor(x.mul(1.0 / 289.0)).mul(289.0));
}).setLayout({
	name: "mod289_v4",
	type: "vec4",
	inputs: [{ name: "x", type: "vec4" }],
});

export const permute = /*#__PURE__*/ Fn(([x_immutable]: [ShaderNodeObject<VarNode>]) => {
	const x = vec4(x_immutable).toVar();

	return mod289_v4(x.mul(34.0).add(10.0).mul(x));
}).setLayout({
	name: "permute",
	type: "vec4",
	inputs: [{ name: "x", type: "vec4" }],
});

export const taylorInvSqrt = /*#__PURE__*/ Fn(([r_immutable]: [ShaderNodeObject<VarNode>]) => {
	const r = vec4(r_immutable).toVar();

	return sub(1.79284291400159, mul(0.85373472095314, r));
}).setLayout({
	name: "taylorInvSqrt",
	type: "vec4",
	inputs: [{ name: "r", type: "vec4" }],
});

export const snoise3 = /*#__PURE__*/ Fn(([v_immutable]: [ShaderNodeObject<VarNode>]) => {
	const v = vec3(v_immutable).toVar();
	const C = vec2(1.0 / 6.0, 1.0 / 3.0);
	const D = vec4(0.0, 0.5, 1.0, 2.0);
	const i = vec3(floor(v.add(dot(v, C.yyy)))).toVar();
	const x0 = vec3(v.sub(i).add(dot(i, C.xxx))).toVar();
	const g = vec3(step(x0.yzx, x0.xyz)).toVar();
	const l = vec3(sub(1.0, g)).toVar();
	const i1 = vec3(min(g.xyz, l.zxy)).toVar();
	const i2 = vec3(max(g.xyz, l.zxy)).toVar();
	const x1 = vec3(x0.sub(i1).add(C.xxx)).toVar();
	const x2 = vec3(x0.sub(i2).add(C.yyy)).toVar();
	const x3 = vec3(x0.sub(D.yyy)).toVar();
	i.assign(mod289_v3(i));
	const p = vec4(
		permute(
			permute(
				permute(i.z.add(vec4(0.0, i1.z, i2.z, 1.0)))
					.add(i.y)
					.add(vec4(0.0, i1.y, i2.y, 1.0)),
			)
				.add(i.x)
				.add(vec4(0.0, i1.x, i2.x, 1.0)),
		),
	).toVar();
	const n_ = float(0.142857142857).toVar();
	const ns = vec3(n_.mul(D.wyz).sub(D.xzx)).toVar();
	const j = vec4(p.sub(mul(49.0, floor(p.mul(ns.z).mul(ns.z))))).toVar();
	const x_ = vec4(floor(j.mul(ns.z))).toVar();
	const y_ = vec4(floor(j.sub(mul(7.0, x_)))).toVar();
	const x = vec4(x_.mul(ns.x).add(ns.yyyy)).toVar();
	const y = vec4(y_.mul(ns.x).add(ns.yyyy)).toVar();
	const h = vec4(sub(1.0, abs(x)).sub(abs(y))).toVar();
	const b0 = vec4(x.xy, y.xy).toVar();
	const b1 = vec4(x.zw, y.zw).toVar();
	const s0 = vec4(floor(b0).mul(2.0).add(1.0)).toVar();
	const s1 = vec4(floor(b1).mul(2.0).add(1.0)).toVar();
	const sh = vec4(step(h, vec4(0.0)).negate()).toVar();
	const a0 = vec4(b0.xzyw.add(s0.xzyw.mul(sh.xxyy))).toVar();
	const a1 = vec4(b1.xzyw.add(s1.xzyw.mul(sh.zzww))).toVar();
	const p0 = vec3(a0.xy, h.x).toVar();
	const p1 = vec3(a0.zw, h.y).toVar();
	const p2 = vec3(a1.xy, h.z).toVar();
	const p3 = vec3(a1.zw, h.w).toVar();
	const norm = vec4(taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)))).toVar();
	p0.mulAssign(norm.x);
	p1.mulAssign(norm.y);
	p2.mulAssign(norm.z);
	p3.mulAssign(norm.w);
	const m = vec4(max(sub(0.5, vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3))), 0.0)).toVar();
	m.assign(m.mul(m));

	return mul(105.0, dot(m.mul(m), vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))));
}).setLayout({
	name: "snoise3",
	type: "float",
	inputs: [{ name: "v", type: "vec3" }],
});
