import { BoxGeometry, Mesh, PlaneGeometry, TimestampQuery, TorusKnotGeometry } from "three";
import { Fn, hash, mx_fractal_noise_vec3, positionWorld, vec4, vertexIndex } from "three/tsl";
import { MeshBasicNodeMaterial, MeshPhongNodeMaterial } from "three/webgpu";
import { assertIsDefined } from "x";
import { AssetManager, type GLTFObject } from "x3/index.js";
import { checkWebGPUSupport } from "x3/misc/environment.js";
import type { AbstractContainerEventMap } from "../../common/AbstractContainer.js";
import { Container } from "./Container.js";
import { Controls } from "./Controls.js";
import { MeshParticle } from "./MeshParticle.js";
import { PointsParticle } from "./PointsParticle.js";
import { SpriteParticle } from "./SpriteParticle.js";

const wrapper = document.getElementById("canvas-wrapper") as HTMLDivElement;
assertIsDefined(wrapper);

const particle = new MeshParticle();

async function setup() {
	if (!(await checkWebGPUSupport())) {
		wrapper.innerHTML = "WebGPU is not supported on this device.";
		return;
	}

	const container = new Container(wrapper);
	const { renderer, scene } = container;

	scene.add(particle);

	const geometry = new TorusKnotGeometry(25, 8, 75, 80);
	const material = new MeshPhongNodeMaterial({
		color: 0x999999,
		shininess: 0,
		specular: 0x222222,
	});

	const torusKnot = new Mesh(geometry, material);
	torusKnot.scale.multiplyScalar(1 / 18);
	torusKnot.position.y = 3;
	torusKnot.castShadow = true;
	torusKnot.receiveShadow = true;
	scene.add(torusKnot);

	const plane = new Mesh(new PlaneGeometry(10, 10), material);
	plane.receiveShadow = true;
	plane.position.y = -1;
	plane.rotation.x = -Math.PI / 2;

	scene.add(plane);

	const controls = new Controls({ particle });

	// const assetManager = new AssetManager();

	// await assetManager.load(
	// 	[
	// 		{ id: "checker", url: "/studies/assets/CustomUVChecker_byValle_2K.webp" },
	// 		{ id: "model", url: "/studies/assets/SimpleTexture.gltf" },
	// 	],
	// 	renderer,
	// );

	// const plane = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: assetManager.textures.checker }));
	// scene.add(plane);

	// scene.add((assetManager.objects.model as GLTFObject).scene);

	const update = async ({ delta, elapsedTime }: AbstractContainerEventMap["update"]) => {
		await renderer.computeAsync(particle.computeNode);
		renderer.resolveTimestampsAsync(TimestampQuery.COMPUTE);

		await container.render();
	};
	container.addEventListener("update", update);

	const resize = ({ width, height }: AbstractContainerEventMap["resize"]) => {};
	container.addEventListener("resize", resize);
}

setup();
