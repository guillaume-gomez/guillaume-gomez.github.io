import React, { useState, useMemo } from 'react';
import { uniq, orderBy } from "lodash";
import { useTranslation } from 'react-i18next';
import "./Projects.css";
import ProjectsGrid from "../components/ProjectsGrid";
import { projectsData } from "../constants";

function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>("");
  const [theme, setTheme] = useState<string>("");

  const projectsDataFiltered = useMemo(() => {
    if(theme === "" && filter === "") {
      return projectsData;
    }
    if(theme === "" && filter !== "") {
      return projectsData.filter(data => data.tags.includes(filter));
    }
   
    const dataByTheme = projectsData.filter(data => data.theme === theme);
    if(theme !== "" && filter === "") {
      return dataByTheme;
    }
    // if theme !== "" && filter !== ""
    return dataByTheme.filter(data => data.tags.includes(filter))
  }, [filter, theme]);

  const tags = useMemo(
      () => uniq(projectsDataFiltered
        .reduce<string[]>((acc, curValue) => [...acc, ...curValue.tags], []))
  , [projectsDataFiltered]);

  const themes = useMemo(() => uniq(projectsData.map(data => data.theme)),[projectsData]);

  function onChangeTheme(theme: string) {
    setTheme(theme);
    //remove selected filter
    setFilter("")
  }

  return (
    <section className="projects-content" id="project">
        <ul className="projects-header">
          <li key={"all"} onClick={() => onChangeTheme("")}><a>{t("projects.theme.all")}</a></li>
          {
            orderBy(themes).map(theme => <li key={theme} onClick={() => onChangeTheme(theme)}><a>{t(theme)}</a></li>)
          }
        </ul>
        <div className="projects-grid">
          <div className="projects-header-filter-and-stats">
            <div className="projects-stat">
              <strong>{projectsDataFiltered.length}</strong> projects
            </div>
            <div className="project-filter">
              <span>Tags</span>
              <select className="custom-select" onChange={(e) => setFilter(e.target.value)} value={filter}>
                <option className="custom-option" value="">No filter</option>
                {orderBy(tags).map(tag => <option className="custom-option" key={tag}>{tag}</option>)}
              </select>
            </div>
           </div>
          <ProjectsGrid projectsData={projectsDataFiltered} />
        </div>
    </section>
    
  );
}

export default Projects;