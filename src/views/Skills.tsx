import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from "../components/SectionHeader";
import SkillCategory from "../components/SkillsCategory";
import "./Skills.css";

const Frontends = [
  {
    name: "HTML",
    iconSrc: "html5.png"
  }
];
const Backends = [
  {
    name: "GraphQL",
    iconSrc: "graphql.png"
  }
];

const Languages = [
  {
   name: "C#",
   iconSrc: "CSharp.png"
  },
  {
   name: "C++",
   iconSrc: "C++.png"
  },
];

const Tools = [
  {
    name: "Codeship",
    iconSrc: "codeship.png"
  }
];

function Skills() {
  const { t } = useTranslation();

  return (
    <section className="skills-content">
      <SectionHeader text={t("skills.skills")} />
      <div className="skill-categories">
        <div className="skills-front">
          <SkillCategory skills={Frontends} skillCategoryName={"Frontend"}  />
        </div>
        <div className="skills-back">
          <SkillCategory skills={Backends} skillCategoryName={"Backend"} />
        </div>
        <div className="skills-languages">
          <SkillCategory skills={Languages} skillCategoryName={"Languages"} />
        </div>
        <div className="skills-tools">
          <SkillCategory skills={Tools} skillCategoryName={"Tools"} />
        </div>
      </div>
    </section>
  );
}

export default Skills;