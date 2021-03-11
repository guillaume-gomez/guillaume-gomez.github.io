import React from 'react';
import { useTranslation } from 'react-i18next';
import profile from "../profile.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import "./AboutMe.css";
import { GITHUB, LINKEDIN, MAIL } from '../constants';

function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="d-flex flex-column align-self-center flex-xl-row justify-content-xl-center border border-primary" style={{width: 800}}>
      <div className="about-me-avatar d-flex flex-column justify-content-center m-2">
        <img className="about-me-avatar-img border-dark mb-2 rounded" src={profile} loading="lazy" alt="profile image"/>
        <ul className="about-me-icons d-flex w-100 m-0 p-0 justify-content-around">
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
      <div className="text-center">
        <h1>👋, {t("about-me.i-am")} <strong className="text-primary">Guillaume Gomez</strong></h1>
        <p>{t("about-me.content")}</p>
      </div>
    </section>
  );
}

export default AboutMe;
