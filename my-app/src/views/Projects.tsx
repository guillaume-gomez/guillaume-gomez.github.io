import React, { useState, useMemo } from 'react';
import { uniq } from "lodash";
import { Form } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import "./Projects.css";
import ProjectsGrid from "../components/ProjectsGrid";
import { projectsData } from "../constants";

function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>("");
  const [theme, setTheme] = useState<string>(projectsData[0].theme);

  const projectsDataFiltered = useMemo(() => {
    const dataByTheme = projectsData.filter(data => data.theme === theme);
    if(filter === "") {
      return dataByTheme;
    }
    return dataByTheme.filter(data => data.tags.includes(filter))
  }, [filter, theme]);

  const tags = useMemo(
      () => uniq(projectsDataFiltered
        .reduce<string[]>((acc, curValue) => [...acc, ...curValue.tags], []))
  , [projectsDataFiltered]);
  const themes = useMemo(() => uniq(projectsData.map(data => data.theme)),[projectsData]);
  return (
    <section className="projects-content">
      
      <ul className="projects-header">
        {
          themes.map(theme => <li key={theme} onClick={()=> setTheme(theme)}><a>{t(theme)}</a></li>)
        }
      </ul>
      <div className="projects-grid">
        <div>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Tags</Form.Label>
            <Form.Control as="select" onChange={(e) => setFilter(e.target.value)}>
              <option value="">No filter</option>
              {tags.map(tag => <option key={tag}>{tag}</option>)}
            </Form.Control>
          </Form.Group>
        </div>
        <ProjectsGrid projectsData={projectsDataFiltered} />
      </div>
    </section>
  );
}

export default Projects;