import { AmbientLight, Color, Fog } from "three";
import type { WebGPURenderer } from "three/webgpu";
import { ApplicationBase, type AssetPlugin } from "x3/application";
import { Ground } from "./Ground.js";
import { LightGroup } from "./LightGroup.js";
import { TiledLightingPostProcessing } from "./TiledLightingPostProcessing.js";

export class Application extends ApplicationBase {
	count = 200;
	lightGroup!: LightGroup;
	postProcessing!: TiledLightingPostProcessing;

	protected override initializeScene() {
		super.initializeScene();

		this.camera.position.set(0, 30, 200);

		this.scene.fog = new Fog(0x111111, 300, 500);
		this.scene.background = new Color(0x111111);

		// ライト管理の初期化
		this.lightGroup = new LightGroup(this.count);
		this.scene.add(this.lightGroup);

		// 環境光
		const lightAmbient = new AmbientLight(0xffffff, 0.1);
		this.scene.add(lightAmbient);

		// textures
		const { assetManager } = this.plugin.get<AssetPlugin>("asset")!;

		const {
			FloorsCheckerboard_S_Diffuse: texDiffuse,
			FloorsCheckerboard_S_Normal: texNormal,
		} = assetManager.textures;

		// 地面の作成
		const ground = new Ground(texDiffuse, texNormal);
		this.scene.add(ground);

		// post processing
		this.postProcessing = new TiledLightingPostProcessing(this, this.count);
	}

	protected async update(dt: number, timeMS: number) {
		const timeS = timeMS / 1000;

		// ライトの更新
		this.lightGroup.updateLights(timeS);

		super.update(dt, timeMS);
	}

	protected async resize(width: number, height: number) {
		super.resize(width, height);
	}
}
