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
      <ArticlesContainer locale={locale} title={t(locale, "contribution_title")}>
        <Article
          title={t(locale, "participation_project_camlCompiler_title")}
          subtitle={t(locale, "participation_project_camlCompiler_subtitle")}
          content={t(locale, "participation_project_camlCompiler_content")}
          buttonText={t(locale, "participation_project_camlCompiler_buttonText")}
          href={t(locale, "participation_project_camlCompiler_href")}
          githubUrl={t(locale, "participation_project_camlCompiler_githubUrl")}
          languages="C++, Google Test, Travis ci"
          year={2016}
        />
        <Article
          title={t(locale, "participation_project_LD34_title")}
          subtitle={t(locale, "participation_project_LD34_subtitle")}
          content={t(locale, "participation_project_LD34_content")}
          buttonText={t(locale, "participation_project_LD34_buttonText")}
          href={t(locale, "participation_project_LD34_href")}
          githubUrl={t(locale, "participation_project_LD34_githubUrl")}
          languages="Javascript, Sat Js"
          year={2016}
        />
      </ArticlesContainer>
    );
  }
}

export default Contribution;