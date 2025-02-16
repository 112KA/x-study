import { MeshLambertNodeMaterial } from "three/webgpu";
import { assertIsDefined } from "x";
import { AssetManager, type GLTFObject } from "x3/index.js";
import { checkWebGPUSupport } from "x3/misc/environment.js";
import { Container } from "./Container.js";
import { Controls } from "./Controls.js";
import { FontMesh } from "./FontMesh.js";
import { HalfToneDotMaterial, HalfToneLineMaterial, NormalMaterial, ToonMaterial } from "./materials/index.js";

const wrapper = document.getElementById("canvas-wrapper") as HTMLDivElement;
assertIsDefined(wrapper);

const assetManager = new AssetManager();

async function setup() {
	if (!(await checkWebGPUSupport())) {
		wrapper.innerHTML = "WebGPU is not supported on this device.";
		return;
	}

	const container = new Container(wrapper);

	await assetManager.load([{ id: "roboto", url: "/studies/assets/Roboto-Medium.ttf" }], container.renderer);

	const materials = [
		new HalfToneDotMaterial(),
		new HalfToneLineMaterial(),
		new MeshLambertNodeMaterial({ name: "Lambert" }),
		new ToonMaterial(),
		new NormalMaterial(),
	];

	const fontMesh = new FontMesh(assetManager.fonts.roboto, "ABCDE");
	fontMesh.material = materials[0];
	container.scene.add(fontMesh);

	const { ambientLight, directionalLight } = container;

	new Controls({ fontMesh, materials, ambientLight, directionalLight });

	await container.debugShader(fontMesh);
}

setup();
