import { GizmoHelper, GizmoViewport, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ShaderPlane2 } from './ShaderPlane2'

function App() {
  return (
    <Canvas>
      {/* <mesh>
        <meshNormalMaterial />
        <boxGeometry />
      </mesh> */}
      <ShaderPlane2 />
      <OrbitControls />
      <GizmoHelper alignment="top-right" margin={[75, 75]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper>
    </Canvas>
  )
}

export default App
