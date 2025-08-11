import { PostProcessing, type WebGPURenderer } from "three/webgpu";
import type { PostProcessingHostContext } from "./types";

export abstract class AbstractPostProcessing extends PostProcessing {
	constructor(protected hostContext: PostProcessingHostContext) {
		const { rendererAdapter } = hostContext;
		super(rendererAdapter.renderer as WebGPURenderer);

		rendererAdapter.addPostProcessing(this);
	}

	abstract update(): void;

	abstract resize(): void;
}
