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
          locale={locale}
          name="personal_project_LD41"
          languages="C#, Unity"
          year={2018}
        />

        <Article
          locale={locale}
          name="personal_project_music_mooc"
          languages="Javascript, Es6"
          year={2017}
        />

        <Article
          locale={locale}
          name="personal_project_rust_tilt_shift"
          languages="Rust, Cargo, Clap"
          year={2017}
        />

        <Article
          locale={locale}
          name="personal_project_phaser_sandbox"
          languages="Javascript ES6, Phaser"
          year={2017}
        />
         <Article
          locale={locale}
          name={"personal_project_LD38"}
          languages="Javascript ES6, Phaser"
          year={2017}
        />
        <Article
          locale={locale}
          name="personal_project_LD37"
          languages="Javascript ES6, Phaser"
          year={2017}
        />
        <Article
          locale={locale}
          name="personal_project_LD36"
          languages="Javascript ES6, Phaser"
          year={2017}
        />
        <Article
          locale={locale}
          name="personal_project_path_tracer"
          languages="Golang"
          year={2017}
        />
        <Article
          locale={locale}
          name="personal_project_LD35"
          languages="Javascript, Jaws Js"
          year={2016}
        />
        <Article
          locale={locale}
          name={"personal_project_langton"}
          languages="Javascript, Phaser Js"
          year={2016}
        />
        <Article
          locale={locale}
          name="personal_project_projet_math"
          languages="C++, SFML, Thor"
          year={2012}
        />
        <Article
          locale={locale}
          name="personal_project_node_race"
          languages="Javascript, NodeJs, Jaws Js"
          year={2013}
        />
      </ArticlesContainer>
    );
  }
}

export default PersonalProjects;