import type { WebGPURenderer } from 'three/webgpu'
import type { AbstractPostProcessing } from './abstract-postporcessing'
import type { RendererHostContext, SupportedRenderer } from './types'
import { EventDispatcher, TimestampQuery } from 'three'

export class RendererAdapter extends EventDispatcher {
  protected previousTime = 0
  protected postProcessing: AbstractPostProcessing | null = null

  constructor(
    public renderer: SupportedRenderer,
    protected hostContext: RendererHostContext,
    protected updateCallback: (dt: number, time: DOMHighResTimeStamp) => void,
  ) {
    super()
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
        await this.postProcessing.renderAsync()
      }
      else {
        await renderer.renderAsync(scene, camera)
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

  addPostProcessing(postProcessing: AbstractPostProcessing): void {
    this.postProcessing = postProcessing
  }
}
