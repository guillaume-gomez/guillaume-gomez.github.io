import React, { useState, useMemo } from 'react';
import { uniq, orderBy } from "lodash";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import "./Projects.css";
import ProjectsGrid from "../components/ProjectsGrid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { projectsData } from "../constants";

interface ProjectInterface {
  refTarget: React.RefObject<HTMLSpanElement>
}

function Projects({refTarget} : ProjectInterface) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>("");
  const [itemsLoaded, setItemLoaded] = useState<number>(10);
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

  function loadMore() {
    const itemsToAdd = Math.min(projectsData.length - itemsLoaded, 10);
    setItemLoaded(itemsLoaded + itemsToAdd);
  }

  function onChangeTheme(theme: string) {
    setTheme(theme);
    //remove selected filter
    setFilter("")
  }

  return (
    <section className="projects-content" id="project">
      <h2>{t("projects.projects")}</h2>
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
              <div className="projects-stat">
                <strong>{` ${itemsLoaded} / ${projectsDataFiltered.length}`}</strong> {t("projects.projects")}
              </div>
             </div>
            <motion.div
              whileHover={{ translateY: -5, transition: { duration: 0.5, repeat: Infinity } }}
              onClick={() => refTarget!.current!.scrollIntoView({behavior: "smooth"}) } >
              <FontAwesomeIcon icon={faChevronDown} />
            </motion.div>
          </div>
          <ProjectsGrid projectsData={projectsDataFiltered.slice(0, itemsLoaded)} />
          {
            itemsLoaded < projectsData.length ?
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