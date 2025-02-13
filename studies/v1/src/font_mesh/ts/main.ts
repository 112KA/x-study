import { MeshLambertNodeMaterial, WebGPURenderer } from "three/webgpu";
import { assertIsDefined } from "x";
import { AssetManager, type GLTFObject } from "x3/index.js";
import { checkWebGPUSupport } from "x3/misc/environment.js";
import { Container } from "./Container.js";
import { FontMesh } from "./FontMesh.js";
import { GC } from "./GC.js";
import { HalfToneMaterial, NormalMaterial, ToonMaterial } from "./materials/index.js";

const wrapper = document.getElementById("canvas-wrapper") as HTMLDivElement;
assertIsDefined(wrapper);

const assetManager = new AssetManager();

async function setup() {
	if (!(await checkWebGPUSupport())) {
		wrapper.innerHTML = "WebGPU is not supported on this device.";
		return;
	}

	const container = new Container(wrapper, WebGPURenderer);

	await assetManager.load([{ id: "roboto", url: "/studies/assets/Roboto-Medium.ttf" }], container.renderer);

	const materials = [
		new HalfToneMaterial(),
		new MeshLambertNodeMaterial({ name: "Lambert" }),
		new ToonMaterial(),
		new NormalMaterial(),
	];

	const fontMesh = new FontMesh(assetManager.fonts.roboto, "ABCDE");
	fontMesh.material = materials[0];
	container.scene.add(fontMesh);

	const { ambientLight, directionalLight } = container;

	new GC({ fontMesh, materials, ambientLight, directionalLight });

	await container.debugShader(fontMesh);
}

setup();
