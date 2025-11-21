import type { ResourceItem } from 'x3/asset'
import type { ApplicationBase } from '../application-base'
import type { IPlugin } from './types'
import { AssetManager } from 'x3/asset'
import { PluginInitializationPhase } from './types'

export class AssetPlugin implements IPlugin {
  public name = 'asset'
  public version = '1.0.0'
  public initializationPhase = PluginInitializationPhase.BeforeScene

  public assetManager: AssetManager = new AssetManager()

  constructor(private resources: ResourceItem[]) {}

  async initialize(app: ApplicationBase): Promise<void> {
    // console.log('Initializing AssetPlugin...', { app })
    // AssetManagerの初期化や必要なアセットのロードを行う
    await this.assetManager.load(this.resources, app.rendererAdapter.renderer)
  }

  update(): void {
    // アセットの更新処理が必要な場合はここに記述
  }

  destroy(): void {
    // アセットマネージャーのクリーンアップ処理
  }
}
