import { useState, useRef, useMemo } from "react";
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
  const container = useRef<HTMLDivElement>(null);
  const filteredItems = useMemo(() => sortBy(projectsData, [function(o) { return -o.relevance; }]) ,[])


  useGSAP(
      () => {
        const section = container.current!.querySelector('.projectSection') as HTMLElement;
        const grid = container.current!.querySelector('.gridProjectContainer')!;
        const gridImages = gsap.utils.toArray<HTMLElement>('.projectCard', grid);
        const title = container.current!.querySelector('.title-gsap');

        // Un seul pin pour toute la section : la rotation du titre et l'arrivee
        // des cartes s'enchainent dans la meme timeline, donc aucun scroll mort
        // entre les deux (avec deux ScrollTriggers, il restait toujours la
        // hauteur du titre a scroller entre la fin du premier pin et le second).
        gsap.timeline({
          defaults: {
            ease: 'sine'
          },
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=150%',
            pin: section,
            scrub: 0.3,
          }
        })
        .set(grid, {perspective: 1000})
        .fromTo(title,
          { rotate: -90 },
          { rotate: 0, ease: 'none', duration: 0.6 }
        )
        // Les cartes montent en meme temps que le titre pivote ('<' = au debut
        // de la rotation). La translation ne fait que 40% de la hauteur de
        // fenetre : sur un ecran complet elles restaient hors champ pendant
        // toute la rotation, donc le chevauchement ne se voyait pas.
        .from(gridImages, {
          duration: 1,
          stagger: {
            amount: 0.4,
            from: 'random',
            grid: [4,9]
          },
          y: window.innerHeight * 0.4,
          rotationX: -90,
          transformOrigin: '50% 0%',
          z: -1000,
          autoAlpha: 0
        }, '<');
      },
      { scope: container }
    );


  return (
    <div ref={container}>
      <Modal visible={!!selectedProject} onClose={() => setSelectedProject(null)} >
        {!!selectedProject && <ProjectDetail projectData={selectedProject!}/>}
      </Modal>
      <div className="projectSection">
        <div className="titleWrapper">
          <p
            className="title-gsap font-display text-8xl"
          >
            Projects
          </p>
        </div>
        <div className="gridWrapper">
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
        </div>
      </div>
    </div>
  );

}

export default GridProject;
