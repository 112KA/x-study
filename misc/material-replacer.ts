import { type Material, type Mesh, MeshBasicMaterial, type MeshStandardMaterial, type Object3D } from "three";

export type ReplaceCallback = (originalMaterial: Material) => Material;
export interface MaterialReplaceUnit {
	type: "material";
	callback: ReplaceCallback;
	nameRegExp: RegExp;
}

export interface MeshReplaceUnit {
	type: "mesh";
	callback: ReplaceCallback;
	nameRegExp: RegExp;
}

export type ReplaceUnit = MaterialReplaceUnit | MeshReplaceUnit;

export class MaterialReplacer {
	protected materialReplaceUnitList: MaterialReplaceUnit[] = [];
	protected meshReplaceUnitList: MeshReplaceUnit[] = [];
	public cache: Record<string, Material> = {};

	constructor() {
		this.addReplaceUnit(this.createDefaultReplaceUnit());
	}

	addReplaceUnit(replaceUnit: ReplaceUnit) {
		switch (replaceUnit.type) {
			case "material":
				this.materialReplaceUnitList.push(replaceUnit);
				break;
			case "mesh":
				this.meshReplaceUnitList.push(replaceUnit);
				break;
		}
	}

	createDefaultReplaceUnit(): ReplaceUnit {
		return {
			callback: (originalMaterial: Material): Material => {
				const { name, map, color } = originalMaterial as MeshStandardMaterial;
				return new MeshBasicMaterial({ name, map, color });
			},
			nameRegExp: /.*/,
			type: "material",
		};
	}

	replace(o: Object3D) {
		o.traverse((child: Object3D): void => {
			const mesh: Mesh = child as Mesh;
			if (mesh.isMesh) {
				const targetReplaceUnit = this.meshReplaceUnitList.find((unit: MeshReplaceUnit) => {
					return unit.nameRegExp.test(mesh.name);
				});
				if (targetReplaceUnit) {
					mesh.material = targetReplaceUnit.callback(mesh.material as Material);
				} else {
					const originalMaterial = mesh.material as Material;
					mesh.material =
						this.cache[originalMaterial.name] ?? this.createMaterial(originalMaterial as MeshStandardMaterial);
				}
			}
		});
	}

	protected createMaterial(originalMaterial: MeshStandardMaterial) {
		let index = this.materialReplaceUnitList.length - 1;

		// 新しく追加されたものから順番にチェック
		while (index >= 0) {
			const unit = this.materialReplaceUnitList[index];

			// マッチしていたらcallback実行
			if (unit.nameRegExp.test(originalMaterial.name)) {
				const material = unit.callback(originalMaterial);
				this.cache[originalMaterial.name] = material;
				return material;
			}

			index--;
		}
	}
}
