import type { ShaderMaterial, Texture } from 'three'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { TextureLoader } from 'three'
import fragmentShader from './glsl/image.frag?raw'
import vertexShader from './glsl/image.vert?raw'

const textureLoader = new TextureLoader()
function loadTexture(url: string): Promise<Texture> {
  return new Promise<Texture>((resolve) => {
    textureLoader.load(
      url,
      (texture: Texture) => {
        resolve(texture)
      },
      undefined,
      (error) => {
        console.error('Failed to load texture:', error)
      },
    )
  })
}

export function ShaderPlane2() {
  const ref = useRef<ShaderMaterial>(null!)
  const refProgress = useRef(0)

  useEffect(() => {
    const load = async () => {
      const texture0 = await loadTexture('../../assets/images/492-256x256.jpg')
      if (ref.current) {
        ref.current.uniforms.u_texture0.value = texture0
      }
      const texture1 = await loadTexture('../../assets/images/866-256x256.jpg')
      if (ref.current) {
        ref.current.uniforms.u_texture1.value = texture1
      }
    }
    load()
  }, [])

  useFrame(() => {
    if (ref.current.uniforms.u_texture1.value === null)
      return
    // const progress = (Math.sin(Date.now() * 0.001) + 1) / 2
    // ref.current.uniforms.progress.value = progress
    refProgress.current += -0.01
    if (refProgress.current < 0) {
      refProgress.current = 1
      const tex = ref.current.uniforms.u_texture0.value
      ref.current.uniforms.u_texture0.value
        = ref.current.uniforms.u_texture1.value
      ref.current.uniforms.u_texture1.value = tex
      ref.current.needsUpdate = true
    }
    ref.current.uniforms.progress.value = refProgress.current
  })

  return (
    <mesh scale={3}>
      <planeGeometry args={[1, 1, 1]} />
      <shaderMaterial
        ref={ref}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          u_texture0: { value: null },
          u_texture1: { value: null },
          progress: { value: 1.0 },
          gradient: { value: { x: 0.5, y: 0 } },
        }}
      />
    </mesh>
  )
}
