import type { NodeMaterial, Texture } from 'three/webgpu'
import { texture } from 'three/tsl'
import { QuadMesh } from 'three/webgpu'

export class Background extends QuadMesh {
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
