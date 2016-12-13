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
        <Article />
        <Article />
        <Article />
      </ArticlesContainer>
    );
  }
}

export default PersonalProjects;