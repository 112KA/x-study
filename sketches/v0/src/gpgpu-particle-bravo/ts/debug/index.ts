import { Pane } from "tweakpane";
import type { Container } from "../Container";
import type { Particle } from "../Particle";
import { LightDebug } from "./LightDebug";
import { ParticleDebug } from "./ParticleDebug";
import { PostProcessDebug } from "./PostProcessDebug";

export class Debug {
	private _pane = new Pane();
	private _particle: ParticleDebug;
	private _postprocess: PostProcessDebug;
	private _light: LightDebug;

	constructor({ postprocess, pointLight }: Container, particle: Particle) {
		this._particle = new ParticleDebug(this._pane, particle);
		this._light = new LightDebug(this._pane, pointLight);
		this._postprocess = new PostProcessDebug(this._pane, postprocess);
	}
}
