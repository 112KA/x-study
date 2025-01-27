import { Pane } from "tweakpane";
import { Container } from "../Container";
import type { Particle } from "../Particle";

export class Debug {
	private _pane = new Pane();
	public t = 0;

	constructor(particle: Particle) {
		this.t = 0;
		this._pane.addInput(this, "t", {
			min: 0,
			max: 100,
		});
	}
}
