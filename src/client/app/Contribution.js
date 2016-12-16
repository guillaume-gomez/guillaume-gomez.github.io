import React from 'react';

import { t } from "./Translations";
import ArticlesContainer from "./ArticlesContainer.react";
import Article from "./Article.react";

class Contribution extends React.Component {

  constructor(props){
    super(props);
  }

  render () {
    const { locale } = this.props;
    return (
      <ArticlesContainer locale={locale} title={t(locale, "student_project_title")}>
        <Article
          title={t(locale, "personal_project_LD34_title")}
          subtitle={t(locale, "personal_project_LD34_subtitle")}
          content={t(locale, "personal_project_LD34_content")}
          buttonText={t(locale, "personal_project_LD34_buttonText")}
          href={t(locale, "personal_project_LD34_href")}
          githubUrl={t(locale, "personal_project_LD34_githubUrl")}
        />
      </ArticlesContainer>
    );
  }
}

export default Contribution;