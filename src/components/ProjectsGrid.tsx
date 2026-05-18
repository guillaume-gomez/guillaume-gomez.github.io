import React, { useEffect, useState, useMemo } from 'react';
import "./ProjectsGrid.css";
import { isBrowser } from 'react-device-detect';
import ProjectCell, { ProjectCellInterface } from "./ProjectCell";

import { useAnimation, motion } from "framer-motion";



interface ProjectGridInterface {
  projectsData: ProjectCellInterface[]
  // usefull for animations
  itemsLoaded: number;
}


function ProjectsGrid({projectsData, itemsLoaded } : ProjectGridInterface) {
  const controls = useAnimation();
  const [nbItemLoaded, setNbItemLoaded] = useState<number>(10);
  const generatedProjectCells = useMemo(() => 
    projectsData.slice(0, itemsLoaded)
      .map((data, index) => {
        return (
          <motion.div
            className="project-grid-cell"
            key={index}
            custom={index}
            animate={controls}
            initial={"idle"}
            transition={{ duration: 1.0 }}
            variants={{
              idle: { opacity: 1 },
              showUp: (i: number) => {
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
      }),
  [itemsLoaded, nbItemLoaded]
  );

  useEffect(() => {
    setNbItemLoaded(0);
    controls.start("showUp");
  }, [controls])


  useEffect(() => {
    if(isBrowser) {
      controls.start("showUp");
      setNbItemLoaded(itemsLoaded);
    }
  }, [itemsLoaded, controls]);

  return (
  <div className="project-grid-grid-container">
    {generatedProjectCells}
  </div>

  );
}

export default ProjectsGrid;
