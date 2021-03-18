import React, { useEffect } from 'react';
import { orderBy } from "lodash";
import "./ProjectsGrid.css";
import ProjectCell, { ProjectCellInterface } from "./ProjectCell";

import { useAnimation, motion } from "framer-motion";



interface ProjectGridInterface {
  projectsData: ProjectCellInterface[]
}

// check css rule in grid-container clas
const widthGrid = 7;

function ProjectsGrid({projectsData} : ProjectGridInterface) {
  const controls = useAnimation();
  const generatedProjectCells = orderBy(projectsData, ["relevance"], ['desc'])
  .map((data, index) => {
    return (
      <motion.div className="project-grid-cell" key={index} custom={Math.trunc(index /widthGrid) % widthGrid} animate={controls} >
        <ProjectCell {...data}/>
      </motion.div>);
  });

  useEffect(() => {
  controls.start(i => ({
    opacity: [0, 1],
    translateY: [100, 0],
    transition: { delay: i * 0.2 },
  }))
}, [projectsData])

  return (
    <div className="grid-container">
    {generatedProjectCells}
  </div>

  );
}

export default ProjectsGrid;
