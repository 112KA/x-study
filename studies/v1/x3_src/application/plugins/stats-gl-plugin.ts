import Stats from "stats-gl";
import type { ApplicationBase } from "../application-base";
import { type IPlugin, PluginInitializationPhase } from "./types";

export class StatsGLPlugin implements IPlugin {
	public name = "stats";
	public version = "1.0.0";
	public initializationPhase = PluginInitializationPhase.AfterScene;

	private stats!: Stats;

	initialize(app: ApplicationBase): void {
		this.stats = new Stats({
			precision: 4,
			horizontal: false,
			trackGPU: true,
			trackCPT: true,
			logsPerSecond: 10,
			graphsPerSecond: 60,
			samplesGraph: 30,
		});
		this.stats.init(app.rendererAdapter.renderer);
		this.stats.showPanel(0); // FPS
		app.$wrapper.appendChild(this.stats.dom);
	}

	update(): void {
		this.stats.update();
	}

	destroy(): void {
		if (this.stats.dom.parentElement) {
			this.stats.dom.parentElement.removeChild(this.stats.dom);
		}
	}
}
