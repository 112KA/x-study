import { type ShaderNodeObject, uniform } from "three/tsl";
import { NodeMaterial, type Uniform, type UniformNode } from "three/webgpu";

export abstract class AbstractControlNodeMaterial extends NodeMaterial {
	public uniforms: Record<string, ShaderNodeObject<UniformNode<unknown>>> = {};
}
