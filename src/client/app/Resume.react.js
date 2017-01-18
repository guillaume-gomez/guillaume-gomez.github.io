import React from 'react';

import { t } from "./Translations";

const Path = "res/";
const StarSize = 24;

class Resume extends React.Component {

  constructor(props){
    super(props);
  }

  renderDownloadResume() {
    const { locale } = this.props;

    const href = () => { 
      window.location = `${Path}CV_${locale.toUpperCase()}.pdf`;
    };

    return(
    <button className="btn btn-secondary btn-sm resume-accent-color my-resume-button" role="button" onClick={href}>
      <span className="resume-text-primary-color">{ t(locale, "resume_download_resume") +" "}</span>
      <img style={{ marginTop: -6 }} src={Path + "attachment.svg"} />
    </button>
    );
  }
  
  render () {
    const { locale } = this.props;
    return (
      <div className="resume-default-primary-color w3-container">
        <div className="row">
          {this.renderDownloadResume()}
        </div>
        <div className="w3-padding-64 w3-center">
          <div className="resume-text-primary-color">
            <h2>{t(locale, "resume_title")}</h2>
            <p>
              {t(locale, "resume_sub_title")}
            </p>
          </div>
          <div className="w3-container w3-responsive">
            <table className="w3-table">
              <tr className="resume-dark-primary-color">
                <th className="resume-text-primary-color">
                  {t(locale, "resume_array_year")}
                </th>
                <th className="resume-text-primary-color">
                  {t(locale, "resume_array_title")}
                </th>
                <th className="resume-text-primary-color">
                  {t(locale, "resume_array_location")}
                </th>
              </tr>
              <tr className="resume-light-primary-color">
                <td className="resume-text-primary-color">08/15 - 01/17</td>
                <td className="resume-text-primary-color">{t(locale, "resume_applidget")} {t(locale, "at")} <a href="http://applidget.com"> Applidget </a></td>
                <td className="resume-text-primary-color">Paris, France</td>
              </tr>
              <tr>
                <td className="resume-text-primary-color">02/15 - 07/15</td>
                <td className="resume-text-primary-color">{t(locale, "resume_masa")} {t(locale, "at")} <a href="https://masa-group.biz/"> Masa Group </a></td>
                <td className="resume-text-primary-color">Paris, France</td>
              </tr>
              <tr className="resume-light-primary-color">
                <td className="resume-text-primary-color">09/13 - 02/14</td>
                <td className="resume-text-primary-color">{t(locale, "resume_multiposting")} {t(locale, "at")} <a href="http://www.multiposting.fr/fr/"> Multiposting</a></td>
                <td className="resume-text-primary-color">Paris, France</td>
              </tr>
              <tr>
                <td className="resume-text-primary-color">2012 - 2015</td>
                <td className="resume-text-primary-color">{t(locale, "resume_utc")}</td>
                <td className="resume-text-primary-color">Université de Compiègne, France</td>
              </tr>
              <tr className="resume-light-primary-color">
                <td className="resume-text-primary-color">2010 - 2012</td>
                <td className="resume-text-primary-color">{t(locale, "resume_iut")}</td>
                <td className="resume-text-primary-color">UIT D'Arles, France</td>
              </tr>
              <tr className="w3-hide-medium">
                <td className="resume-text-primary-color">2007 - 2010</td>
                <td className="resume-text-primary-color">{t(locale, "resume_bac")}</td>
                <td className="resume-text-primary-color">Avignon, France</td>
              </tr>
            </table>
          </div>
          <div className="w3-padding-8 w3-center">
            <div className="resume-text-primary-color row">
              <h4>
                {t(locale, "resume_programming")}
              </h4>
                <div className="container w3-responsive">
                <table className="w3-table col-md-6">
                  <tr className="resume-light-primary-color">
                    <td className="resume-text-primary-color">C++</td>
                    <td>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_empty.svg"} height={StarSize}/>
                    </td>
                  </tr>
                  <tr>
                    <td className="resume-text-primary-color">Javascript/ ES6</td>
                    <td>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_empty.svg"} height={StarSize}/>
                    </td>
                  </tr>
                  <tr className="resume-light-primary-color">
                    <td className="resume-text-primary-color">Ruby</td>
                    <td>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_half.svg"} height={StarSize}/>
                      <img src={Path + "star_empty.svg"} height={StarSize}/>
                    </td>
                  </tr>
                  <tr>
                    <td className="resume-text-primary-color">Java</td>
                    <td>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_half.svg"} height={StarSize}/>
                      <img src={Path + "star_empty.svg"} height={StarSize}/>
                    </td>
                  </tr>
                  <tr className="resume-light-primary-color">
                    <td className="resume-text-primary-color">Golang</td>
                    <td>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_half.svg"} height={StarSize}/>
                      <img src={Path + "star_empty.svg"} height={StarSize}/>
                    </td>
                  </tr>
                  <tr>
                    <td className="resume-text-primary-color">Rust</td>
                    <td>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_half.svg"} height={StarSize}/>
                      <img src={Path + "star_empty.svg"} height={StarSize}/>
                      <img src={Path + "star_empty.svg"} height={StarSize}/>
                    </td>
                  </tr>
                   <tr className="resume-light-primary-color">
                    <td className="resume-text-primary-color">HTML5/Css3</td>
                    <td>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_empty.svg"} height={StarSize}/>
                      <img src={Path + "star_empty.svg"} height={StarSize}/>
                    </td>
                  </tr>
                  <tr>
                    <td className="resume-text-primary-color">PHP</td>
                    <td>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_fill.svg"} height={StarSize}/>
                      <img src={Path + "star_half.svg"} height={StarSize}/>
                      <img src={Path + "star_empty.svg"} height={StarSize}/>
                      <img src={Path + "star_empty.svg"} height={StarSize}/>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;