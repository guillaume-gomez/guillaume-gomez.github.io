import { useEffect, useState, useRef, useMemo } from "react";
import "./GridProject.css"
import { projectsData, type ProjectData } from "../constants";
import { sortBy } from "lodash";
import BigProjectCard from "./BigProjectCard";
import Modal from './Modal';
import ProjectDetail from './ProjectDetail';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";


function GridProject() {
  const [selectedProject, setSelectedProject] = useState<ProjectData|null>(null);
  const container = useRef();
  const tl = useRef();
  const filteredItems = useMemo(() => sortBy(projectsData, [function(o) { return -o.relevance; }]) ,[])


  useGSAP(
      () => {
          gsap.to('.other', {translateZ: "0"})
      },
      { scope: container  }
    );

  console.log(selectedProject)

  return (
    <>
      <Modal visible={!!selectedProject} onClose={() => setSelectedProject(null)} >
        {!!selectedProject && <ProjectDetail projectData={selectedProject!}/>}
      </Modal>
      <div ref={container} className="container p-2 m-auto gridProjectContainer bg-primary" style={{perspective: "500px"}}>
        {
          filteredItems.slice(0, 10).map((projectData, index) => {
            return (
              <BigProjectCard
                key={index}
                projectId={index +1 }
                projectData={projectData}
                onClick={() => setSelectedProject(projectData)}
              />
            );
          })
        }
       
        {
          filteredItems.slice(10, filteredItems.length).map(projectData => {
            return (
              <div
                key={projectData.name}
                className="other"
                //style={{transform: `translateZ(${0}px)`}}
              >
                <img 
                  className="object-fill w-full h-full"
                  src={`./projects/${projectData.preview}`}
                />
                <div className="absolute top-1/2 m-auto font-bold">
                  {projectData.name}
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );

}

export default GridProject;