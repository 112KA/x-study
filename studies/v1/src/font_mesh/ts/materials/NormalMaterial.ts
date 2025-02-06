import { normalFlat } from "three/tsl";
import { MeshBasicNodeMaterial } from "three/webgpu";

export class NormalMaterial extends MeshBasicNodeMaterial {
	constructor() {
		super();
		this.name = "Normal";
		this.colorNode = normalFlat;
	}
}
