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
          locale={locale}
          name="student_project_nf11"
          languages="Java"
          year={2014}
        />
        <Article
          locale={locale}
          name={"student_project_nf29"}
          languages="XSLT"
          year={2014}
        />
        <Article
          locale={locale}
          name={"student_project_nf28"}
          languages="Android, Java"
        />
        <Article
          locale={locale}
          name={"student_project_ia02"}
          languages="Prolog"
          year={2013}
        />
        <Article
          locale={locale}
          name={"student_project_rep_code"}
          languages="C++, Lib jpeg"
          year={2012}
        />
      </ArticlesContainer>
    );
  }
}

export default StudentProjects;