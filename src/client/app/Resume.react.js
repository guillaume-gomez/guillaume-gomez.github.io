import React from 'react';

class Resume extends React.Component {

  constructor(props){
    super(props);
  }
  
  render () {
    return (
      <div className="w3-indigo w3-container">
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
                <td>08/15 - 01/17</td>
                <td>Back-end ingineer at <a href="http://applidget.com"> Applidget </a></td>
                <td>Paris, France</td>
              </tr>
              <tr>
                <td>02/15 - 07/15</td>
                <td>3D software programmer internship at <a href="https://masa-group.biz/"> Masa Group</a></td>
                <td>Paris, France</td>
              </tr>
              <tr className="w3-white">
                <td>09/13 - 02/14</td>
                <td>Software programmer internship at <a href="http://www.multiposting.fr/fr/"> Multiposting</a></td>
                <td>Paris, France</td>
              </tr>
              <tr>
                <td>2012 - 2015</td>
                <td>Master's Degree in Computer Engineering</td>
                <td>Université de Compiègne, France</td>
              </tr>
              <tr className="w3-white">
                <td>2010 - 2012</td>
                <td>2-year engineering diploma in Computer Science</td>
                <td>UIT D'Arles, France</td>
              </tr>
              <tr className="w3-hide-medium">
                <td>2007 - 2010</td>
                <td>French Baccalauréat</td>
                <td>Avignon, France</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;