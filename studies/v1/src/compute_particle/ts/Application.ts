import type { WebGPURenderer } from 'three/webgpu'
import {
  AmbientLight,
  GridHelper,
  Mesh,
  PlaneGeometry,
  SpotLight,
  SpotLightHelper,
  TimestampQuery,
  TorusKnotGeometry,
} from 'three'
import { MeshPhongNodeMaterial } from 'three/webgpu'
import { ApplicationBase } from 'x3/application'
import { Controls } from './Controls'
import { MeshParticle } from './MeshParticle'

export class Application extends ApplicationBase {
  particle = new MeshParticle()

  public ambientLight = new AmbientLight(0xFFFFFF, 1)
  spotLight = new SpotLight(0xFFFFFF, 400, 100, Math.PI / 4, 1)
  // spotLightShadowMapViewer = new ShadowMapViewer(this.spotLight);

  protected override initializeScene() {
    super.initializeScene()

    this.rendererAdapter.renderer.shadowMap.enabled = true

    this.camera.position.set(0, 5, 10)

    this.spotLight.castShadow = true
    this.spotLight.angle = Math.PI / 5
    this.spotLight.penumbra = 0.3
    this.spotLight.position.set(8, 10, 5)
    this.spotLight.castShadow = true
    this.spotLight.shadow.camera.near = 1
    this.spotLight.shadow.camera.far = 1000
    this.spotLight.shadow.mapSize.width = 2048
    this.spotLight.shadow.mapSize.height = 2048
    this.spotLight.shadow.bias = -0.002
    this.spotLight.shadow.radius = 4
    // this.spotLight.shadow.camera
    // this.spotLight.position.set(0, 3, 0);
    this.scene.add(this.ambientLight, this.spotLight)

    const spotLightHelper = new SpotLightHelper(this.spotLight)
    this.scene.add(spotLightHelper)

    const grid = new GridHelper(10, 10)
    this.scene.add(grid)

    this.scene.add(this.particle)

    const geometry = new TorusKnotGeometry(25, 8, 75, 80)
    const material = new MeshPhongNodeMaterial({
      color: 0x999999,
      shininess: 0,
      specular: 0x222222,
    })

    const torusKnot = new Mesh(geometry, material)
    torusKnot.scale.multiplyScalar(1 / 18)
    torusKnot.position.y = 3
    torusKnot.castShadow = true
    torusKnot.receiveShadow = true
    this.scene.add(torusKnot)

    const plane = new Mesh(new PlaneGeometry(10, 10), material)
    plane.receiveShadow = true
    plane.position.y = -1
    plane.rotation.x = -Math.PI / 2

    this.scene.add(plane)

    // eslint-disable-next-line no-new
    new Controls({ particle: this.particle })
  }

  protected async update(dt: number, timeMS: number) {
    const renderer = this.rendererAdapter.renderer as WebGPURenderer
    await renderer.computeAsync(this.particle.computeNode)
    renderer.resolveTimestampsAsync(TimestampQuery.COMPUTE)
    super.update(dt, timeMS)

    // this.spotLightShadowMapViewer.render(this.renderer);
  }

  protected async resize(width: number, height: number) {
    super.resize(width, height)

    // const size = width * 0.15;
    // this.spotLightShadowMapViewer.position.set(100, 10);
    // this.spotLightShadowMapViewer.size.width = size;
    // this.spotLightShadowMapViewer.size.height = size;
    // this.spotLightShadowMapViewer.update();
    // this.spotLightShadowMapViewer.updateForWindowResize();
  }
}
