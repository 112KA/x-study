import { Mesh, MeshBasicMaterial, PlaneGeometry } from "three";
import { WebGPURenderer } from "three/webgpu";
import { assertIsDefined } from "x";
import { AssetManager } from "x3/index.js";
import { Container } from "./Container.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
assertIsDefined(canvas);

const assetManager = new AssetManager();

const renderer = new WebGPURenderer({ canvas });

const container = new Container({ renderer });

async function setup() {
	await assetManager.load([{ id: "checker", url: "../common/CustomUVChecker_byValle_2K.webp" }], renderer);

	const plane = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: assetManager.textures.checker }));
	container.scene.add(plane);

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
