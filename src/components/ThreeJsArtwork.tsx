import { useRef, useMemo, Suspense, useEffect } from "react";
import { Color, DoubleSide, MathUtils, Object3D, InstancedMesh } from "three";
import { Canvas } from '@react-three/fiber';
import { makeNoise2D  } from "open-simplex-noise";
import CustomCameraControls from "./CustomCameraControls";
import { GizmoHelper, GizmoViewport, Stage, Stats, RoundedBox } from '@react-three/drei';

const width = 50;
const height = 80;
const columns = 12;
const rows = 10;

const palette = [
    "#000000",
    "#F0A500",
    "#FF007A",
    "#9D5CFF",
    "#C3C3B7",
    "#FF000F"

  ];

const dummy = new Object3D();
const c = new Color();
const noise = makeNoise2D(10);

function Artwork() {
  const mesh = useRef<InstancedMesh>();
  const gridColorsRef = useRef([]);

  const smallColumns = useMemo(() => {
    const baseColumns = [2, 4, 6, 9];

    if (columns <= 12) {
      return baseColumns;
    }

    const additionalColumns = Array.from(
      { length: Math.floor((columns - 12) / 2) },
      () => Math.floor(Math.random() * (columns - 12)) + 13
    );

    return [...new Set([...baseColumns, ...additionalColumns])].sort(
      (a, b) => a - b
    );
  }, [columns]);

  // display colors on grid
  const colors = useMemo(() => {
    const temp = [];
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const rand = noise(i, j) * 1.2;
        const range = smallColumns.includes(i + 1)
          ? 0
          : Math.floor(MathUtils.mapLinear(rand, -1, 1, ...[1, 6]));

        const color = c.set(palette[range]).toArray();
        gridColorsRef.current.push(palette[range]);
        temp.push(color);
      }
    }
    return new Float32Array(temp.flat());
  }, [columns, rows, palette, smallColumns]);

  const squares = useMemo(() => {
    const temp = [];
    let x = 0;
    const row = height / rows;

    for (let i = 0; i < columns; i++) {
      const n = noise(i, 0);
      const remainingWidth = width - x;
      const ratio = remainingWidth / (columns - i);
      const column = smallColumns.includes(i + 1)
        ? 1.5
        : ratio * MathUtils.mapLinear(n, -1, 1, 1.5, 2);
      const adjustedColumn = i === columns - 1 ? remainingWidth : column;

      for (let j = 0; j < rows; j++) {
        const currentColor = gridColorsRef.current[i * rows + j];
        let z = 0;

        if (currentColor === palette[0]) {
          z = 0;
        } else if (currentColor === palette[1]) {
          z = -10;
        } else if (currentColor === palette[2]) {
          z = 0;
        } else if (currentColor === palette[3]) {
          z = 8;
        } else if (currentColor === palette[4]) {
          z = 14;
        } else if (currentColor === palette[5]) {
          z = -20;
        }

        temp.push({
          x: x + adjustedColumn / 2 - width / 2,
          y: j * row + row / 2 - height / 2,
          z: z,
          scaleX: adjustedColumn,
          scaleY: row,
          color: currentColor
        });
      }

      x += column;
    }
    return temp;
  }, [height, width, rows, columns, smallColumns]);

  useEffect(() => {
    if(!mesh.current) {
      return;
    }
    for (let i = 0; i < squares.length; i++) {
      const { x, y, z, scaleX, scaleY, color } = squares[i];
      dummy.position.set(x, y, z);
      dummy.scale.set(scaleX, scaleY, 4);
      //if(color === palette[0]) {
      //  dummy.rotation.set(0, dummy.rotation.y +  elaspedTime * 0.01, 0);
      //}
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }

    mesh.current.instanceMatrix.needsUpdate = true;
  }, [mesh, gridColorsRef, squares])


  return (
    <instancedMesh
      ref={mesh}
      scale={[1, 1, 1]}
      args={[null, null, columns * rows]}
    >
      <boxGeometry args={[1, 1, 1]}>
        <instancedBufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </boxGeometry>
      <meshStandardMaterial
        vertexColors
        toneMapped={false}
        transparent
        side={DoubleSide}
      />
    </instancedMesh>
  );

}


interface ThreeJsArtworkProps {
  hideSquare: boolean;
}

function ThreeJsArtwork({ hideSquare } : ThreeJsArtworkProps) {

  return (
    <div
      style={{background: "black", border: "20px solid black"}}
      className="shadow-[20px_25px_0px_0px_rgba(0,_0,_0,_0.4)] hover:cursor-grabbing"
    >
      <div
        style={{background: "white", border: "15px solid white", width:500, height:600}}
      >
        <Canvas
            camera={{ position: [-10,0, 75], fov: 75, far: 200 }}
            dpr={window.devicePixelRatio}
            shadows
            style={{width: "100%", height: "100%"}}
        >
          { import.meta.env.MODE === "development" ? <Stats/> : <></> }
           <color attach="background" args={['#f2dec5']} />

            <ambientLight intensity={2.2} color="#ffffff" />
            <directionalLight
              position={[0, 40, 100]}
              intensity={1}
              color="#ffffff"
            />

          <Suspense>
            <Stage adjustCamera={false} preset="portrait" shadows="contact" environment="city">
              <group position={[0, 0, 0]}>
                <Artwork />
              </group>
              {hideSquare && (<RoundedBox
                    position={[0,1,0]}
                    args={[25, 25, 25]} // Width, height, depth. Default is [1, 1, 1]
                    radius={0.05} // Radius of the rounded corners. Default is 0.05
                    smoothness={4} // The number of curve segments. Default is 4
                    bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
                    creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
                >
                  <meshPhongMaterial color="blue" />
                </RoundedBox>)
              }

            </Stage>

            {/*<EffectComposer>
              <Noise premultiply blendFunction={3} />
              <DotScreen
                blendFunction={BlendFunction.LIGHTEN} // blend mode
                angle={Math.PI * 0.345} // angle of the dot pattern
                scale={0.5} // scale of the dot pattern
              />
            </EffectComposer>*/}

         </Suspense>

          <CustomCameraControls
            minAzimuthAngle={-Math.PI/4}
            maxAzimuthAngle={Math.PI /3.1}
            minPolarAngle={Math.PI/4}
            maxPolarAngle={Math.PI / 1.9}
            maxDistance={80}
            speed={3}
          />
          <GizmoHelper alignment="bottom-right" margin={[20, 20]}>
            <GizmoViewport labelColor="white" axisHeadScale={1} />
          </GizmoHelper>
        </Canvas>
      </div>
    </div>
  );
}

export default ThreeJsArtwork;