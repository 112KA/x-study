import { normalFlat, vec4 } from 'three/tsl'
import { MeshBasicNodeMaterial } from 'three/webgpu'

export class NormalMaterial extends MeshBasicNodeMaterial {
  name = 'Normal'

  constructor() {
    super()
    this.outputNode = vec4(normalFlat, 1)
  }
}
