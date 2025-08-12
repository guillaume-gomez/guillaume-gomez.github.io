import { useEffect, useState, useRef, useMemo } from "react";
import "./GridProject.css"
import { projectsData, type ProjectData } from "../constants";
import { sortBy } from "lodash";
import BigProjectCard from "./BigProjectCard";
import NormalProjectCard from "./NormalProjectCard";
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
      <div ref={container} className="gridProjectContainer" style={{perspective: "500px"}}>
        {
          filteredItems.slice(0, 10).map((projectData, index) => {
            return (
              <BigProjectCard
                key={projectData.name}
                projectId={index + 1 }
                projectData={projectData}
                onClick={() => setSelectedProject(projectData)}
              />
            );
          })
        }
       
        {
          filteredItems.slice(10, filteredItems.length).map(projectData => {
            return (
              <NormalProjectCard
                key={projectData.name}
                projectData={projectData}
                onClick={() => {}}
              />
            );
          })
        }
      </div>
    </>
  );

}

export default GridProject;