import type { RenderPipelineHostContext } from 'x3/application/renderer/types.js'
import { toonOutlinePass } from 'three/tsl'
import { AbstractRenderPipeline } from 'x3/application/renderer/abstract-renderpipeline.js'

export class ToonOutlinePostProcessing extends AbstractRenderPipeline {
  constructor(hostContext: RenderPipelineHostContext) {
    super(hostContext)

    this.outputNode = toonOutlinePass(
      hostContext.scene,
      hostContext.camera,
      undefined,
      0.005,
    )
  }

  update(): void {
    // 必要に応じてアウトラインの更新処理を追加
  }

  resize(): void {
    // 必要に応じてリサイズ処理を追加
  }
}
