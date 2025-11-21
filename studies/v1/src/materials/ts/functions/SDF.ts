import type { IFunction } from './types'
import {
  Fn,
  min,
  negate,
  positionLocal,
  time,
  uniform,
  vec2,
  vec3,
} from 'three/tsl'
import { Box, Circle, Ellipse } from './shape2D'

/**
 * @remarks
 * This function generates a Signed Distance Fields effect using TSL.
 * The code is adapted from https://sbcode.net/tsl/2d-sdf/.
 */

const uniforms = {
  radius: uniform(0.2),
}

export const SDF: IFunction = {
  name: 'SDF',
  uniforms,
  Fn: Fn(() => {
    const p = positionLocal.xy

    const { radius } = uniforms
    const circle = Circle(p.sub(vec2(-1, 1).mul(radius)), radius)

    const ellipse = Ellipse(
      p.sub(vec2(1, 1).mul(radius)),
      radius,
      vec2(1, 2),
      time,
    )

    const box = Box(
      p.sub(vec2(-1, -1).mul(radius)),
      vec2(1, 0.5).mul(radius),
      negate(time),
    )

    const torus = Circle(p.sub(vec2(1, -1).mul(radius)), radius)
      .abs()
      .sub(0.05)

    const finalColour = vec3(1).mul(circle)
    finalColour.assign(min(finalColour, ellipse))
    finalColour.assign(min(finalColour, box))
    finalColour.assign(min(finalColour, torus))

    return finalColour
  })(),
}
