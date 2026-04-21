import type { PerspectiveCamera } from 'three'

export class CameraControls {
  public readonly camera: PerspectiveCamera
  constructor(camera: PerspectiveCamera) {
    this.camera = camera
  }

  update(_dt: number): void {
    // console.log('update', dt)
  }
}
