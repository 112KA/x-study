import type TiledLightsNode from 'three/examples/jsm/tsl/lighting/TiledLightsNode.js'
import type OperatorNode from 'three/src/nodes/math/OperatorNode.js'
import type { ShaderNodeObject } from 'three/tsl'
import type { UniformNode, WebGPURenderer } from 'three/webgpu'
import type { PostProcessingHostContext } from 'x3/application/renderer'
import { TiledLighting } from 'three/examples/jsm/lighting/TiledLighting.js'
import { bloom } from 'three/examples/jsm/tsl/display/BloomNode.js'
import { pass, uniform } from 'three/tsl'
import {
  NeutralToneMapping,

} from 'three/webgpu'
import { AbstractPostProcessing } from 'x3/application/renderer/abstract-postporcessing'

export class TiledLightingPostProcessing extends AbstractPostProcessing {
  private compose!: ShaderNodeObject<OperatorNode>
  public tileInfluence!: ShaderNodeObject<UniformNode<number>>
  private lighting = new TiledLighting()

  constructor(
    hostContext: PostProcessingHostContext,
    public count: number,
  ) {
    super(hostContext)

    this.initialize()
  }

  private initialize(): void {
    const { scene, camera, rendererAdapter } = this.hostContext
    const renderer = rendererAdapter.renderer as WebGPURenderer
    renderer.lighting = this.lighting
    renderer.toneMapping = NeutralToneMapping
    renderer.toneMappingExposure = 5

    // post processing
    const scenePass = pass(scene, camera)
    const bloomPass = bloom(scenePass, 3, 0.9, 0.2)

    this.compose = scenePass.add(bloomPass)
    this.tileInfluence = uniform(0)

    this.update()
  }

  setTileInfluence(value: number): void {
    this.tileInfluence.value = value
  }

  update(): void {
    const { scene, camera, viewport, rendererAdapter } = this.hostContext
    const devicePixelRatio = rendererAdapter.getPixelRatio()

    // console.log("update", {
    //   devicePixelRatio,
    //   width: viewport.width,
    //   height: viewport.height,
    //   count: this.count,
    // });

    // tile indexes debug, needs to be updated every time the renderer size changes
    const debugBlockIndexes = (
      this.lighting.getNode(scene, camera) as TiledLightsNode
    )
      .setSize(
        viewport.width * devicePixelRatio,
        viewport.height * devicePixelRatio,
      )
      .getBlock()
      .toColor()
      .div(this.count * 2)

    this.outputNode = this.compose.add(
      debugBlockIndexes.mul(this.tileInfluence),
      // debugBlockIndexes,
    )
    this.needsUpdate = true
  }

  resize(): void {
    this.update()
  }
}
