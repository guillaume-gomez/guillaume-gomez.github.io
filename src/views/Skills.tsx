import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from "../components/SectionHeader";
import SkillCategory from "../components/SkillsCategory";
import "./Skills.css";

const Frontends = [
  {
    name: "HTML",
    iconSrc: "html.svg"
  },
  {
    name: "CSS",
    iconSrc: "css.svg"
  },
  {
    name: "React Js",
    iconSrc: "react.svg"
  },
  {
    name: "Jquery",
    iconSrc: "jquery.svg"
  },
  {
    name: "Boostrap",
    iconSrc: "boostrap.svg"
  },
  {
    name: "Material UI",
    iconSrc: "material-ui.svg"
  }
];
const Backends = [
  {
    name: "Rails",
    iconSrc: "rails.svg"
  },
  {
    name: "GraphQL",
    iconSrc: "graphql.svg"
  },
  {
    name: "Nodejs",
    iconSrc: "nodejs.svg"
  },
  {
    name: "Sinatra",
    iconSrc: "sinatra.svg"
  }
];

const Languages = [
  {
    name: "Ruby",
    iconSrc: "ruby.svg"
  },
  {
    name: "Javascript",
    iconSrc: "js.svg"
  },
  {
    name: "Typescript",
    iconSrc: "ts.svg"
  },
  {
   name: "C#",
   iconSrc: "cSharp.svg"
  },
  {
   name: "C++",
   iconSrc: "c++.svg"
  },
  {
    name: "Python",
    iconSrc: "python.svg"
  },
  {
    name: "Php",
    iconSrc: "php.svg"
  }
];

const Tools = [
  {
    name: "Git",
    iconSrc: "git.svg"
  },
  {
    name: "GitHub",
    iconSrc: "github.svg"
  },
  {
    name: "Gitlab",
    iconSrc: "gitlab.svg"
  },
  {
    name: "Webpack",
    iconSrc: "webpack.svg"
  },
  {
    name: "Codeship",
    iconSrc: "codeship.svg"
  },
  {
    name: "Unity",
    iconSrc: "unity.svg"
  },
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