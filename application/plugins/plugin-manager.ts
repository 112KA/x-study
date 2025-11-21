import type { ApplicationBase } from '../application-base'
import type { IPlugin, IPluginManager } from './types'
import {

  PluginInitializationPhase,
} from './types'

export class PluginManager implements IPluginManager {
  private plugins = new Map<string, IPlugin>()

  constructor(private app: ApplicationBase) {}

  register(plugin: IPlugin): void {
    if (this.plugins.has(plugin.name)) {
      console.warn(`Plugin "${plugin.name}" is already registered`)
      return
    }

    this.plugins.set(plugin.name, plugin)
  }

  unregister(pluginName: string): void {
    const plugin = this.plugins.get(pluginName)
    if (plugin) {
      plugin.destroy?.()
      this.plugins.delete(pluginName)
    }
  }

  get<T>(pluginName: string): T | undefined {
    return this.plugins.get(pluginName) as T
  }

  has(pluginName: string): boolean {
    return this.plugins.has(pluginName)
  }

  getAll(): IPlugin[] {
    return Array.from(this.plugins.values())
  }

  // フェーズ別でプラグインを取得
  private getPluginsByPhase(phase: PluginInitializationPhase): IPlugin[] {
    return Array.from(this.plugins.values()).filter(
      plugin =>
        (plugin.initializationPhase ?? PluginInitializationPhase.AfterScene)
        === phase,
    )
  }

  // シーン初期化前のプラグイン初期化
  async initializeAllBeforeScene(): Promise<void> {
    const beforeScenePlugins = this.getPluginsByPhase(
      PluginInitializationPhase.BeforeScene,
    )
    const promises = beforeScenePlugins.map(plugin =>
      plugin.initialize(this.app),
    )
    await Promise.all(promises)
  }

  // シーン初期化後のプラグイン初期化
  async initializeAllAfterScene(): Promise<void> {
    const afterScenePlugins = this.getPluginsByPhase(
      PluginInitializationPhase.AfterScene,
    )
    const promises = afterScenePlugins.map(plugin =>
      plugin.initialize(this.app),
    )
    await Promise.all(promises)
  }

  updateAll(dt: number, time: number): void {
    for (const plugin of this.plugins.values()) {
      plugin.update?.(dt, time)
    }
  }

  resizeAll(width: number, height: number): void {
    for (const plugin of this.plugins.values()) {
      plugin.resize?.(width, height)
    }
  }

  async destroyAll(): Promise<void> {
    const promises = Array.from(this.plugins.values()).map(plugin =>
      plugin.destroy?.(),
    )
    await Promise.all(promises)
    this.plugins.clear()
  }
}
