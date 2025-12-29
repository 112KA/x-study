import { GizmoHelper, GizmoViewport, OrbitControls } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <Canvas>
      <mesh>
        <meshNormalMaterial />
        <boxGeometry />
      </mesh>
      <OrbitControls />
      <GizmoHelper alignment="top-right" margin={[75, 75]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper>
    </Canvas>
  )
}

export default App
