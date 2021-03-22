import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { withTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { LINKEDIN, GITHUB } from "../constants";

import "./Header.css";

function Header() {
   const { t } = useTranslation();
  function onChangeLanguage(e: any) {
    i18n.changeLanguage(e.target.value)
  }
  return (
    <div className="header-container">
      <div className="header-name">
        <p>Guillaume Gomez</p>
      </div>
      <div className="header-links">
      <select onChange={onChangeLanguage}>
        <option value="fr">{t("header.french")}</option>
        <option value="en">{t("header.english")}</option>
      </select>
      <span className="header-separator"></span>
        <a href={LINKEDIN}>
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href={GITHUB}>
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </div>
  );
}

export default Header;
