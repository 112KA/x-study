import type { WebGLRenderer } from 'three'
import type { GLTF, KTX2Loader } from 'three/examples/jsm/Addons.js'
import type { Renderer } from 'three/webgpu'
import type { AssetManager } from '../asset-manager.js'
import type { ResourceItem } from '../types.js'
import type { IResolver } from './types.js'
import {
  DRACOLoader,
  GLTFLoader,
} from 'three/examples/jsm/Addons.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'

const HANDLER_REGEX = /\.(gltf|glb)$/i

export type GLTFLoaderMode = 'draco' | 'meshopt'

export interface GLTFResolverOptions {
  loaderMode?: GLTFLoaderMode
}

export class GLTFResolver implements IResolver {
  name = 'GLTFResolver'
  constructor(
    public manager: AssetManager,
    threeCDNPath: string,
    options: GLTFResolverOptions = {},
  ) {
    const { loadingManager } = manager
    const ktx2Loader = loadingManager.getHandler('.ktx2') as KTX2Loader
    const gltfLoader = new GLTFLoader(loadingManager).setKTX2Loader(ktx2Loader)

    const loaderMode = options.loaderMode ?? 'meshopt'
    if (loaderMode === 'draco') {
      const dracoLoader = new DRACOLoader(loadingManager).setDecoderPath(
        `${threeCDNPath}/examples/jsm/libs/draco/gltf/`,
      )
      gltfLoader.setDRACOLoader(dracoLoader)
    }
    else {
      gltfLoader.setMeshoptDecoder(MeshoptDecoder)
    }

    loadingManager.addHandler(HANDLER_REGEX, gltfLoader)
  }

  check(loaded: unknown): boolean {
    return (loaded as GLTF).scene !== undefined
  }

  resolve(resource: ResourceItem, loaded: unknown, _renderer: Renderer | WebGLRenderer): void {
    this.manager.objects[resource.id] = loaded as GLTF
  }
}
