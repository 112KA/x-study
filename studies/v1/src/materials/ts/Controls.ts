import type { FolderApi, ListBladeApi } from 'tweakpane'
import type { Application } from './Application'
import type { IFunction } from './functions'
import { Pane } from 'tweakpane'

export interface ControlsParams {
  application: Application
  functions: IFunction[]
}

/**
 * Graphics Control class
 */
export class Controls extends Pane {
  public application: Application
  public functionFolder: FolderApi
  #functionBindings: unknown[] = []
  constructor({ application, functions }: ControlsParams) {
    super({ title: 'Controls' })

    this.application = application

    this.functionFolder = this.addFolder({
      title: 'Function',
      expanded: true,
    });

    (
      this.functionFolder.addBlade({
        view: 'list',
        label: 'functions',
        options: functions.map((value, _index) => ({
          text: value.name,
          value,
        })),
        value: functions[0],
      }) as ListBladeApi<IFunction>
    ).on('change', (m) => {
      this.application.setFunction(m.value)

      this.#updateFunctionBindings()
    })

    this.#updateFunctionBindings()
  }

  #updateFunctionBindings() {
    const f = this.functionFolder
    for (const binding of this.#functionBindings) {
      // biome-ignore lint/suspicious/noExplicitAny: tweakpaneのBindingApi型がexportされていない
      f.remove(binding as any);
      // biome-ignore lint/suspicious/noExplicitAny: tweakpaneのBindingApi型がexportされていない
      (binding as any).dispose()
    }
    this.#functionBindings = []
    const currentFunction = this.application.currentFunction!

    switch (currentFunction.name) {
      default:
        for (const [key, uniform] of Object.entries(
          currentFunction.uniforms,
        )) {
          this.#functionBindings.push(
            f.addBinding(uniform, 'value', { label: key }),
          )
        }
        break

      // case "HalfToneDot":
      // case "HalfToneLine":
      //     {
      //         const material = targetMaterial as HalfToneDotMaterial | HalfToneLineMaterial;
      //         this.#functionBindings.push(
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
