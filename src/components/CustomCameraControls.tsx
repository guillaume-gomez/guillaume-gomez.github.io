import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils, Object3D, Group } from "three";
import { CameraControls } from '@react-three/drei';

interface CustomCameraControlsProps {
  speed?: number;
  rotationTimerThrottle?: number;
  minAzimuthAngle?: number;
  maxAzimuthAngle?: number;
  minPolarAngle?: number;
  maxPolarAngle?:number;
  maxDistance?: number;
}



function CustomCameraControls({
  speed = 20,
  rotationTimerThrottle = 2000,
  minAzimuthAngle = - 2 * Math.PI,
  maxAzimuthAngle = 2 * Math.PI,
  minPolarAngle = 0 ,
  maxPolarAngle = Math.PI,
  maxDistance = Math.Infinity
} : CustomCameraControlsProps) {
  const cameraRef = useRef<CameraControls>(null);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [directionRotation, setDirectionRotation] = useState<number>(1);
  
  useFrame(
    (_state, delta) => {
      if(!autoRotate) {
        return;
      }
      if(!cameraRef.current) {
        return;
      }

      const { minAzimuthAngle, maxAzimuthAngle } = cameraRef.current;

      const newAzimuthAngle = cameraRef.current.azimuthAngle + ((speed * delta * MathUtils.DEG2RAD) * directionRotation);
      
      if(newAzimuthAngle > minAzimuthAngle && newAzimuthAngle <  maxAzimuthAngle) {
        cameraRef.current.azimuthAngle = newAzimuthAngle;
      } else {
        setDirectionRotation(-1 * directionRotation)
      }


    }
  );

  return (<CameraControls
      makeDefault
      maxDistance={maxDistance}
      minPolarAngle={minPolarAngle}
      maxPolarAngle={maxPolarAngle}
      minAzimuthAngle={minAzimuthAngle}
      maxAzimuthAngle={maxAzimuthAngle}
      onStart={() => {
        setAutoRotate(false);
      }}
      onEnd={() => {
        setTimeout(() => {
          setAutoRotate(true);
        }, rotationTimerThrottle);
      }}
      ref={cameraRef}
    />);
}

export default CustomCameraControls;