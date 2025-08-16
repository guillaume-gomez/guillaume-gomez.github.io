import { useEffect, useState, useRef, useMemo } from "react";
import "./GridProject.css"
import { projectsData, type ProjectData } from "../constants";
import { sortBy } from "lodash";
import BigProjectCard from "./BigProjectCard";
import NormalProjectCard from "./NormalProjectCard";
import Modal from './Modal';
import ProjectDetail from './ProjectDetail';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

function GridProject() {
  const [selectedProject, setSelectedProject] = useState<ProjectData|null>(null);
  const tl = useRef();
  const filteredItems = useMemo(() => sortBy(projectsData, [function(o) { return -o.relevance; }]) ,[])


  useGSAP(
      () => {
         
        const grid = document.querySelector('.gridProjectContainer');
        const gridImages = grid.querySelectorAll('.projectCard');
        const title = document.querySelector(".title-gsap");

        
        //const gridImages = gsap.utils.toArray(grid.querySelectorAll('.projectCard'));
        /*gridImages.forEach(gridImage => {
          gsap.from(gridImage, {
            y: window.innerHeight,
            //rotationX: -70,
            transformOrigin: '50% 0%',
            //z: -1000,
            y: -40,
            autoAlpha: 0,
            scrollTrigger: {
              trigger: gridImage,
              start: 'bottom bottom',
              end: 'top 20%',
              pin: grid.parentNode,
              scrub: 0.3,
            }
          })
        });*/

        gsap.from(title, {
            writingMode: "vertical-lr",
            textOrientation: "use-glyph-orientation",
            scrollTrigger: {
              trigger: title,
              start: 'end start',
              end: 'top 20%',
              pin: title.parentNode,
              scrub: 0.3,
            }
        });
        
        gsap.timeline({
          defaults: {
            ease: 'sine'
          },
          scrollTrigger: {
            trigger: grid,
            start: 'start start',
            end: '+=100%',
            pin: grid.parentNode,
            scrub: 0.3,
          }
        })
        .set(grid, {perspective: 1000})
        .from(gridImages, {
          stagger: {
            amount: 0.4,
            from: 'random',
            grid: [4,9]
          },
          y: window.innerHeight,
          rotationX: -90,
          transformOrigin: '50% 0%',
          z: -1000,
          autoAlpha: 0
        });
        

      },
      []
    );


  return (
    <>
      <Modal visible={!!selectedProject} onClose={() => setSelectedProject(null)} >
        {!!selectedProject && <ProjectDetail projectData={selectedProject!}/>}
      </Modal>
      <p 
        className="title-gsap font-display text-8xl"
      >
        Projects
      </p>
      <div 
        className="gridProjectContainer"
      >
        {
          filteredItems.slice(0, 10).map((projectData, index) => {
            return (
              <BigProjectCard
                key={projectData.name}
                projectId={index + 1 }
                projectData={projectData}
                onClick={() => setSelectedProject(projectData)}
              />
            );
          })
        }
       
        {
          filteredItems.slice(10, filteredItems.length).map(projectData => {
            return (
              <NormalProjectCard
                key={projectData.name}
                projectData={projectData}
                onClick={() => setSelectedProject(projectData)}
              />
            );
          })
        }
      </div>
    </>
  );

}

export default GridProject;