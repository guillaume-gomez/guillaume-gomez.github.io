import React from 'react';
import { motion, useAnimation } from "framer-motion";
import CustomButton from "../components/CustomButton";
import Image from 'next/image';

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
  "rails": "#c61900",
  "threejs": "#705df2",
  "webassembly": "#705df2"
};

function ProjectCell({name, githubPage, demo, preview, tags, theme, relevance} : ProjectCellInterface) {
  return (
    <div className="card bg-base-100 h-72 shadow-xl image-full">
      <figure>
         <Image
            width={300}
            height={300}
            className={"w-full h-full object-cover"}
            loading="lazy"
            src={ preview ? `/projects/${preview}` : `/projects/noise.jpg` }
            alt={name}
          />  
      </figure>
      <div className="card-body flex-col items-center justify-between">
        <h2 className="card-title font-bold text-4xl text-center">{name}</h2>
        <div className="flex flex-row gap-8 items-center">
        <CustomButton
          size="small"
          href={githubPage}
          className="project-cell-button"
          >
            Github
        </CustomButton>
        {
          demo ?
          <CustomButton
            size="small"
            href={demo} 
            className="project-cell-button"
            >
              Demo
            </CustomButton>
          :
          <div className="project-cell-button-disabled strikeout">Demo</div>
        }
        </div>
        <div className="card-actions items-center">
          {  tags.map(tag =>
                <div className="badge badge-neutral" key={tag} style={{background: tagToColor[tag]}}>{tag}</div>
              )
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectCell;
