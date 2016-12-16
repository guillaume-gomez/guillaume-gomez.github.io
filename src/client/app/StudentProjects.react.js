import React from 'react';

import { t } from "./Translations";
import ArticlesContainer from "./ArticlesContainer.react";
import Article from "./Article.react";

class StudentProjects extends React.Component {

  constructor(props){
    super(props);
  }

  render () {
    const { locale } = this.props;
    return (
      <ArticlesContainer locale={locale} title={t(locale, "student_project_title")}>
        <Article
          title={t(locale, "student_project_nf11_title")}
          subtitle={t(locale, "student_project_nf11_subtitle")}
          content={t(locale, "student_project_nf11_content")}
          buttonText={t(locale, "student_project_nf11_buttonText")}
          href={t(locale, "student_project_nf11_href")}
          githubUrl={t(locale, "student_project_nf11_githubUrl")}
        />
        <Article
          title={t(locale, "student_project_nf29_title")}
          subtitle={t(locale, "student_project_nf29_subtitle")}
          content={t(locale, "student_project_nf29_content")}
          buttonText={t(locale, "student_project_nf29_buttonText")}
          href={t(locale, "student_project_nf29_href")}
          githubUrl={t(locale, "student_project_nf29_githubUrl")}
        />
        <Article
          title={t(locale, "student_project_rep_code_title")}
          subtitle={t(locale, "student_project_rep_code_subtitle")}
          content={t(locale, "student_project_rep_code_content")}
          buttonText={t(locale, "student_project_rep_code_buttonText")}
          href={t(locale, "student_project_rep_code_href")}
          githubUrl={t(locale, "student_project_rep_code_githubUrl")}
        />
      </ArticlesContainer>
    );
  }
}

export default StudentProjects;