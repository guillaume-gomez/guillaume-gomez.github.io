import React from 'react';

class AboutMe extends React.Component {

  constructor(props){
    super(props);
  }
  
  render () {
    return (
      <div className=" w3-blue-grey w3-container">
        <div className="w3-padding-64 w3-center">
          <h1>About Me</h1>
          <img src="/w3images/avatar3.png" className="w3-margin w3-circle" alt="Person" style={{ width: "50%" }}/>
          <div className="w3-padding-xxlarge">
            <p>Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            <p>Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;