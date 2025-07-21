import { useEffect, useState, useRef } from "react";
import "./GridProject.css"
import { projectsData } from "../constants";
import { sortBy } from "lodash";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";


function GridProject() {
  const container = useRef();
  const tl = useRef();


  useGSAP(
      () => {
          gsap.to('.other', {translateZ: "0"})
      },
      { scope: container  }
    );


  return (
    <div ref={container} className="gridProjectContainer h-screen bg-primary" style={{perspective: "500px"}}>
      <div className="bigProject1">
        
      </div>
      <div className="bigProject2">
        
      </div>
      <div className="bigProject3">
        
      </div>
      <div className="bigProject4">
        
      </div>
      <div className="bigProject5">

      </div>

      {
        sortBy(projectsData, [function(o) { return -o.relevance; }]).map(projectData => {
          return (
            <div
              key={projectData.name}
              className="other"
              //style={{transform: `translateZ(${0}px)`}}
            >
              <img src={`./projects/${projectData.preview}`} style={{objectFit: "fill", width: "100%", height:"100%", borderRadius: 8}} />
              <div className="absolute top-1/2 left-2 font-bold">
                {projectData.name}
              </div>
            </div>
          );
        })
      }
    </div>
  );

}

export default GridProject;