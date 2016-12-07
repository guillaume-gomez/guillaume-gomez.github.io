import React from 'react';

import { t } from "./Translations";

class AboutMe extends React.Component {

  constructor(props){
    super(props);
  }
  
  render () {
    const { locale } = this.props;
    return (
      <div className="about-me-default-primary-color w3-container">
        <div className="w3-padding-64 w3-center">
          <h1 className="about-me-text-primary-color">{t(locale, "about_me_title")}</h1>
          <img src="res/profile.jpeg" className="w3-margin w3-circle" alt="Person" style={{ width: "15%" }}/>
          <div className="about-me-text-primary-color w3-padding-xxlarge">
            <p>{t(locale, "about_me_content")}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;