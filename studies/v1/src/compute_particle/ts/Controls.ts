import { Pane } from "tweakpane";
import type { PointParticle } from "./PointsParticle";

export type ControlsParams = {
	particle: PointParticle;
};
export class Controls extends Pane {
	constructor({ particle }: ControlsParams) {
		super({ title: "Controls" });
	}
}
