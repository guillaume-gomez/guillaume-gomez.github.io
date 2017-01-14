import React from 'react';

import { t } from "./Translations";
import ArticlesContainer from "./ArticlesContainer.react";
import Article from "./Article.react";

class PersonalProjects extends React.Component {

  constructor(props){
    super(props);
  }

  render () {
    const { locale } = this.props;
    return (
      <ArticlesContainer locale={locale} title={t(locale, "personal_project_title")}>
        <Article
          title={t(locale, "personal_project_LD37_title")}
          subtitle={t(locale, "personal_project_LD37_subtitle")}
          content={t(locale, "personal_project_LD37_content")}
          buttonText={t(locale, "personal_project_LD37_buttonText")}
          href={t(locale, "personal_project_LD37_href")}
          githubUrl={t(locale, "personal_project_LD37_githubUrl")}
          languages="Javascript ES6, Phaser"
        />
        <Article
          title={t(locale, "personal_project_LD36_title")}
          subtitle={t(locale, "personal_project_LD36_subtitle")}
          content={t(locale, "personal_project_LD36_content")}
          buttonText={t(locale, "personal_project_LD36_buttonText")}
          href={t(locale, "personal_project_LD36_href")}
          githubUrl={t(locale, "personal_project_LD36_githubUrl")}
          languages="Javascript ES6, Phaser"
        />
        <Article
          title={t(locale, "personal_project_LD35_title")}
          subtitle={t(locale, "personal_project_LD35_subtitle")}
          content={t(locale, "personal_project_LD35_content")}
          buttonText={t(locale, "personal_project_LD35_buttonText")}
          href={t(locale, "personal_project_LD35_href")}
          githubUrl={t(locale, "personal_project_LD35_githubUrl")}
          languages="Javascript, Jaws Js"
        />
        <Article
          title={t(locale, "personal_project_projet_math_title")}
          subtitle={t(locale, "personal_project_projet_math_subtitle")}
          content={t(locale, "personal_project_projet_math_content")}
          buttonText={t(locale, "personal_project_projet_math_buttonText")}
          href={t(locale, "personal_project_projet_math_href")}
          githubUrl={t(locale, "personal_project_projet_math_githubUrl")}
          languages="C++, SFML, Thor"
        />
        <Article
          title={t(locale, "personal_project_node_race_title")}
          subtitle={t(locale, "personal_project_node_race_subtitle")}
          content={t(locale, "personal_project_node_race_content")}
          buttonText={t(locale, "personal_project_node_race_buttonText")}
          href={t(locale, "personal_project_node_race_href")}
          githubUrl={t(locale, "personal_project_node_race_githubUrl")}
          languages="Javascript, NodeJs, Jaws Js"
        />
      </ArticlesContainer>
    );
  }
}

export default PersonalProjects;