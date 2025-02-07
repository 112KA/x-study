import { Clock, type MeshBasicMaterial } from "three";
import { WebGPURenderer } from "three/webgpu";
import { assertIsDefined } from "x";
import { AssetManager } from "x3/index.js";
import { Background } from "./Background.js";
import { Container } from "./Container.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

const assetManager = new AssetManager();

assertIsDefined(canvas);

const clock = new Clock();
const renderer = new WebGPURenderer({ canvas });
const container = new Container({ renderer });
const background = new Background();

async function setup() {
	// await assetManager.load([{ id: "checker", url: "../common/CustomUVChecker_byValle_2K.webp" }], renderer);
	// background.setup(assetManager.textures.checker);

	container.renderer.setAnimationLoop(update);

	resize();
	window.addEventListener("resize", resize);
}

function update() {
	const dt = clock.getDelta();
	const elapsedTime = clock.elapsedTime;

	background.update(dt, elapsedTime);
	container.update(dt, elapsedTime);

	background.render(renderer);
}

function resize() {
	background.resize();
	container.resize();
}

setup();
