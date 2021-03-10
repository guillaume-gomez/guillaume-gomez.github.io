import React from 'react';
import { useTranslation } from 'react-i18next';
import profile from "./profile.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import "./AboutMe.css";
import { GITHUB, LINKEDIN, MAIL } from './constants';

function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="about-me-content">
      <div className="avatar">
        <img className="avatar-img" src={profile} loading="lazy" alt="profile image"/>
        <ul className="icons">
          <li>
            <a href={GITHUB}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
              
          </li>
          <li>
            <a href={LINKEDIN}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href={`mailto:${MAIL}`}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
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
