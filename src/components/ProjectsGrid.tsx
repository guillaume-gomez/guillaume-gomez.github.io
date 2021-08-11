import React, { useEffect, useState } from 'react';
import "./ProjectsGrid.css";
import ProjectCell, { ProjectCellInterface } from "./ProjectCell";

import { useAnimation, motion } from "framer-motion";



interface ProjectGridInterface {
  projectsData: ProjectCellInterface[]
  // usefull for animations
  itemsLoaded: number;
}


function ProjectsGrid({projectsData, itemsLoaded } : ProjectGridInterface) {
  const controls = useAnimation();
  const [nbItemLoaded, setNbItemLoaded] = useState<number>(0);
  const generatedProjectCells = projectsData.slice(0, itemsLoaded)
  .map((data, index) => {
    return (
      <motion.div
        className="project-grid-cell"
        key={index}
        custom={index}
        animate={controls}
        initial="hidden"
        transition={{ duration: 1.0 }}
        variants={{
          hidden: { opacity: 0 },
          showUp: (i) => {
            if(i > nbItemLoaded) {
              return {opacity: 1, translateY: [(nbItemLoaded - i) * -200, 0]}
            } else {
              return {opacity: 1}
            }
          }

        }}
      >
        <ProjectCell {...data}/>
      </motion.div>);
  });

  useEffect(() => {
    setNbItemLoaded(0);
  }, [projectsData])


  useEffect(() => {
    controls.start("showUp");
    setNbItemLoaded(itemsLoaded);
  }, [itemsLoaded, controls]);

  return (
  <div className="project-grid-grid-container">
    {generatedProjectCells}
  </div>

  );
}

export default ProjectsGrid;
