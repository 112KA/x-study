import { WebGPURenderer } from "three/webgpu";
import { assertIsDefined } from "x";
import { checkWebGPUSupport } from "x3/misc/environment.js";
import type { AbstractContainerEventMap } from "../../common/AbstractContainer.js";
import { Background } from "./Background.js";
import { Container } from "./Container.js";

const wrapper = document.getElementById("canvas-wrapper") as HTMLDivElement;
assertIsDefined(wrapper);

const background = new Background();

async function setup() {
	if (!(await checkWebGPUSupport())) {
		wrapper.innerHTML = "WebGPU is not supported on this device.";
		return;
	}

	const container = new Container(wrapper, WebGPURenderer);

	container.addEventListener("update", update);
	function update({ delta, elapsedTime }: AbstractContainerEventMap["update"]) {
		background.update(delta, elapsedTime);

		background.render(container.renderer);
	}

	container.addEventListener("resize", resize);
	function resize(_e: AbstractContainerEventMap["resize"]) {
		background.resize();
	}
}

setup();
