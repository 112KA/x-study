import type { ApplicationBase } from '../application-base'
import type { IPlugin } from './types'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { PluginInitializationPhase } from './types'

export class StatsPlugin implements IPlugin {
  public name = 'stats'
  public version = '1.0.0'
  public initializationPhase = PluginInitializationPhase.AfterScene

  private stats!: Stats

  initialize(app: ApplicationBase): void {
    this.stats = new Stats()
    this.stats.showPanel(0) // FPS
    app.$wrapper.appendChild(this.stats.dom)
  }

  update(): void {
    this.stats.update()
  }

  destroy(): void {
    if (this.stats.dom.parentElement) {
      this.stats.dom.parentElement.removeChild(this.stats.dom)
    }
  }
}
