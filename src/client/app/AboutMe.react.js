import React from 'react';

class AboutMe extends React.Component {

  constructor(props){
    super(props);
  }
  
  render () {
    return (
      <div className="about-me-default-primary-color w3-container">
        <div className="w3-padding-64 w3-center">
          <h1 className="about-me-text-primary-color" data-translatable>About Me // Super </h1>
          <img src="../../res/profile.jpeg" className="w3-margin w3-circle" alt="Person" style={{ width: "15%" }}/>
          <div className="about-me-text-primary-color w3-padding-xxlarge">
            <p>Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            <p>Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;