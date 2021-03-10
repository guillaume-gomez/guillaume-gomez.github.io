import React from 'react';
import { useTranslation } from 'react-i18next';
import profile from "./profile.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import "./AboutMe.css";

function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="about-me-content">
      <div className="avatar">
        <img className="avatar-img" src={profile} loading="lazy" alt="profile image"/>
        <ul className="icons">
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
         </ul>
      </div>
      <div className="text">
        <h1 className="wave-hand">👋, {t("about-me.i-am")} <strong className="text-primary">Guillaume Gomez</strong></h1>
        <p>{t("about-me.content")}</p>
      </div>
    </section>
  );
}

export default AboutMe;
