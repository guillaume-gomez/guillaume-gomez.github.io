import React from 'react';
import ProgressBar from "../components/CustomProgressBar";
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faRunning, faMusic, faFilm } from '@fortawesome/free-solid-svg-icons';

import "./Skills.css";

function Skills() {
  const { t } = useTranslation();
  return (
    <section className="skills-content">
      <h2 className="skills-title">{t("skills.skills")}</h2>
      
      <div className="skills-stats">
        <div className="skills-progress-bars">
          <h3>Front-End</h3>
          <ProgressBar value={75} label="HTML5/CSS" />
          <ProgressBar value={90} label="React 16.8" />
          <ProgressBar value={40} label="JQuery" />
          <h3>Back-End</h3>
          <ProgressBar value={70} label="Ruby on Rails" />
          <ProgressBar value={40} label="Node js" />
          <ProgressBar value={80} label="GraphQL" />
          <h3>Languages</h3>
          <ProgressBar value={75} label="Javascript (ES6)" />
          <ProgressBar value={85} label="TypeScript" />
          <ProgressBar value={70} label="Ruby" />
          <ProgressBar value={60} label="C++" />
          <ProgressBar value={50} label="Rust" />
          <ProgressBar value={50} label="Elixir" />
          <ProgressBar value={45} label="Erlang" />
        </div>
        <div className="skills-pie-chart">
          <h3> My pie charts</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;