import type { WebGLRenderer } from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import type { WebGPURenderer } from "three/webgpu";

import { AbstractContainer } from "../../common/AbstractContainer";

export class Container<T extends WebGLRenderer | WebGPURenderer> extends AbstractContainer<T> {
	public override update() {
		super.update();
	}

	public override resize(width: number, height: number) {
		super.resize(width, height);
	}
}
