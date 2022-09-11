import React, { useRef } from 'react';
import * as THREE from 'three'
import { Canvas, useFrame, createPortal, Group, SpotLight } from '@react-three/fiber'
import { Stage, Sky, useFBO, OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'

import "./AframeScene.css";

function Cassette(props) {
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/3d-assets/cassette.gltf`);
  return <primitive object={scene} {...props} />
}

function FootBall(props) {
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/3d-assets/ball/scene.gltf`);
  return <primitive object={scene} {...props} />
}


function TennisRaquette(props) {
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/3d-assets/racket/scene.gltf`);
  return <primitive object={scene} {...props} />
}

function Weights(props) {
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/3d-assets/weights/scene.gltf`);
  return <primitive object={scene} {...props} />
}


function Dekstop(props) {
  const { scene } = useGLTF(`${process.env.PUBLIC_URL}/3d-assets/workplace/scene.gltf`);
  return <primitive object={scene} {...props} />
}


function AframeScene() {
  const controls = useRef()
  return (
     <Canvas
      camera={{ position: [0, 2, -11], fov: 25, far: 25 }}
      dpr={window.devicePixelRatio}
      >
          <group position={[0,-1,0]} rotation={[0, Math.PI/3, 0]}>
            <directionalLight color={0x4e00ff} intensity={1.0} position={[2,0,2]} />
            <spotLight color={0xFF019A} position={[-5,0,0]} angle={Math.PI/4} intensity={0.5} distance={10} />
            <spotLight color={0x00F1FF} position={[5,0,0]} angle={Math.PI/4} intensity={0.5} distance={10} />
            <spotLight color="white" position={[0,3,2]} angle={Math.PI} intensity={0.40} distance={5} />
            <spotLight color="white" position={[0,2,0]} angle={Math.PI/4} intensity={0.15} distance={3} />
            <mesh scale={[0.30, 0.1, 0.30]} position={[-0.57,2.3,-0.25]}>
              <boxGeometry />
              <meshStandardMaterial color="grey" />
            </mesh>
            <TennisRaquette scale={3} position={[1.5, 0.5, 1]} rotation={[Math.PI/2, 0, Math.PI/2]} />
            <FootBall scale={0.005} position={[1.5, 0.35, 1]} rotation={[0, 0, 0]} />
            <Weights scale={0.075} position={[1.5, 0.30, 1.75]} rotation={[0, Math.PI/2, 0]} />
            <Cassette scale={0.20} position={[0, 2.30, -0.22]} rotation={[0, 0, 0]} />
            <Dekstop scale={0.05} />
          </group>
        <OrbitControls
          ref={controls}
          target={[0,0,0]}
          minDistance={5}
          maxDistance={15}
          minPolarAngle={Math.PI/6}
          maxPolarAngle={Math.PI/2.5}
          minAzimuthAngle={-Math.PI / 6}
          maxAzimuthAngle={Math.PI / 6}
          enableZoom={true}
          enablePan={false}
        />
    </Canvas>
  );

}

export default AframeScene;

//"Desktop" (https://skfb.ly/o7xVF) by Sublime is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
//"Work place" (https://skfb.ly/6XFGs) by vladunna is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
//"racket" (https://skfb.ly/ovVur) by gohean33 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
//"Low Poly Cartoon Football Ball Free" (https://skfb.ly/6UyIM) by chroma3d is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
//"Simple Weight" (https://skfb.ly/6AUsL) by Blender3D is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).