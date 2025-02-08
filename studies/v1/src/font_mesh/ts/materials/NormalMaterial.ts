import { normalFlat, vec4 } from "three/tsl";
import { MeshBasicNodeMaterial } from "three/webgpu";

export class NormalMaterial extends MeshBasicNodeMaterial {
	constructor() {
		super();
		this.name = "Normal";
		this.outputNode = vec4(normalFlat, 1);
	}
}
