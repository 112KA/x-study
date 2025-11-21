import type { ShaderNodeObject } from 'three/tsl'
import type { UniformNode } from 'three/webgpu'
import { NodeMaterial } from 'three/webgpu'

export abstract class AbstractControlNodeMaterial extends NodeMaterial {
  public uniforms: Record<string, ShaderNodeObject<UniformNode<unknown>>> = {}
}
