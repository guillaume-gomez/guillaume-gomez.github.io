import React from 'react';
import 'aframe';
import 'aframe-orbit-controls';
import "./AframeScene.css";

function AframeScene() {
  return (
    <a-scene  loading-screen="dotsColor: red; backgroundColor: #062859" embedded vr-mode-ui="enabled: false">
      <a-assets>
        {/*<img id="my-image" src={`${process.env.PUBLIC_URL}/terminal.jpg`} /> */}
        <a-asset-item id="computer-mtl" src={`${process.env.PUBLIC_URL}/3d-assets/mainframe.mtl`}></a-asset-item>
        <a-asset-item id="computer-obj" src={`${process.env.PUBLIC_URL}/3d-assets/mainframe.obj`}></a-asset-item>
        <a-asset-item id="balloon" src={`${process.env.PUBLIC_URL}/3d-assets/ball.gltf`}></a-asset-item>
         <a-asset-item id="cassette" src={`${process.env.PUBLIC_URL}/3d-assets/cassette.gltf`}></a-asset-item>
      </a-assets>
      <a-camera camera="fov: 80;" id="camera" look-controls orbit-controls="target: 0 1.6 0; minDistance: 0.5; maxDistance: 180; initialPosition: 0 0 1.6" listener wasd-controls-enabled="false">
</a-camera>
      <a-entity
            animation="property: object3D.position.y; to: 0.5; dir: alternate; dur: 2000; loop: true"
            obj-model="obj: #computer-obj; mtl: #computer-mtl;"
            scale="0.5 0.5 0.5"
            position="-10 0 -15"
            rotation="0 90 0"
   ></a-entity>
   <a-gltf-model src="#balloon"
        animation="property: object3D.position.y; to: 0; dir: alternate; dur: 1500; loop: true"
        scale="0.01 0.01 0.01"
        position="4 -3.5 -7"
        rotation="0 -90 0"
      >
      </a-gltf-model>
       <a-gltf-model src="#cassette"
        animation="property: object3D.position.y; to: -4.5; dir: alternate; dur: 2000; loop: true"
        scale="1 1 1"
        position="2 -5 -10"
        rotation="0 0 0"
      >
      </a-gltf-model>
       {/*<a-image src="#my-image"  scale="2 2 2"
            position="0 0.5 -13"
            rotation="-10 0 0"></a-image>
     */}
    </a-scene>
  );
}

export default AframeScene;