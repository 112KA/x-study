import { assertIsDefined } from "x";
import { checkWebGPUSupport } from "x3/misc/environment.js";
import type { AbstractContainerEventMap } from "../../common/AbstractContainer.js";
import { Background } from "./Background.js";
import { Container } from "./Container.js";
import { Controls } from "./Controls.js";
import { NoiseMaterial, SNoise3ColorMaterial, SNoise3Material } from "./materials/index.js";

const wrapper = document.getElementById("canvas-wrapper") as HTMLDivElement;
assertIsDefined(wrapper);

const background = new Background();

async function setup() {
	if (!(await checkWebGPUSupport())) {
		wrapper.innerHTML = "WebGPU is not supported on this device.";
		return;
	}

	const container = new Container(wrapper);

	const materials = [new SNoise3ColorMaterial(), new SNoise3Material(), new NoiseMaterial()];
	background.material = materials[0];
	const controls = new Controls({ targetMesh: background, materials });

	const update = async ({ delta, elapsedTime }: AbstractContainerEventMap["update"]) => {
		background.update(delta, elapsedTime);
		background.render(container.renderer);
	};
	container.addEventListener("update", update);

	const resize = (_e: AbstractContainerEventMap["resize"]) => {
		background.resize();
	};
	container.addEventListener("resize", resize);
}

setup();
