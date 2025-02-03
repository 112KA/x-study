import {
	AnimationMixer,
	type LineBasicMaterial,
	Matrix4,
	Mesh,
	MeshBasicMaterial,
	Object3D,
	SkeletonHelper,
} from "three";
import { assertIsDefined } from "x";
import { AssetLoader } from "x3/loaders/AsserLoader";
import { InstancedSkinnedMesh } from "x3/objects/InstancedSkinnedMesh";
import { InstancedSkeletonUtils } from "x3/utils/InstancedSkeletonUtils";
import { Container } from "./Container";
import { CylinderInstancedSkinnedMesh } from "./CylinderInstancedSkinnedMesh";
import { CylinderSkinnedMesh } from "./CylinderSkinnedMesh";
import { InstanceData } from "./InstanceData";
import { Debug } from "./debug/index";
import ChiBakun from "./model.glb";

const canvas = document.getElementById("canvas");
assertIsDefined(canvas);
const container = new Container({
	canvas,
});
const assetLoader = new AssetLoader();
// mesh = new CylinderSkinnedMesh(container.scene),
// mesh = new CylinderInstancedSkinnedMesh(container.scene, 10),
// skeletonHelper = new SkeletonHelper(mesh)

// ;(skeletonHelper.material as LineBasicMaterial).linewidth = 2
// container.scene.add(skeletonHelper)

const N_INSTANCE = 300;

async function setup() {
	assetLoader.addResources([{ name: "model", path: ChiBakun }]);
	await assetLoader.load();

	// biome-ignore lint/suspicious/noExplicitAny: そのうち直す
	const { scene, animations } = assetLoader.models.model as any;
	const object = scene.getObjectByName("Armature");
	const instancedObject = InstancedSkeletonUtils.convertToInstancedObject(object, N_INSTANCE);
	const skeletonHelper = new SkeletonHelper(instancedObject);

	container.scene.add(instancedObject);
	// instancedObject.position.y = 1
	instancedObject.updateMatrix();
	(skeletonHelper.material as LineBasicMaterial).linewidth = 2;
	container.scene.add(skeletonHelper);

	let previousTime = 0;
	const instanceDataList: InstanceData[] = [];

	for (let i = 0; i < N_INSTANCE; i++) {
		instanceDataList.push(new InstanceData(i, instancedObject, animations));
	}

	const debug = new Debug(container, instanceDataList);

	let _frame = 0;
	container.renderer.setAnimationLoop((time: number) => {
		if (_frame++ % 2 === 0) return;
		const dt = (time - previousTime) / 1000;
		for (let i = 0; i < N_INSTANCE; i++) {
			instanceDataList[i].update(dt);
		}
		container.render();

		previousTime = time;

		debug.update();
	});
	resize();

	window.addEventListener("resize", resize);
}

function resize() {
	container.resize();
}

setup();
