import type { NodeMaterial, Texture } from 'three/webgpu'
import {
  texture,
} from 'three/tsl'
import { QuadMesh } from 'three/webgpu'

export class Background extends QuadMesh {
  // constructor() {
  //   const material = new NodeMaterial();
  //   // material.colorNode = vec4(1, 0, 0, 1);
  //   // material.colorNode = vec4(uv(), abs(oscSine(time.mul(0.1))), 1);
  //   // material.colorNode = mx_noise_float(uv().mul(10).add(time), float(1));
  //   // material.colorNode = mx_noise_vec3(uv().mul(10).add(time), float(1));
  //   // material.colorNode = snoise3(vec3(uv(), time.mul(0.1)).mul(5));

  //   // @see https://www.pentacreation.com/blog/2021/04/210403.html
  //   const red = vec3(1, 1, time).toVar();
  //   const green = vec3(2.0, 1.0, time.mul(0.2)).toVar();
  //   const blue = vec3(2.0, 2.0, time.mul(0.5)).toVar();
  //   const r = float(snoise3(vec3(red.xy.mul(uv()), red.z))).toVar();
  //   const g = float(snoise3(vec3(green.xy.mul(uv()), green.z))).toVar();
  //   const b = float(snoise3(vec3(blue.xy.mul(uv()), blue.z))).toVar();
  //   material.colorNode = vec4(
  //     r.add(1.0).div(2.0).add(0.1),
  //     g.add(1.0).div(2.0).add(0.1),
  //     b.add(1.0).div(2.0).add(0.1),
  //     1.0,
  //   );

  //   super(material);
  // }

  setup(map: Texture) {
    (this.material as NodeMaterial).colorNode = texture(map)
  }

  update(_dt: number, _elapsedTime: number) {
    // (this.material as ShaderMaterial).uniforms.time.value = elapsedTime;
  }

  resize() {
    // const { width, height } = this.#renderer.domElement;
    // (this.material as ShaderMaterial).uniforms.resolution.value.set(
    //   width,
    //   height,
    // );
  }
}
