import { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { GizmoHelper, GizmoViewport, Stage, Grid, Stats, Gltf, Text, RoundedBox, CameraControls, SoftShadows } from '@react-three/drei';
import { EffectComposer, Noise, DotScreen } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

console.log(BlendFunction)

function ThreeJsArtwork() {
  return (
    <div style={{backgroud: "black", border: "20px solid black"}} className="shadow-[20px_25px_0px_0px_rgba(0,_0,_0,_0.4)]">
      <div style={{backgroud: "white", border: "15px solid white", width:500, height:600}}>
        <Canvas
            camera={{ position: [0,0, 3], fov: 75, far: 10 }}
            dpr={window.devicePixelRatio}
            shadows
            style={{width: "100%", height: "100%"}}
        >
          { import.meta.env.MODE === "development" ? <Stats/> : <></> }
           <color attach="background" args={['#c0d6e9']} />
          <Suspense>
            <Stage adjustCamera={false} preset="rembrandt" shadows="contact" environment="city">
               
              <RoundedBox
                position={[0,0,0]}
                args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={4} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
               
              >
                <meshPhongMaterial color="#f3f3f3" />
              </RoundedBox>

              <RoundedBox
                position={[0,1,0]}
                args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={4} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
               
              >
                <meshPhongMaterial color="blue" />
              </RoundedBox>

              <RoundedBox
                position={[1,-1,0]}
                args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
                radius={0.05} // Radius of the rounded corners. Default is 0.05
                smoothness={4} // The number of curve segments. Default is 4
                bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
               
              >
                <meshPhongMaterial color="red" />
              </RoundedBox>
            </Stage>
          {/*  <EffectComposer>
              <Noise premultiply blendFunction={3} />
              <DotScreen
                blendFunction={BlendFunction.LIGHTEN} // blend mode
                angle={Math.PI * 0.5} // angle of the dot pattern
                scale={0.5} // scale of the dot pattern
              />
            </EffectComposer>*/}

         </Suspense>

          <CameraControls makeDefault />
          <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
            <GizmoViewport labelColor="white" axisHeadScale={1} />
          </GizmoHelper>
        </Canvas>
      </div>
    </div>
  );
}

export default ThreeJsArtwork;