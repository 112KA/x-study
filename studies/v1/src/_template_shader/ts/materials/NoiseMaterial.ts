import {
  mx_noise_float,
  time,
  uniform,
  uv,
} from 'three/tsl'
import { AbstractControlNodeMaterial } from '../../../common/AbstractControlNodeMaterial'

export class NoiseMaterial extends AbstractControlNodeMaterial {
  name = 'Noise'

  constructor() {
    super()

    this.uniforms = {
      timeScale: uniform(10),
      amplitude: uniform(1),
      pivot: uniform(0),
    }

    const { timeScale, amplitude, pivot } = this.uniforms
    this.colorNode = mx_noise_float(
      uv().mul(timeScale).add(time),
      amplitude,
      pivot,
    )
  }
}
