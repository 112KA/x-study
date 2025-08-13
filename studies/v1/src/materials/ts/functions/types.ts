import type { ShaderNodeObject } from "three/tsl";
import type { Node, UniformNode } from "three/webgpu";

export interface IFunction {
	name: string;
	uniforms: Record<string, ShaderNodeObject<UniformNode<unknown>>>;
	Fn: ShaderNodeObject<Node>;
}
