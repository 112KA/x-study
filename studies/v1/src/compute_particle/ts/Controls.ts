import { Pane } from "tweakpane";
import type { MeshParticle } from "./MeshParticle";
import type { PointParticle } from "./PointParticle";

export type ControlsParams = {
	particle: PointParticle | MeshParticle;
};
export class Controls extends Pane {
	constructor({ particle }: ControlsParams) {
		super({ title: "Controls" });
	}
}
