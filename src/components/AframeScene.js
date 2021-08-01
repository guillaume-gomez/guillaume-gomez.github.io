import React from 'react';
import 'aframe'
import "./AframeScene.css";

function AframeScene() {
  return (
    <a-scene embedded vr-mode-ui="enabled: false">
      <a-assets>
        {/*<img id="my-image" src={`${process.env.PUBLIC_URL}/amuse.jpg`} /> */}
        <a-asset-item id="computer-obj" src={`${process.env.PUBLIC_URL}/3d-assets/mainframe.obj`}></a-asset-item>
        <a-asset-item id="computer-mtl" src={`${process.env.PUBLIC_URL}/3d-assets/mainframe.mtl`}></a-asset-item>

      </a-assets>
      <a-camera camera="fov: 80;" id="camera" rotation-reader position="0 1.6 0" listener wasd-controls-enabled="false">
</a-camera>
      <a-entity
            animation="property: object3D.position.y; to: 1.0; dir: alternate; dur: 2000; loop: true"
            obj-model="obj: #computer-obj; mtl: #computer-mtl;"
            scale="0.5 0.5 0.5"
            position="-10 0 -15"
            rotation="0 90 0"
   ></a-entity>
       {/*<a-image src="#my-image"  scale="2 2 2"
            position="0 0.5 -13"
            rotation="-10 0 0"></a-image>
     */}
    </a-scene>
  );
}

export default AframeScene;