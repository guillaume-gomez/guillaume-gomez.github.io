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
          locale={locale}
          name="participation_project_camlCompiler"
          languages="C++, Google Test, Travis ci"
          year={2016}
        />
        <Article
          locale={locale}
          name="participation_project_LD34"
          languages="Javascript, Sat Js"
          year={2016}
        />
      </ArticlesContainer>
    );
  }
}

export default Contribution;