import { MeshLambertNodeMaterial } from "three/webgpu";
import { assertIsDefined } from "x";
import { AssetManager } from "x3/index.js";
import { Container } from "./Container.js";
import { FontMesh } from "./FontMesh.js";
import { GC } from "./GC.js";
import { NormalMaterial, ToonMaterial } from "./materials/index.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
assertIsDefined(canvas);

const assetManager = new AssetManager();

const container = new Container({
	canvas,
});

async function setup() {
	await assetManager.load([{ id: "roboto", url: "../common/Roboto-Medium.ttf" }], container.renderer);

	const materials = [new MeshLambertNodeMaterial({ name: "Lambert" }), new ToonMaterial(), new NormalMaterial()];

	const fontMesh = new FontMesh(assetManager.fonts.roboto, "ABCDE");
	fontMesh.material = materials[0];
	container.scene.add(fontMesh);

	new GC({ fontMesh, materials });

	resize();

	container.renderer.setAnimationLoop(update);
	window.addEventListener("resize", resize);
}

function update() {
	container.render();
}

function resize() {
	container.resize();
}

setup();
