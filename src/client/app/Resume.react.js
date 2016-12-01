import React from 'react';

class Resume extends React.Component {

  constructor(props){
    super(props);
  }
  
  render () {
    return (
      <div className="w3-indigo w3-container" style={{ minHeight: 800 }}>
        <div className="w3-padding-64 w3-center">
          <h2>
            <span data-translatable> Resume // Curricul vitae </span>
          </h2>
          <p>
            <span data-translatable> A draft from my CV // Travail en cours sur mon CV :) </span>
          </p>
          <div className="w3-container w3-responsive">
            <table className="w3-table">
              <tr>
                <th>
                  <span data-translatable> Year // Année </span>
                </th>
                <th>
                  <span data-translatable> Title // Titre </span>
                </th>
                <th>
                  <span data-translatable>Where // Lieu </span>
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