import type { IFunction } from './types'
import {
  abs,
  Fn,
  fract,
  length,
  max,
  positionLocal,
  pow,
  sin,
  time,
  uniform,
  vec3,
} from 'three/tsl'

/**
 * @remarks
 * This function generates a kaleidoscope effect using TSL.
 * The code is adapted from https://sbcode.net/tsl/uniforms/.
 *
 * @param uniforms - An object containing the uniforms used in the kaleidoscope effect.
 * @param uniforms.radius - The radius of the kaleidoscope effect.
 * @param uniforms.timeScale - The time scale of the kaleidoscope effect.
 * @param uniforms.zoom - The zoom level of the kaleidoscope effect.
 * @param uniforms.layerZoom - The zoom level of each layer in the kaleidoscope effect.
 * @param uniforms.intensity - The intensity of the kaleidoscope effect.
 * @param uniforms.rings - The number of rings in the kaleidoscope effect.
 *
 * @returns An object containing the name of the function, the uniforms, and the TSL function.
 */
const uniforms = {
  radius: uniform(0.1),
  timeScale: uniform(2),
  zoom: uniform(3),
  layerZoom: uniform(0.5),
  intensity: uniform(2),
  rings: uniform(16),
}

const colours = [vec3(1.0, 0.05, 0.3), vec3(0.1, 0.4, 1.0), vec3(0.2, 1, 0.2)]

export const Kaleidoscope: IFunction = {
  name: 'Kaleidoscope',
  uniforms,
  Fn: Fn(() => {
    const p = positionLocal.toVar()

    p.mulAssign(uniforms.zoom)

    const finalColour = vec3().toVar()

    for (let i = 0; i < 3; i++) {
      p.mulAssign(sin(i).add(uniforms.layerZoom))

      p.assign(fract(p).sub(0.5))

      const distance = length(p)

      distance.assign(
        sin(distance.mul(uniforms.rings).sub(time.mul(uniforms.timeScale))),
      )
      distance.assign(abs(distance))

      // glow equation = pow(radius/distance), intensity)
      distance.assign(pow(uniforms.radius.div(distance), uniforms.intensity))

      finalColour.assign(max(finalColour, colours[i].mul(distance)))
    }

    return finalColour
  })(),
}
