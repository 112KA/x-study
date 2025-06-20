import { BasicShadowMap, BoxGeometry, Mesh, MeshBasicMaterial, PlaneGeometry, Texture, WebGLRenderer } from "three";
import { texture } from "three/tsl";
import { MeshPhongNodeMaterial, NodeMaterial } from "three/webgpu";
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

	// loaded texture
	const nodeMaterial = new NodeMaterial();
	nodeMaterial.fragmentNode = texture(assetManager.textures.checker);

	const plane = new Mesh(new PlaneGeometry(1, 1), nodeMaterial);
	scene.add(plane);

	// loaded GLTF Object
	scene.add((assetManager.objects.model as GLTFObject).scene);

	// box
	const phoneMaterial = new MeshPhongNodeMaterial({
		color: 0xff0000,
		shininess: 150,
		specular: 0x222222,
	});
	const box = new Mesh(new BoxGeometry(1, 1, 1), phoneMaterial);
	box.castShadow = true;
	box.receiveShadow = true;
	box.position.set(-2, 0, 0);
	scene.add(box);

	const update = async ({ delta, elapsedTime }: AbstractContainerEventMap["update"]) => {
		box.rotation.x += 0.25 * delta;
		box.rotation.y += 2 * delta;
		box.rotation.z += 1 * delta;
	};
	container.addEventListener("update", update);

	const resize = ({ width, height }: AbstractContainerEventMap["resize"]) => {};
	container.addEventListener("resize", resize);
}

setup();
