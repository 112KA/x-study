import type { WebGPURenderer } from "three/webgpu";
import { ApplicationBase } from "x3/application";
import { Background } from "./Background";
import { Controls } from "./Controls";
import { NoiseMaterial } from "./materials";

export class Application extends ApplicationBase {
	background = new Background();

	protected override initializeScene() {
		super.initializeScene();

		const materials = [new NoiseMaterial()];
		this.background.material = materials[0];
		new Controls({ targetMesh: this.background, materials });
	}

	protected async update(dt: number, time: number) {
		// super.update(dt, time);
		this.plugin.updateAll(dt, time);

		this.background.update(dt, time);
		this.background.render(this.rendererAdapter.renderer as WebGPURenderer);
	}

	protected async resize(width: number, height: number) {
		this.background.resize();

		// Update renderer size
		this.rendererAdapter.setSize(width, height);

		// プラグインのリサイズ処理
		this.plugin.resizeAll(width, height);
	}
}
