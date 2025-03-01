import { Fn, type ShaderNodeObject, float, vec3 } from "three/tsl";
import type { VarNode } from "three/webgpu";
import { snoise3 } from "./snoise3";

// Three.js Transpiler r174

export const snoiseVec3 = /*#__PURE__*/ Fn(([x_immutable]: [ShaderNodeObject<VarNode>]) => {
	const x = vec3(x_immutable).toVar();
	const s = float(snoise3(vec3(x))).toVar();
	const s1 = float(snoise3(vec3(x.y.sub(19.1), x.z.add(33.4), x.x.add(47.2)))).toVar();
	const s2 = float(snoise3(vec3(x.z.add(74.2), x.x.sub(124.5), x.y.add(99.4)))).toVar();

	return vec3(s, s1, s2);
}).setLayout({
	name: "snoiseVec3",
	type: "vec3",
	inputs: [{ name: "x", type: "vec3" }],
});

export const curl = /*#__PURE__*/ Fn(([pos_immutable]: [ShaderNodeObject<VarNode>]) => {
	const pos = vec3(pos_immutable).toVar();
	const a = vec3(snoiseVec3(pos)).toVar();
	const b = vec3(snoiseVec3(pos.add(vec3(1.23456, 7.89012, 3.45678)))).toVar();

	return a.cross(b);
}).setLayout({
	name: "curl",
	type: "vec3",
	inputs: [{ name: "pos", type: "vec3" }],
});
