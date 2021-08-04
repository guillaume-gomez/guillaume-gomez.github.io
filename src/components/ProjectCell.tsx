import React from 'react';
import { motion } from "framer-motion";
import CustomButton from "../components/CustomButton";

import "./ProjectCell.css";

export interface ProjectCellInterface {
  name: string;
  githubPage: string;
  demo: string|null;
  preview: string |null;
  tags: string[];
  theme: string;
  relevance: number;
  year: number;
}

function ProjectCell({name, githubPage, demo, preview, tags, theme, relevance} : ProjectCellInterface) {
  return (
  <motion.div
    className="project-cell-content"
    transition={{ duration: 0.5 }}
    whileHover={{ scale: [1, 0.9, 1.1], boxShadow: "0px 2px 50px rgba(0, 0, 0, 0.25)"}}
  >
   <motion.img
      className={preview ? "project-cell-image" : "project-cell-image project-cell-gray"}
      loading="lazy"
      src={ preview ? `${process.env.PUBLIC_URL}/projects/${preview}` : `${process.env.PUBLIC_URL}/projects/noise.jpg` }
      alt={name}
    />  
    <motion.div className="project-cell-details"
      whileHover={{opacity: 1.0, transition: { duration: 0.2 }}} >
      <div className="project-cell-name">{name}</div>
      
      <div className="project-cell-buttons">
        <CustomButton
          href={githubPage}
          className="project-cell-button"
          >
            Github
         </CustomButton>
        {
          demo ?
          <CustomButton
            href={demo} 
            className="project-cell-button"
            >
              Demo
            </CustomButton>
          :
          <div className="project-cell-button-disabled strikeout">Demo</div>
        }

      </div>
      <div className="project-cell-tags">
        {  tags.map(tag =>
            <div className="project-cell-tag" key={tag}>{tag}</div>
          )
      }
      </div>
    </motion.div>
  </motion.div>
  );
}

export default ProjectCell;
