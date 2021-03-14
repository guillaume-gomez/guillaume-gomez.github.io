import React from 'react';
import "./ProjectCell.css";
import {motion } from "framer-motion";

interface ProjectCellInterface {
  name: string;
  githubPage: string;
  demo: string;
  preview: string;
  tags: string[];
  theme: string;
}

function ProjectCell({name, githubPage, demo, preview, tags} : ProjectCellInterface) {
  return (
  <motion.div
    whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 1 : -1, boxShadow: "0px 2px 50px rgba(0, 0, 0, 0.25)"}}
  >
    <div className="project-cell-content">
      <div>{name}</div>
      <img src="https://via.placeholder.com/150" />
    </div>
  </motion.div>
  );
}

export default ProjectCell;
