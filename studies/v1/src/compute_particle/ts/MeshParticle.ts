import type { ShaderNodeObject } from 'three/tsl'
import type { ComputeNode } from 'three/webgpu'
import {
  Mesh,
  PlaneGeometry,
} from 'three'
import {
  color,
  Fn,
  hash,
  If,
  instancedArray,
  instancedBufferAttribute,
  instanceIndex,

  storage,
  uint,
  vec3,
} from 'three/tsl'
import {

  PointsNodeMaterial,
  StorageInstancedBufferAttribute,
} from 'three/webgpu'
import { curl } from 'x3/nodes/noise/curl'

export class MeshParticle extends Mesh {
  computeNode: ShaderNodeObject<ComputeNode>
  constructor(count = 100000) {
    const geometry = new PlaneGeometry(1, 1)

    const sizes = new Float32Array(count)
    const instanceSizeBufferAttribute = new StorageInstancedBufferAttribute(sizes, 1)
    const instanceSizeStorage = storage(instanceSizeBufferAttribute, 'float', instanceSizeBufferAttribute.count)

    const material = new PointsNodeMaterial({
      // opacityNode: shapeCircle(),
      sizeNode: instancedBufferAttribute(instanceSizeBufferAttribute),
      vertexColors: true,
      sizeAttenuation: false,
      alphaToCoverage: true,
    })

    super(geometry, material)

    this.count = count

    const positionArray = instancedArray(count, 'vec3')
    const lifeArray = instancedArray(count, 'int')
    const velocityArray = instancedArray(count, 'vec3')

    const randUint = () => uint(Math.random() * 0xFFFFFF)

    const computeFn = Fn(() => {
      const position = positionArray.element(instanceIndex)
      const life = lifeArray.element(instanceIndex)
      const velocity = velocityArray.element(instanceIndex)

      If(life.lessThanEqual(0.0), () => {
        life.assign(hash(instanceIndex).mul(100).add(100))

        const randTheta = hash(instanceIndex.add(randUint())).mul(Math.PI * 2)
        const randPhi = hash(instanceIndex.add(randUint())).mul(Math.PI)
        const sinPhi = randPhi.sin()
        velocity.assign(vec3(randTheta.cos().mul(sinPhi), randTheta.sin().mul(sinPhi), randPhi.cos()).mul(0.01))

        position.assign(vec3(0.0, 0.0, 0.0))

        instanceSizeStorage.element(instanceIndex).assign(hash(instanceIndex.add(randUint())).mul(4).add(1))
      }).Else(() => {
        life.assign(life.x.sub(1))
        velocity.addAssign(curl(position).mul(0.001))
        position.addAssign(velocity)
      })
    })
    this.computeNode = computeFn().compute(count)

    material.colorNode = color(0xFFFFFF)
    material.positionNode = positionArray.element(instanceIndex)
    material.castShadowPositionNode = positionArray.element(instanceIndex)

    this.castShadow = true
    this.receiveShadow = true

    // this.customDepthMaterial =
  }
}
