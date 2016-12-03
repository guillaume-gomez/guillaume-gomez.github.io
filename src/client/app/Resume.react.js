import React from 'react';

class Resume extends React.Component {

  constructor(props){
    super(props);
  }
  
  render () {
    return (
      <div className="resume-default-primary-color w3-container">
        <div className="w3-padding-64 w3-center">
          <div className="resume-text-primary-color">
            <h2>
              <span data-translatable> Resume // Curricul vitae </span>
            </h2>
            <p>
              <span data-translatable> A draft from my CV // Travail en cours sur mon CV :) </span>
            </p>
          </div>
          <div className="w3-container w3-responsive">
            <table className="w3-table">
              <tr className="resume-dark-primary-color">
                <th className="resume-text-primary-color">
                  <span data-translatable > Year // Année </span>
                </th>
                <th className="resume-text-primary-color">
                  <span data-translatable> Title // Titre </span>
                </th>
                <th className="resume-text-primary-color">
                  <span data-translatable>Where // Lieu </span>
                </th>
              </tr>
              <tr className="resume-light-primary-color">
                <td className="resume-text-primary-color">08/15 - 01/17</td>
                <td className="resume-text-primary-color">Back-end engineer at <a href="http://applidget.com"> Applidget </a></td>
                <td className="resume-text-primary-color" >Paris, France</td>
              </tr>
              <tr>
                <td className="resume-text-primary-color">02/15 - 07/15</td>
                <td className="resume-text-primary-color">3D software programmer internship at <a href="https://masa-group.biz/"> Masa Group</a></td>
                <td className="resume-text-primary-color">Paris, France</td>
              </tr>
              <tr className="resume-light-primary-color">
                <td className="resume-text-primary-color">09/13 - 02/14</td>
                <td className="resume-text-primary-color">Software programmer internship at <a href="http://www.multiposting.fr/fr/"> Multiposting</a></td>
                <td className="resume-text-primary-color">Paris, France</td>
              </tr>
              <tr>
                <td className="resume-text-primary-color">2012 - 2015</td>
                <td className="resume-text-primary-color">Master's Degree in Computer Engineering</td>
                <td className="resume-text-primary-color">Université de Compiègne, France</td>
              </tr>
              <tr className="resume-light-primary-color">
                <td className="resume-text-primary-color">2010 - 2012</td>
                <td className="resume-text-primary-color">2-year engineering diploma in Computer Science</td>
                <td className="resume-text-primary-color">UIT D'Arles, France</td>
              </tr>
              <tr className="w3-hide-medium">
                <td className="resume-text-primary-color">2007 - 2010</td>
                <td className="resume-text-primary-color">French Baccalauréat</td>
                <td className="resume-text-primary-color">Avignon, France</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;