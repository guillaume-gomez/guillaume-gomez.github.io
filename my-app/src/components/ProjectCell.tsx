import React from 'react';
import "./ProjectCell.css";
import {motion } from "framer-motion";

export interface ProjectCellInterface {
  name: string;
  githubPage: string;
  demo: string|null;
  preview: string |null;
  tags: string[];
  theme: string;
  relevance: number;
}

function ProjectCell({name, githubPage, demo, preview, tags, theme, relevance} : ProjectCellInterface) {
  return (
  <motion.div
    className="project-cell-content"
    whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 1 : -1, boxShadow: "0px 2px 50px rgba(0, 0, 0, 0.25)"}}
    whileTap={{ scale: 1.1, rotate: Math.random() > 0.5 ? 1 : -1, boxShadow: "0px 2px 50px rgba(0, 0, 0, 0.25)"}}
  >
    <motion.img
      className="project-cell-image"
      src={ preview ? `${preview}?raw=true` : "https://via.placeholder.com/300" }
      whileHover={{opacity: 0.3, transition: { duration: 0.1 }}}  />
    <div className="project-cell-details">
      <div className="project-cell-name">{name}</div>
      
      <div className="project-cell-buttons">
        <a className="project-cell-button">github</a>
        <a className="project-cell-button strikeout">demo</a>
      </div>
      <div className="project-cell-tags">
        {  tags.map(tag =>
            <div className="project-cell-tag">{tag}</div>
          )
      }
      </div>
    </div>
  </motion.div>
  );
}

export default ProjectCell;
