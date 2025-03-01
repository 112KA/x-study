import { Pane } from "tweakpane";
import type { PointParticle } from "./Particle";

export type ControlsParams = {
	particle: PointParticle;
};
export class Controls extends Pane {
	constructor({ particle }: ControlsParams) {
		super({ title: "Controls" });
	}
}
