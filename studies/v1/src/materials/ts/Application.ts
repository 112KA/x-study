import { ApplicationBase } from "x3/application";
import { Controls } from "./Controls";
import { DistanceLines, type IFunction, Kaleidoscope, SDF } from "./functions";
import { Noise } from "./functions/Noise";

export class Application extends ApplicationBase {
	public currentFunction: IFunction | null = null;

	protected override initializeScene() {
		super.initializeScene();

		const functions = [DistanceLines, SDF, Kaleidoscope, Noise];
		this.setFunction(functions[0]);
		new Controls({ application: this, functions });
	}

	public setFunction(f: IFunction) {
		this.currentFunction = f;
		this.scene.backgroundNode = f.Fn;
	}

	protected async update(dt: number, timeMS: number) {
		super.update(dt, timeMS);
	}

	protected async resize(width: number, height: number) {
		super.resize(width, height);
	}
}
