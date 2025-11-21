import {
  Color,
  DataTexture,
  MeshToonNodeMaterial,
  RedFormat,
} from 'three/webgpu'

export class ToonMaterial extends MeshToonNodeMaterial {
  name = 'Toon'
  constructor() {
    const color = new Color(0xFF7F00)
    const colors = new Uint8Array(5)
    for (let i = 0; i < colors.length; i++) {
      colors[i] = (i / (colors.length - 1)) * 255
    }
    // console.log({ colors });
    const gradientMap = new DataTexture(colors, colors.length, 1, RedFormat)
    gradientMap.needsUpdate = true
    super({ color, gradientMap })
  }
}
