import { useRef, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, GizmoHelper, GizmoViewport, Stage, Grid } from '@react-three/drei';


function ThreejsRenderer(): React.ReactElement {
  
  return (
      <Canvas
        camera={{ position: [0,0, 1.75], fov: 75, far: 5 }}
        dpr={window.devicePixelRatio}
        shadows
      >
        <color attach="background" args={['#06092c']} />
        <Suspense fallback={null}>
          <Stage preset="rembrandt" intensity={1} environment={null} /*environment="studio"*/>
          </Stage>
          <Grid args={[10, 10]} position={[0,-0.5,0]} cellColor='white' />
        </Suspense>
        <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
          <GizmoViewport labelColor="white" axisHeadScale={1} />
        </GizmoHelper>
        <OrbitControls makeDefault />
      </Canvas>
    
  );
}

export default ThreejsRenderer;