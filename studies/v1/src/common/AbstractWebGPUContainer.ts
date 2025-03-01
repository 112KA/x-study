import { WebGPURenderer } from "three/webgpu";
import { AbstractContainer } from "./AbstractContainer";

export class AbstractWebGPUContainer extends AbstractContainer<WebGPURenderer> {
	constructor(wrapper: HTMLDivElement) {
		super(wrapper, WebGPURenderer);
	}
}
