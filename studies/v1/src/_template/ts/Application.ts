import type { GLTF } from 'three/examples/jsm/Addons.js'
import type { AssetPlugin } from 'x3/application'
import {
  AmbientLight,
  BasicShadowMap,
  BoxGeometry,
  CameraHelper,
  GridHelper,
  Mesh,
  PlaneGeometry,
  SpotLight,
} from 'three'
import { texture } from 'three/tsl'
import { MeshPhongNodeMaterial, NodeMaterial } from 'three/webgpu'
import { ApplicationBase } from 'x3/application'

export class Application extends ApplicationBase {
  public ambientLight = new AmbientLight(0xFFFFFF, 1)
  public spotLight = new SpotLight(0xFFFFFF, 500)

  private box!: Mesh<BoxGeometry, MeshPhongNodeMaterial>

  protected override initializeScene() {
    super.initializeScene()

    this.rendererAdapter.renderer.shadowMap.enabled = true
    this.rendererAdapter.renderer.shadowMap.type = BasicShadowMap

    this.camera.position.set(0, 5, 10)

    this.scene.add(this.ambientLight)

    this.spotLight.name = 'Spot Light'
    this.spotLight.angle = Math.PI / 5
    this.spotLight.penumbra = 0.3
    this.spotLight.position.set(10, 10, 5)
    this.spotLight.castShadow = true
    this.spotLight.shadow.camera.near = 8
    this.spotLight.shadow.camera.far = 30
    this.spotLight.shadow.mapSize.width = 1024
    this.spotLight.shadow.mapSize.height = 1024
    this.scene.add(this.spotLight)
    this.scene.add(new CameraHelper(this.spotLight.shadow.camera))

    const grid = new GridHelper(10, 10)
    this.scene.add(grid)

    const { assetManager } = this.plugin.get<AssetPlugin>('asset')!

    // loaded texture
    const nodeMaterial = new NodeMaterial()
    nodeMaterial.fragmentNode = texture(assetManager.textures.checker)

    const plane = new Mesh(new PlaneGeometry(1, 1), nodeMaterial)
    this.scene.add(plane)

    // loaded GLTF Object
    this.scene.add((assetManager.objects.model as GLTF).scene)

    // box
    const phoneMaterial = new MeshPhongNodeMaterial({
      color: 0xFF0000,
      shininess: 150,
      specular: 0x222222,
    })
    this.box = new Mesh(new BoxGeometry(1, 1, 1), phoneMaterial)
    this.box.castShadow = true
    this.box.receiveShadow = true
    this.box.position.set(-2, 0, 0)
    this.scene.add(this.box)
  }

  protected async update(dt: number, timeMS: number) {
    const delta = dt / 1000 // Convert milliseconds to seconds
    this.box.rotation.x += 0.25 * delta
    this.box.rotation.y += 2 * delta
    this.box.rotation.z += 1 * delta

    super.update(dt, timeMS)
  }

  protected async resize(width: number, height: number) {
    super.resize(width, height)
  }
}
