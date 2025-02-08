import { WebGLRenderer } from "three";
import { MeshLambertNodeMaterial, WebGPURenderer } from "three/webgpu";
import { assertIsDefined } from "x";
import { AssetManager, type GLTFObject } from "x3/index.js";
import { Container } from "./Container.js";
import { FontMesh } from "./FontMesh.js";
import { GC } from "./GC.js";
import { HalfToneMaterial, NormalMaterial, ToonMaterial } from "./materials/index.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
assertIsDefined(canvas);

const assetManager = new AssetManager();

const renderer = new WebGPURenderer({ canvas });

const container = new Container({ renderer });

async function setup() {
	await assetManager.load([{ id: "roboto", url: "../common/Roboto-Medium.ttf" }], renderer);

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

	resize();

	renderer.setAnimationLoop(update);
	window.addEventListener("resize", resize);
}

function update() {
	container.render();
}

function resize() {
	container.resize();
}

setup();
