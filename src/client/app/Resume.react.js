import React from 'react';

class Resume extends React.Component {

  constructor(props){
    super(props);
  }
  
  render () {
    return (
      <div className="w3-indigo w3-container" style={{ minHeight: 800 }}>
        <div className="w3-padding-64 w3-center">
          <h2 data-translatable>
            <span>Resume</span>
            <span>Curricul vitae</span>
          </h2>
          <p data-translatable>
            <span>A draft from my CV</span>
            <span>travail en cours sur mon CV :)</span>
          </p>
          <div className="w3-container w3-responsive">
            <table className="w3-table">
              <tr>
                <th data-translatable>
                 <span>Year</span>
                 <span>Année</span>
                </th>
                <th data-translatable>
                 <span>Title</span>
                 <span>Titre</span>
                </th>
                <th data-translatable>
                 <span>Where</span>
                 <span>Lieu</span>
                </th>
              </tr>
              <tr className="w3-white">
                <td>2015-2016</td>
                <td>The rest is history..</td>
                <td>Lorem ipsum</td>
              </tr>
              <tr>
                <td>2009-2012</td>
                <td>Started my own company</td>
                <td>My Garage</td>
              </tr>
              <tr className="w3-white">
                <td>2008-2009</td>
                <td>Started working for Lorem</td>
                <td>London, UK</td>
              </tr>
              <tr>
                <td>2005-2008</td>
                <td>Degree in Bachelor of Design</td>
                <td>Harvard, USA</td>
              </tr>
              <tr className="w3-white">
                <td>2002-2005</td>
                <td>Degree in Bachelor of Business</td>
                <td>RMIT University, Melbourne, Australia</td>
              </tr>
              <tr className="w3-hide-medium">
                <td>2002-2005</td>
                <td>Degree in Bachelor of Business</td>
                <td>RMIT University, Melbourne, Australia</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;