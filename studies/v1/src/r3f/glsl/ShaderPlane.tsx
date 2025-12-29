import type { ShaderMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import fragmentShader from './glsl/hello.frag?raw'
import vertexShader from './glsl/hello.vert?raw'

/**
 * A simple shader plane that uses custom GLSL shaders.
 * @see https://qiita.com/tokumei-devs/items/c75d27e98aca9f4dc166
 */
export function ShaderPlane() {
  const ref = useRef<ShaderMaterial>(null!)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.uniforms.u_time.value += +delta
    }
  })

  return (
    <mesh scale={3}>
      <planeGeometry args={[1, 1, 1]} />
      <shaderMaterial
        ref={ref}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          u_time: { value: 0.0 },
        }}
      />
    </mesh>
  )
}
