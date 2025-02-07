import { Mesh, MeshBasicMaterial, PlaneGeometry, WebGLRenderer } from "three";
import { WebGPURenderer } from "three/webgpu";
import { assertIsDefined } from "x";
import { AssetManager, type GLTFObject } from "x3/index.js";
import { Container } from "./Container.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
assertIsDefined(canvas);

const assetManager = new AssetManager();

const renderer = new WebGPURenderer({ canvas });
// const renderer = new WebGLRenderer({ canvas });

const container = new Container({ renderer });

async function setup() {
	await assetManager.load(
		[
			{ id: "checker", url: "../common/CustomUVChecker_byValle_2K.webp" },
			{ id: "model", url: "../common/SimpleTexture.gltf" },
		],
		renderer,
	);

	const plane = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: assetManager.textures.checker }));
	container.scene.add(plane);

	container.scene.add((assetManager.objects.model as GLTFObject).scene);

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
