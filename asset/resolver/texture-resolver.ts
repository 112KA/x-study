import type { Texture, WebGLRenderer } from 'three'
import type { Renderer, WebGPURenderer } from 'three/webgpu'
import type { AssetManager } from '../asset-manager.js'
import type { ResourceItem } from '../types.js'
import type { IResolver } from './types.js'
import {
  RepeatWrapping,
  SRGBColorSpace,

  TextureLoader,

} from 'three'
import { KTX2Loader } from 'three/examples/jsm/Addons.js'

const IMAGE_HANDLER_REGEX = /\.(png|jpg|webp)$/i
const KTX2_HANDLER_REGEX = /\.(ktx2)$/i

export class TextureResolver implements IResolver {
  name = 'TextureResolver'
  constructor(
    public manager: AssetManager,
    threeCDNPath: string,
  ) {
    const { loadingManager } = manager

    loadingManager.addHandler(
      IMAGE_HANDLER_REGEX,
      new TextureLoader(loadingManager),
    )

    loadingManager.addHandler(
      KTX2_HANDLER_REGEX,
      new KTX2Loader(loadingManager).setTranscoderPath(
        `${threeCDNPath}/examples/jsm/libs/basis/`,
      ),
    )
  }

  check(loaded: unknown): boolean {
    return (loaded as Texture).isTexture
  }

  resolve(
    resource: ResourceItem,
    loaded: unknown,
    renderer: Renderer | WebGLRenderer,
  ): void {
    const texture = loaded as Texture

    if (renderer.outputColorSpace === SRGBColorSpace) {
      texture.colorSpace = SRGBColorSpace
    }

    texture.wrapS = texture.wrapT = RepeatWrapping

    if ((renderer as WebGPURenderer).isWebGPURenderer) {
      texture.flipY = false
    }

    this.manager.textures[resource.id] = loaded as Texture
  }
}
