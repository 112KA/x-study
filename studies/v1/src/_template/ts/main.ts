import { Mesh, MeshBasicMaterial, PlaneGeometry, WebGLRenderer } from "three";
import { assertIsDefined } from "x";
import { AssetManager, type GLTFObject } from "x3/index.js";
import { checkWebGPUSupport } from "x3/misc/environment.js";
import type { AbstractContainerEventMap } from "../../common/AbstractContainer.js";
import { Container } from "./Container.js";

const wrapper = document.getElementById("canvas-wrapper") as HTMLDivElement;
assertIsDefined(wrapper);

async function setup() {
	if (!(await checkWebGPUSupport())) {
		wrapper.innerHTML = "WebGPU is not supported on this device.";
		return;
	}

	const container = new Container(wrapper);
	const { renderer, scene } = container;

	const assetManager = new AssetManager();

	await assetManager.load(
		[
			{ id: "checker", url: "/studies/assets/CustomUVChecker_byValle_2K.webp" },
			{ id: "model", url: "/studies/assets/SimpleTexture.gltf" },
		],
		renderer,
	);

	const plane = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: assetManager.textures.checker }));
	scene.add(plane);

	scene.add((assetManager.objects.model as GLTFObject).scene);

	const update = async ({ delta, elapsedTime }: AbstractContainerEventMap["update"]) => {};
	container.addEventListener("update", update);

	const resize = ({ width, height }: AbstractContainerEventMap["resize"]) => {};
	container.addEventListener("resize", resize);
}

setup();
