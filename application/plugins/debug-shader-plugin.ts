import type { Camera, Object3D, Scene, WebGPURenderer } from 'three/webgpu'
import type { ApplicationBase } from '../application-base'
import type { IPlugin } from './types.js'
import { PluginInitializationPhase } from './types.js'

export class DebugShaderPlugin implements IPlugin {
  public name = 'debugShader'
  public version = '1.0.0'
  public initializationPhase = PluginInitializationPhase.AfterScene

  public renderer!: WebGPURenderer
  public scene!: Scene
  public camera!: Camera

  initialize(app: ApplicationBase): void {
    const { scene, camera, rendererAdapter } = app
    this.renderer = rendererAdapter.renderer as WebGPURenderer
    if (!this.renderer.isWebGPURenderer) {
      throw new Error('DebugShaderPlugin requires WebGPURenderer.')
    }
    this.scene = scene
    this.camera = camera

    // console.log('DebugShaderPlugin initialized.')
  }

  update(): void {}

  resize(_width: number, _height: number): void {}

  destroy(): void {}

  async info(targetObject: Object3D): Promise<void> {
    const rawShader = await this.renderer.debug.getShaderAsync(
      this.scene,
      this.camera,
      targetObject,
    )

    const style
      = 'background-color: #333; color: white; font-style: italic; border: 2px solid #777; font-size: 22px;'

    /* eslint-disable no-console */
    console.log('%c  [ WGSL ] Vertex Shader      ', style)
    console.log(rawShader.vertexShader)
    console.log('%c  [ WGSL ] Fragment Shader    ', style)
    console.log(rawShader.fragmentShader)
    /* eslint-enable no-console */
  }
}
