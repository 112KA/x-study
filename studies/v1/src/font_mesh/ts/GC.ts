import type { AmbientLight, DirectionalLight, Material } from "three";
import { type FolderApi, type ListBladeApi, Pane } from "tweakpane";
import { LightsFolder } from "x3-controls/lights/lights-folder";
import type { FontMesh } from "./FontMesh";
import type { HalfToneMaterial } from "./materials";

export type GCParams = {
	fontMesh: FontMesh;
	materials: Material[];
	ambientLight?: AmbientLight;
	directionalLight?: DirectionalLight;
};

/**
 * Graphics Control class
 */
export class GC extends Pane {
	public lightsFolder = new LightsFolder();

	public materialFolder: FolderApi;
	#materialBindings: unknown[] = [];

	constructor({ fontMesh, materials, ambientLight, directionalLight }: GCParams) {
		super();

		const lightTargets = [];
		ambientLight && lightTargets.push(ambientLight);
		directionalLight && lightTargets.push(directionalLight);

		this.lightsFolder.setup(this, lightTargets, false);

		const fontMeshFolder = this.addFolder({
			title: "FontMesh",
			expanded: false,
		});

		// fontMeshFolder.(fontMesh, "size", { step: 1 });
		// this.addBlade()

		fontMeshFolder.addBinding(fontMesh, "text");
		fontMeshFolder.addBinding(fontMesh, "size");
		fontMeshFolder.addBinding(fontMesh, "depth");
		fontMeshFolder.addBinding(fontMesh, "curveSegments", { step: 1, min: 1 });
		fontMeshFolder.addBinding(fontMesh, "bevelEnabled");
		fontMeshFolder.addBinding(fontMesh, "bevelSize", { step: 0.01 });
		fontMeshFolder.addBinding(fontMesh, "bevelThickness", { step: 0.01 });
		fontMeshFolder.addBinding(fontMesh, "bevelOffset", { step: 0.01 });
		fontMeshFolder.addBinding(fontMesh, "bevelSegments", { step: 1, min: 1 });

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
			console.log({ value: m.value, name: m.value.name });
			fontMesh.material = m.value;

			this.#updateMaterialBindings(m.value);
		});

		this.#updateMaterialBindings(materials[0]);
	}

	#updateMaterialBindings(targetMaterial: Material) {
		const f = this.materialFolder;
		for (const binding of this.#materialBindings) {
			// biome-ignore lint/suspicious/noExplicitAny: tweakpaneのBindingApi型がexportされていない
			f.remove(binding as any);
			// biome-ignore lint/suspicious/noExplicitAny: tweakpaneのBindingApi型がexportされていない
			(binding as any).dispose();
		}
		this.#materialBindings = [];

		switch (targetMaterial.name) {
			case "HalfTone":
				{
					const material = targetMaterial as HalfToneMaterial;
					this.#materialBindings.push(
						f.addBinding(material.uniforms.count, "value", { label: "count" }),
						f.addBinding(material.uniforms.color, "value", {
							label: "color",
							color: { type: "float" },
						}),
						f.addBinding(material.uniforms.direction, "value", {
							label: "direction",
						}),
						f.addBinding(material.uniforms.start, "value", { label: "start" }),
						f.addBinding(material.uniforms.end, "value", { label: "end" }),
						f.addBinding(material.uniforms.mixLow, "value", { label: "mixLow" }),
						f.addBinding(material.uniforms.mixHigh, "value", { label: "mixHigh" }),
						f.addBinding(material.uniforms.radius, "value", { label: "radius" }),
					);
				}
				break;
			case "Lambert":
				break;
			case "Toon":
				break;
			case "Normal":
				break;
		}
	}
}
