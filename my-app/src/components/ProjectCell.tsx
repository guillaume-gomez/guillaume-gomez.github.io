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
    whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 1 : -1, boxShadow: "0px 2px 50px rgba(0, 0, 0, 0.25)"}}
  >
    <div className="project-cell-content">
      <div>{name}</div>
      <img className="project-cell-image" src={ preview ? `${preview}?raw=true` : "https://via.placeholder.com/150" }  />
    </div>
  </motion.div>
  );
}

export default ProjectCell;
