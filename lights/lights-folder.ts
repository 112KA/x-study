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
				light.name = light.name || `Ambient${index}`;
				f.addBinding(light, "color", { title: `${light.name} color` });
				f.addBinding(light, "intensity", { title: `${light.name} intensity` });
			} else if ((light as DirectionalLight).isDirectionalLight) {
				light.name = light.name || `Directional${index}`;
				f.addBinding(light, "color", { title: `${light.name} color` });
				f.addBinding(light, "intensity", { title: `${light.name} intensity` });
				f.addBinding(light, "position", { title: `${light.name} position` });
			} else if ((light as PointLight).isPointLight) {
				light.name = light.name || `Point${index}`;
				f.addBinding(light, "color", { title: `${light.name} color` });
				f.addBinding(light, "intensity", { title: `${light.name} intensity` });
				f.addBinding(light, "position", { title: `${light.name} position` });
				const pointLight = light as PointLight;
				f.addBinding(pointLight, "distance", { title: `${light.name} distance` });
				f.addBinding(pointLight, "decay", { title: `${light.name} decay` });
				f.addBinding(pointLight, "power", { title: `${light.name} power` });
			}
		});
	}
}
