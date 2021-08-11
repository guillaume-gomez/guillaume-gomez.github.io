import React from 'react';
import { motion, useAnimation } from "framer-motion";
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

const tagToColor :  { [key: string]: string }  = {
  "typescript": "#2f74c0",
  "canvas": "black",
  "elixir": "#462159",
  "react": "#5ed3f3",
  "javascript": "#918311",
  "unity": "#100b09",
  "rust":"#ef4a01",
  "extension": "black",
  "youtube":"#f72200",
  "phaser": "#6e8d8c",
  "C++": "#6295c0",
  "SFML": "#8bc83e",
  "HTML":"#e96228",
  "CSS": "#0f6db5",
  "LD": "#f78c34",
  "smart watch": "black",
  "slack": "#2db079",
  "ruby": "#e51e21",
  "GMTK": "black",
  "experiment": "black",
  "jaws": "black",
  "graphql": "#de33a6",
  "music": "black",
  "shaders" : "black",
  "GLSL": "black",
  "SDL": "#163353",
  "haskell": "#636363",
  "python": "#f7ca3d",
  "erlang": "#a41231",
  "network": "black",
  "java": "#e72f1d",
  "processing": "#022440",
  "boostrap": "#563484",
  "rails": "#c61900"
};

function ProjectCell({name, githubPage, demo, preview, tags, theme, relevance} : ProjectCellInterface) {
  const controls = useAnimation();
  return (
  <motion.div
    className="project-cell-content"
    onHoverStart={() => controls.start("visible")}
    onHoverEnd={() => controls.start("hidden")}
  >
   <motion.img
      className={preview ? "project-cell-image" : "project-cell-image project-cell-gray"}
      loading="lazy"
      src={ preview ? `${process.env.PUBLIC_URL}/projects/${preview}` : `${process.env.PUBLIC_URL}/projects/noise.jpg` }
      alt={name}
    />  
    <motion.div className="project-cell-details"
      transition={{ duration: 0.25 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, height: "100%" },
        hidden: { opacity: 0, height: "0%", top: "-306px" },
      }}
      >
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
            <div className="project-cell-tag" key={tag} style={{background: tagToColor[tag]}}>{tag}</div>
          )
      }
      </div>
    </motion.div>
  </motion.div>
  );
}

export default ProjectCell;
