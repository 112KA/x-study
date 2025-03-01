import type { Material, Mesh } from "three";
import { type FolderApi, type ListBladeApi, Pane } from "tweakpane";
import type { AbstractControlNodeMaterial } from "../../common/AbstractControlNodeMaterial";
import type { NoiseMaterial } from "./materials/NoiseMaterial";

export type ControlsParams = {
	targetMesh: Mesh;
	materials: Material[];
};

/**
 * Graphics Control class
 */
export class Controls extends Pane {
	public targetMesh: Mesh;
	public materialFolder: FolderApi;
	#materialBindings: unknown[] = [];
	constructor({ targetMesh, materials }: ControlsParams) {
		super({ title: "Controls" });

		this.targetMesh = targetMesh;

		this.materialFolder = this.addFolder({
			title: "Material",
			expanded: true,
		});

		(
			this.materialFolder.addBlade({
				view: "list",
				label: "materials",
				options: materials.map((material, _index) => ({
					text: material.name,
					value: material,
				})),
				value: materials[0],
			}) as ListBladeApi<Material>
		).on("change", (m) => {
			this.targetMesh.material = m.value;

			this.#updateMaterialBindings();
		});

		this.#updateMaterialBindings();
	}

	#updateMaterialBindings() {
		const f = this.materialFolder;
		for (const binding of this.#materialBindings) {
			// biome-ignore lint/suspicious/noExplicitAny: tweakpaneのBindingApi型がexportされていない
			f.remove(binding as any);
			// biome-ignore lint/suspicious/noExplicitAny: tweakpaneのBindingApi型がexportされていない
			(binding as any).dispose();
		}
		this.#materialBindings = [];

		switch ((this.targetMesh.material as Material).name) {
			default:
				{
					const targetMaterial = this.targetMesh.material as AbstractControlNodeMaterial;
					for (const [key, uniform] of Object.entries(targetMaterial.uniforms)) {
						this.#materialBindings.push(f.addBinding(uniform, "value", { label: key }));
					}
				}
				break;

			// case "HalfToneDot":
			// case "HalfToneLine":
			//     {
			//         const material = targetMaterial as HalfToneDotMaterial | HalfToneLineMaterial;
			//         this.#materialBindings.push(
			//             f.addBinding(material.uniforms.count, "value", { label: "count" }),
			//             f.addBinding(material.uniforms.color, "value", {
			//                 label: "color",
			//                 color: { type: "float" },
			//             }),
			//             f.addBinding(material.uniforms.direction, "value", {
			//                 label: "direction",
			//             }),
			//             f.addBinding(material.uniforms.start, "value", { label: "start" }),
			//             f.addBinding(material.uniforms.end, "value", { label: "end" }),
			//             f.addBinding(material.uniforms.mixLow, "value", { label: "mixLow" }),
			//             f.addBinding(material.uniforms.mixHigh, "value", { label: "mixHigh" }),
			//             f.addBinding(material.uniforms.radius, "value", { label: "radius" }),
			//         );
			//     }
			//     break;
			// case "Lambert":
			//     break;
			// case "Toon":
			//     break;
			// case "Normal":
			//     break;
		}
	}
}
