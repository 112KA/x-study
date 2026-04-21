import type { WebGPURenderer } from 'three/webgpu'
import type { AbstractRenderPipeline } from './abstract-renderpipeline'
import type { RendererHostContext, SupportedRenderer } from './types'
import { EventDispatcher, TimestampQuery } from 'three'

export class RendererAdapter extends EventDispatcher {
  protected previousTime = 0
  protected postProcessing: AbstractRenderPipeline | null = null
  public readonly renderer: SupportedRenderer
  protected hostContext: RendererHostContext
  protected updateCallback: (dt: number, time: DOMHighResTimeStamp) => void

  constructor(
    renderer: SupportedRenderer,
    hostContext: RendererHostContext,
    updateCallback: (dt: number, time: DOMHighResTimeStamp) => void,
  ) {
    super()
    this.renderer = renderer
    this.hostContext = hostContext
    this.updateCallback = updateCallback
  }

  setPixelRatio(ratio: number): void {
    this.renderer.setPixelRatio(ratio)
  }

  getPixelRatio(): number {
    return this.renderer.getPixelRatio()
  }

  setSize(width: number, height: number, updateStyle = true): void {
    this.renderer.setSize(width, height, updateStyle)
    if (this.postProcessing !== null) {
      this.postProcessing.resize()
    }
  }

  // WebGPU特有の処理
  async render(): Promise<void> {
    const renderer = this.renderer as WebGPURenderer
    const { scene, camera } = this.hostContext

    if (renderer.isWebGPURenderer) {
      if (this.postProcessing !== null) {
        await this.postProcessing.render()
      }
      else {
        renderer.render(scene, camera)
      }
      renderer.resolveTimestampsAsync(TimestampQuery.RENDER)
    }
    else {
      this.renderer.render(scene, camera)
    }
  }

  start(): void {
    this.renderer.setAnimationLoop(this.handleTick)
  }

  protected handleTick = (
    time: DOMHighResTimeStamp,
    _frame: XRFrame | undefined,
  ): void => {
    const dt = time - this.previousTime
    this.previousTime = time
    this.updateCallback(dt, time)
  }

  dispose(): void {
    this.renderer.setAnimationLoop(null)
    this.renderer.dispose()
  }

  get domElement(): HTMLCanvasElement {
    return this.renderer.domElement
  }

  addRenderPipeline(postProcessing: AbstractRenderPipeline): void {
    this.postProcessing = postProcessing
  }
}
