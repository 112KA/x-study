import type { MeshParticle } from './MeshParticle'
import type { PointParticle } from './PointParticle'
import { Pane } from 'tweakpane'

export interface ControlsParams {
  particle: PointParticle | MeshParticle
}
export class Controls extends Pane {
  constructor({ particle: _particle }: ControlsParams) {
    super({ title: 'Controls' })
  }
}
