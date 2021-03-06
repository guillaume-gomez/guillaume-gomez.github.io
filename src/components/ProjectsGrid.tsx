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
    translateY: [100, 0],
  }))
}, [projectsData, controls])

  return (
  <div className="project-grid-grid-container">
    {generatedProjectCells}
  </div>

  );
}

export default ProjectsGrid;
