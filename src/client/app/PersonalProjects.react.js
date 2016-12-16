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
          title={t(locale, "personal_project_LD35_title")}
          subtitle={t(locale, "personal_project_LD35_subtitle")}
          content={t(locale, "personal_project_LD35_content")}
          buttonText={t(locale, "personal_project_LD35_buttonText")}
          href={t(locale, "personal_project_LD35_href")}
          githubUrl={t(locale, "personal_project_LD35_githubUrl")}
        />
        <Article
          title={t(locale, "personal_project_LD36_title")}
          subtitle={t(locale, "personal_project_LD36_subtitle")}
          content={t(locale, "personal_project_LD36_content")}
          buttonText={t(locale, "personal_project_LD36_buttonText")}
          href={t(locale, "personal_project_LD36_href")}
          githubUrl={t(locale, "personal_project_LD36_githubUrl")}
        />
        <Article
          title={t(locale, "personal_project_LD37_title")}
          subtitle={t(locale, "personal_project_LD37_subtitle")}
          content={t(locale, "personal_project_LD37_content")}
          buttonText={t(locale, "personal_project_LD37_buttonText")}
          href={t(locale, "personal_project_LD37_href")}
          githubUrl={t(locale, "personal_project_LD37_githubUrl")}
        />
      </ArticlesContainer>
    );
  }
}

export default PersonalProjects;