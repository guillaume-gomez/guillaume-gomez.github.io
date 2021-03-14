import React, { useState, useMemo } from 'react';
import { Form } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import "./Projects.css";
import ProjectsGrid from "../components/ProjectsGrid";
import { projectsData } from "../constants";

function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<string>("");
  const tags = useMemo(
      () => projectsData
        .reduce<string[]>((acc, curValue) => [...acc, ...curValue.tags], [])
        .reduce<string[]>((unique, item) => (unique.includes(item) ? unique : [...unique, item]),[])
  , []);
  const projectsDataFiltered = useMemo(() => {
    if(filter === "") {
      return projectsData;
    }
    return projectsData.filter(data => data.tags.includes(filter))
  }, [filter]);

  return (
    <section className="projects-content">
      
      <ul className="projects-header">
        <li><a href="#">About</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="projects-grid">
        <div>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Tags</Form.Label>
            <Form.Control as="select" onChange={(e) => setFilter(e.target.value)}>
              <option value="">No filter</option>
              {tags.map(tag => <option>{tag}</option>)}
            </Form.Control>
          </Form.Group>
        </div>
        <ProjectsGrid projectsData={projectsDataFiltered} />
      </div>
    </section>
  );
}

export default Projects;