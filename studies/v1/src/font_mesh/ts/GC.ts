import type { Material } from "three";
import { Pane } from "tweakpane";
import type { FontMesh } from "./FontMesh";

export type GCParams = {
	fontMesh: FontMesh;
	materials: Material[];
};

/**
 * Graphics Control class
 */
export class GC extends Pane {
	constructor({ fontMesh, materials }: GCParams) {
		super();

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

		const materialFolder = this.addFolder({
			title: "Material",
			expanded: true,
		});

		materialFolder
			.addBlade({
				view: "list",
				label: "materials",
				options: materials.map((material, _index) => ({
					text: material.name,
					value: material,
				})),
				value: materials[0],
			})
			.on("change", (m: Material) => {
				console.log({ value: m.value });
				fontMesh.material = m.value;
			});
	}
}
