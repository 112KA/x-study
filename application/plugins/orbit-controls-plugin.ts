import type { ApplicationBase } from '../application-base'
import type { IPlugin } from './types.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { PluginInitializationPhase } from './types.js'

export class OrbitControlsPlugin implements IPlugin {
  public name = 'orbitControls'
  public version = '1.0.0'
  public initializationPhase = PluginInitializationPhase.AfterScene

  private controls!: OrbitControls

  initialize(app: ApplicationBase): void {
    this.controls = new OrbitControls(app.camera, app.$wrapper)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.25
  }

  update(): void {
    this.controls.update()
  }

  resize(_width: number, _height: number): void {
    // OrbitControlsは自動的にサイズ変更を処理するため、通常は何もしない
  }

  destroy(): void {
    this.controls.dispose()
  }
}
