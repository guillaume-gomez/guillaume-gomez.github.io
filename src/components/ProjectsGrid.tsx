import React, { useEffect } from 'react';
import "./ProjectsGrid.css";
import ProjectCell, { ProjectCellInterface } from "./ProjectCell";

import { useAnimation, motion } from "framer-motion";



interface ProjectGridInterface {
  projectsData: ProjectCellInterface[]
}


function ProjectsGrid({projectsData} : ProjectGridInterface) {
  const controls = useAnimation();
  const generatedProjectCells = projectsData
  .map((data, index) => {
    return (
      <motion.div className="project-grid-cell" key={index} custom={index} animate={controls} >
        <ProjectCell {...data}/>
      </motion.div>);
  });

  useEffect(() => {
  controls.start(i => ({
    opacity: [0, 1],
    translateY: [100, 0],
    transition: { delay: i * 0.02 },
  }))
}, [projectsData, controls])

  return (
    <div className="projects-grid-container">
    {generatedProjectCells}
  </div>

  );
}

export default ProjectsGrid;
