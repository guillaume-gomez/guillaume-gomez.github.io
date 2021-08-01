import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import { LINKEDIN, GITHUB } from "../constants";

import "./Header.css";

interface HeaderInterface {
  refTarget: React.RefObject<HTMLSpanElement>
}


function Header({refTarget} : HeaderInterface) {
   const { t, i18n: {language} } = useTranslation();
  function onChangeLanguage(e: any) {
    i18n.changeLanguage(e.target.value)
  }
  return (
    <div className="header-container">
      <div className="header-name">
        <p>Guillaume Gomez</p>
      </div>
      <div className="header-links">
      <a className="about-me-link" onClick={() => refTarget!.current!.scrollIntoView({behavior: "smooth"})}>{t("header.about-me")}</a>
      <select className="custom-select" onChange={onChangeLanguage}>
        <option className="custom-option" value="fr">{t("header.french")}</option>
        <option className="custom-option" value="en">{t("header.english")}</option>
      </select>
      <span className="header-separator"></span>
        <a href={LINKEDIN}>
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href={GITHUB}>
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
         <a href={language === "fr" ? `${process.env.PUBLIC_URL}/CV_FR.pdf` : `${process.env.PUBLIC_URL}/CV_EN.pdf`}>
          <FontAwesomeIcon icon={faFile} size="lg" />
        </a>
      </div>
    </div>
  );
}

export default Header;
