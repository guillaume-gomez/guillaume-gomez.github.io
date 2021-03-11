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
      
      <div>
        <h3>Front End</h3>
          
        <ProgressBar value={35} label="HTML5/CSS" />
        <ProgressBar value={35} label="Javascript (ES6)" />
        <ProgressBar value={35} label="TypeScript" />
        <ProgressBar value={35} label="React" />
        
      </div>
    </section>
  );
}

export default Skills;