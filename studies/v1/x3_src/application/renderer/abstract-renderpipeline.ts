import type { WebGPURenderer } from 'three/webgpu'
import type { RenderPipelineHostContext } from './types'
import { RenderPipeline } from 'three/webgpu'

export abstract class AbstractRenderPipeline extends RenderPipeline {
  protected hostContext: RenderPipelineHostContext

  constructor(hostContext: RenderPipelineHostContext) {
    const { rendererAdapter } = hostContext
    super(rendererAdapter.renderer as WebGPURenderer)
    this.hostContext = hostContext

    rendererAdapter.addRenderPipeline(this)
  }

  abstract update(): void

  abstract resize(): void
}
