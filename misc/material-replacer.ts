import type { Material, Mesh, MeshStandardMaterial, Object3D } from 'three'
import {

  MeshBasicMaterial,

} from 'three'

export interface ReplaceUnit {
  target: 'material' | 'mesh'
  nameMatcher: RegExp | string[]
  replacer: (originalMaterial: Material) => Material
}

export class MaterialReplacer {
  protected cache: Record<string, Material> = {}
  protected replaceUnitList: ReplaceUnit[] = []

  constructor() {
    this.addReplaceUnit(this.createDefaultReplaceUnit())
  }

  addReplaceUnit(replaceUnit: ReplaceUnit) {
    this.replaceUnitList.push(replaceUnit)
  }

  createDefaultReplaceUnit(): ReplaceUnit {
    return {
      target: 'material',
      nameMatcher: /.*/,
      replacer: (originalMaterial: Material): Material => {
        const { name, map, color } = originalMaterial as MeshStandardMaterial
        return new MeshBasicMaterial({ name, map, color })
      },
    }
  }

  replace(o: Object3D) {
    // mesh毎の置換判定グループ
    const meshReplaceGroup = this.replaceUnitList
      .filter(unit => unit.target === 'mesh')
      .reverse() // 新しく追加されたものから順番にチェック

    // material毎の置換判定グループ
    const materialReplaceGroup = this.replaceUnitList
      .filter(unit => unit.target === 'material')
      .reverse() // 新しく追加されたものから順番にチェック

    o.traverse((child: Object3D): void => {
      const mesh: Mesh = child as Mesh
      if (!mesh.isMesh)
        return

      const targetReplaceUnit = meshReplaceGroup.find((unit) => {
        if (unit.nameMatcher instanceof RegExp) {
          return (unit.nameMatcher as RegExp).test(mesh.name)
        }
        else if (Array.isArray(unit.nameMatcher)) {
          return (unit.nameMatcher as string[]).includes(mesh.name)
        }
        return undefined
      })

      if (targetReplaceUnit) {
        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map((material) => {
            const replacedMaterial = targetReplaceUnit.replacer(material)
            return this.cacheAndReturn(replacedMaterial)
          })
        }
        else {
          const replacedMaterial = targetReplaceUnit.replacer(mesh.material)
          mesh.material = this.cacheAndReturn(replacedMaterial)
        }
        return
      }

      if (Array.isArray(mesh.material)) {
        mesh.material = mesh.material.map(
          material =>
            this.cache[material.name]
            ?? this.createMaterial(material, materialReplaceGroup),
        )
      }
      else {
        mesh.material
          = this.cache[mesh.material.name]
            ?? this.createMaterial(mesh.material, materialReplaceGroup)
      }
    })
  }

  protected cacheAndReturn(replacedMaterial: Material): Material {
    const cachedMaterial = this.cache[replacedMaterial.name]
    if (cachedMaterial !== undefined) {
      replacedMaterial.dispose()
      return cachedMaterial
    }
    else {
      this.cache[replacedMaterial.name] = replacedMaterial
      return replacedMaterial
    }
  }

  protected createMaterial(
    originalMaterial: Material,
    replaceGroup: ReplaceUnit[],
  ) {
    const targetReplaceUnit = replaceGroup.find((unit) => {
      if (unit.nameMatcher instanceof RegExp) {
        return (unit.nameMatcher as RegExp).test(originalMaterial.name)
      }
      else if (Array.isArray(unit.nameMatcher)) {
        return (unit.nameMatcher as string[]).includes(originalMaterial.name)
      }
      return undefined
    })

    if (targetReplaceUnit) {
      const material = targetReplaceUnit.replacer(originalMaterial)
      this.cache[originalMaterial.name] = material
      return material
    }
    else {
      console.warn(
        `No replacement found for material: ${originalMaterial.name}`,
      )
    }
  }
}
