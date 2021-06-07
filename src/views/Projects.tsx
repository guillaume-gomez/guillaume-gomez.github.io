import React, { useState, useMemo, useEffect } from 'react';
import { uniq, orderBy } from "lodash";
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from "framer-motion";
import "./Projects.css";
import ProjectsGrid from "../components/ProjectsGrid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { projectsData } from "../constants";

interface ProjectInterface {
  refTarget: React.RefObject<HTMLSpanElement>
}

const stepProjects = 10;

function Projects({refTarget} : ProjectInterface) {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [filter, setFilter] = useState<string>("");
  const [itemsLoaded, setItemLoaded] = useState<number>(stepProjects);
  const [theme, setTheme] = useState<string>("");

  const projectsDataFiltered = useMemo(() => {
    const projectDataByRelevance = orderBy(projectsData, ["relevance"], ['desc']);
    if(theme === "" && filter === "") {
      return projectDataByRelevance;
    }
    if(theme === "" && filter !== "") {
      return projectDataByRelevance.filter(data => data.tags.includes(filter));
    }
   
    const dataByTheme = projectDataByRelevance.filter(data => data.theme === theme);
    if(theme !== "" && filter === "") {
      return dataByTheme;
    }
    // if theme !== "" && filter !== ""
    return dataByTheme.filter(data => data.tags.includes(filter))
  }, [filter, theme]);

  const tags = useMemo(
      () => uniq(projectsData
        .reduce<string[]>((acc, curValue) => [...acc, ...curValue.tags], []))
  , []);

  const themes = useMemo(() => uniq(projectsData.map(data => data.theme)),[]);

  useEffect(() => {
    const itemsLoaded = Math.min(projectsDataFiltered.length, stepProjects);
    setItemLoaded(itemsLoaded);
    controls.start("scaleUp");
  }, [projectsDataFiltered]);

  function loadMore() {
    const itemsToAdd = Math.min(projectsData.length - itemsLoaded, stepProjects);
    setItemLoaded(itemsLoaded + itemsToAdd);
    controls.start("scaleUp");
  }

  function onChangeTheme(theme: string) {
    setTheme(theme);
    //remove selected filter
    setFilter("")
  }

  return (
    <section className="projects-content" id="project">
      <h2 style={{textAlign: "center"}}>{t("projects.projects")}</h2>
        <ul className="projects-header">
          <li key={"all"} onClick={() => onChangeTheme("")}><a>{t("projects.theme.all")}</a></li>
          {
            orderBy(themes).map(theme => <li key={theme} onClick={() => onChangeTheme(theme)}><a>{t(`projects.theme.${theme}`)}</a></li>)
          }
        </ul>
        <div className="projects-grid">
          <div className="projects-grid-header">
            <div className="projects-header-filter-and-stats">
              <div className="project-filter">
                <span>Tags</span>
                <select className="custom-select" onChange={(e) => setFilter(e.target.value)} value={filter}>
                  <option className="custom-option" value="">{t("projects.no-filter")}</option>
                  {orderBy(tags).map(tag => <option className="custom-option" key={tag}>{tag}</option>)}
                </select>
              </div>
                <motion.div className="projects-stat"
                  animate={controls}
                  initial="idle"
                  variants={ {
                    idle: {  scale: 1 },
                    scaleUp: { scale: [1.1, 1.2, 1.3, 1.5, 1.3, 1.2, 1.1, 1.0] },
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}>
                <strong>
                  {` ${itemsLoaded} / ${projectsDataFiltered.length}`}
                </strong>
                </motion.div>
                {t("projects.projects")}
             </div>
            <motion.div
              whileHover={{ translateY: -5, transition: { duration: 0.5, repeat: Infinity } }}
              onClick={() => refTarget!.current!.scrollIntoView({behavior: "smooth"}) } >
              <FontAwesomeIcon icon={faChevronDown} />
            </motion.div>
          </div>
          <ProjectsGrid projectsData={projectsDataFiltered.slice(0, itemsLoaded)} />
          {
            itemsLoaded < projectsDataFiltered.length ?
            <div className="projects-load-more">
              <a className="load-more-button" onClick={loadMore}>{t("projects.load-more")}</a>
            </div> :
            null
          }
        </div>
    </section>
    
  );
}

export default Projects;