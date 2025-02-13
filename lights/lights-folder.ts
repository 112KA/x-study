import type { AmbientLight, DirectionalLight, Light, PointLight } from "three";
import type { FolderApi } from "tweakpane";

export class LightsFolder {
	constructor(public title = "Light") {}

	setup(parent: FolderApi, targetList: Light[], expanded = true) {
		const f = parent.addFolder({
			title: this.title,
			expanded,
		});

		targetList.forEach((light, index) => {
			if ((light as AmbientLight).isAmbientLight) {
				light.name = light.name || `A${index}`;
				f.addBinding(light, "color", { label: `${light.name}:color`, color: { type: "float" } });
				f.addBinding(light, "intensity", { label: `${light.name}:intensity` });
			} else if ((light as DirectionalLight).isDirectionalLight) {
				light.name = light.name || `D${index}`;
				f.addBinding(light, "color", { label: `${light.name}:color`, color: { type: "float" } });
				f.addBinding(light, "intensity", { label: `${light.name}:intensity` });
				f.addBinding(light, "position", { label: `${light.name}:position` });
			} else if ((light as PointLight).isPointLight) {
				light.name = light.name || `P${index}`;
				f.addBinding(light, "color", { label: `${light.name}:color`, color: { type: "float" } });
				f.addBinding(light, "intensity", { label: `${light.name}:intensity` });
				f.addBinding(light, "position", { label: `${light.name}:position` });
				const pointLight = light as PointLight;
				f.addBinding(pointLight, "distance", { label: `${light.name}:distance` });
				f.addBinding(pointLight, "decay", { label: `${light.name}:decay` });
				f.addBinding(pointLight, "power", { label: `${light.name}:power` });
			}
		});
	}
}
