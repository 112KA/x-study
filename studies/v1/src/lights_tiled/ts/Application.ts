import type { AssetPlugin } from 'x3/application'
import { AmbientLight, Color, Fog } from 'three'
import GUI from 'three/examples/jsm/libs/lil-gui.module.min.js'
import { ApplicationBase } from 'x3/application'
import { GroundSphere } from './GroundSphere'
import { LightGroup } from './LightGroup'
import { TiledLightingRenderPipeline } from './TiledLightingRenderPipeline'

export const LIGHT_COUNT = 1000

export class Application extends ApplicationBase {
  lights = new LightGroup(LIGHT_COUNT)

  protected override async setupRenderer() {
    await super.setupRenderer()

    const postProcessing = new TiledLightingRenderPipeline(this, LIGHT_COUNT)
    this.rendererAdapter.addRenderPipeline(postProcessing)

    const gui = new GUI()
    gui
      .add(postProcessing.tileInfluence, 'value', 0, 1)
      .name('tile indexes debug')
  }

  protected override initializeScene() {
    super.initializeScene()

    this.camera.position.set(0, 30, 200)

    this.scene.fog = new Fog(0x111111, 300, 500)
    this.scene.background = new Color(0x111111)

    this.scene.add(this.lights)

    const lightAmbient = new AmbientLight(0xFFFFFF, 0.1)
    this.scene.add(lightAmbient)

    // textures
    const { assetManager } = this.plugin.get<AssetPlugin>('asset')!

    const {
      FloorsCheckerboard_S_Diffuse: texDiffuse,
      FloorsCheckerboard_S_Normal: texNormal,
    } = assetManager.textures

    // const ground = new Ground(texDiffuse, texNormal);
    const ground = new GroundSphere(texDiffuse, texNormal)
    this.scene.add(ground)
  }

  override async update(dt: number, timeMS: number) {
    super.update(dt, timeMS)

    const now = timeMS / 1000
    this.lights.updateLights(now)
  }

  override resize(width: number, height: number) {
    super.resize(width, height)
  }
}
