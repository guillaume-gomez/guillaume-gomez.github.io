import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { LINKEDIN, GITHUB } from "../constants";

import "./Header.css";

function Header() {
  const { t } = useTranslation();
  return (
    <div className="header-container">
      <div className="header-name">
        <a href="#home">Guillaume Gomez</a>
      </div>
      <div className="header-links">
        {/*<a href="#features">{t("header.skills")}</a>
        <a href="#features">{t("header.experience")}</a>
        <a href="#features">{t("header.portfolio")}</a>
        <a href="#features">{t("header.resume")}</a>
        <a href="#features">{t("header.contact")}</a>
        <span style={{border: "1px solid var(--black)", margin: "10px"}}>
        </span>*/}
        <a href={LINKEDIN}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={GITHUB}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default Header;
