import type { IFunction } from './types'
import {
  mx_noise_float,
  time,
  uniform,
  uv,
} from 'three/tsl'

const uniforms = {
  timeScale: uniform(10.0),
  amplitude: uniform(1.0),
  pivot: uniform(0),
}

export const Noise: IFunction = {
  name: 'Noise',
  uniforms,
  Fn: mx_noise_float(
    uv().mul(uniforms.timeScale).add(time),
    uniforms.amplitude,
    uniforms.pivot,
  ),
}
