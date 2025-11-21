import type { Object3D, Texture, WebGLRenderer } from 'three'
import type { Font, GLTF, KTX2Loader } from 'three/examples/jsm/Addons.js'
import type { WebGPURenderer } from 'three/webgpu'
import type { TextureAtlas } from 'x3/textures/texture-atlas.js'
import type { IResolver } from './resolver/index.js'
import type { ResourceItem } from './types.js'
import {
  EventDispatcher,

  REVISION,

} from 'three'
import {
  LoadingManager,

} from 'three/webgpu'
import { assertIsDefined } from 'x'
import {
  FontResolver,
  GLTFResolver,

  TextureAtlasResolver,
  TextureResolver,
} from './resolver/index.js'

export interface AssetManagerEventMap {
  loaded: object
  progress: {
    url: string | string[]
    progress: number
  }
  error: {
    url: string
  }
}

const THREE_CDN_PATH = `https://unpkg.com/three@0.${REVISION}.x`

const _LOG_PREFIX = '[AssetManager]'

export class AssetManager extends EventDispatcher<AssetManagerEventMap> {
  public loadingManager: LoadingManager = new LoadingManager()

  #resolvers: Record<string, IResolver> = {
    font: new FontResolver(this),
    texture: new TextureResolver(this, THREE_CDN_PATH),
    gltf: new GLTFResolver(this, THREE_CDN_PATH),
    atlas: new TextureAtlasResolver(this),
  }

  textures: Record<string, Texture> = {}
  objects: Record<string, Object3D | GLTF> = {}
  atlases: Record<string, TextureAtlas> = {}
  fonts: Record<string, Font> = {}

  constructor() {
    super()

    this.loadingManager.onError = this.#onError
  }

  public async loadSingle(url: string): Promise<unknown> {
    const loader = this.loadingManager.getHandler(url)
    assertIsDefined(loader)
    return await loader.loadAsync(url)
  }

  public async load(
    resources: ResourceItem[],
    renderer: WebGPURenderer | WebGLRenderer,
  ): Promise<void> {
    if (!renderer) {
      throw new Error('You must provide a renderer to the load function.')
    }

    const ktx2Loader = this.loadingManager.getHandler('.ktx2') as KTX2Loader
    // let workerConfig: unknown
    assertIsDefined(ktx2Loader)
    if ((renderer as WebGPURenderer).isWebGPURenderer) {
      await ktx2Loader.detectSupportAsync(renderer as WebGPURenderer)
    }
    else {
      ktx2Loader.detectSupport(renderer)
    }
    // console.info(workerConfig)

    // console.groupCollapsed(`${_LOG_PREFIX} load`)

    for (const [index, resource] of resources.entries()) {
      const { type } = resource
      let targetUrl: string | string[] = ''
      if (type === undefined) {
        const { url } = resource
        const loaded = await this.loadSingle(url)
        targetUrl = url
        const resolver = Object.values(this.#resolvers).find(resolver =>
          resolver.check(loaded),
        )
        assertIsDefined(resolver)
        resolver.resolve(resource, loaded, renderer)
      }
      else if (type === 'atlas') {
        const { jsonUrl, textureUrl } = resource
        targetUrl = [jsonUrl, textureUrl]
        const loaded: unknown[] = await Promise.all([
          this.loadSingle(jsonUrl),
          this.loadSingle(textureUrl),
        ])
        this.#resolvers.atlas.resolve(resource, loaded, renderer)
      }

      // console.info(_LOG_PREFIX, 'Loaded', { targetUrl })

      this.dispatchEvent({
        type: 'progress',
        url: targetUrl,
        progress: index / resources.length,
      })
    }

    // console.info(_LOG_PREFIX, 'Load Completed', { assetManager: this })
    // console.groupEnd()

    this.dispatchEvent({ type: 'loaded' })
  }

  #onError = (url: string): void => {
    this.dispatchEvent({ type: 'error', url })
  }
}
