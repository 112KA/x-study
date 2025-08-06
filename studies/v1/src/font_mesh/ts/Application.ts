import { AmbientLight, DirectionalLight } from "three";
import { toonOutlinePass } from "three/tsl";
import {
	MeshLambertNodeMaterial,
	PostProcessing,
	type WebGPURenderer,
} from "three/webgpu";
import {
	ApplicationBase,
	type AssetPlugin,
	type DebugShaderPlugin,
} from "x3/application";
import { Controls } from "./Controls.js";
import { FontMesh } from "./FontMesh.js";
import {
	HalfToneDotMaterial,
	HalfToneLineMaterial,
	NormalMaterial,
	ToonMaterial,
} from "./materials/index.js";

export class Application extends ApplicationBase {
	public ambientLight = new AmbientLight(0xffffff, 1);
	public directionalLight = new DirectionalLight(0xffffff, 1);
	public postProcessing!: PostProcessing;
	fontMesh!: FontMesh;

	protected override initializeScene() {
		super.initializeScene();

		console.log("ApplicationBase.initializeScene called");

		this.rendererAdapter.renderer.setClearColor(0xfff9ee, 1);

		this.camera.position.set(0, 5, 10);

		this.directionalLight.position.set(1, 1, 1);
		this.scene.add(this.ambientLight, this.directionalLight);

		const materials = [
			new HalfToneDotMaterial(),
			new HalfToneLineMaterial(),
			new MeshLambertNodeMaterial({ name: "Lambert" }),
			new ToonMaterial(),
			new NormalMaterial(),
		];

		const { assetManager } = this.plugin.get<AssetPlugin>("asset")!;

		this.fontMesh = new FontMesh(assetManager.fonts.roboto, "ABCDE");
		this.fontMesh.material = materials[0];
		this.scene.add(this.fontMesh);

		const { ambientLight, directionalLight } = this;

		new Controls({
			fontMesh: this.fontMesh,
			materials,
			ambientLight,
			directionalLight,
		});

		this.postProcessing = new PostProcessing(
			this.rendererAdapter.renderer as WebGPURenderer,
		);

		this.postProcessing.outputNode = toonOutlinePass(
			this.scene,
			this.camera,
			undefined,
			0.005,
		);
	}

	public shaderInfo() {
		const debugShader = this.plugin.get<DebugShaderPlugin>("debugShader")!;
		debugShader.info(this.fontMesh);
	}

	protected async update(dt: number, time: number) {
		// super.update(dt, time);
		this.plugin.updateAll(dt, time);

		await this.postProcessing.renderAsync();
	}

	protected async resize(width: number, height: number) {
		super.resize(width, height);
	}
}
