import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import profile from "../profile.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import "./AboutMe.css";
import { GITHUB, LINKEDIN, MAIL } from '../constants';

function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="about-me-content">
      <div className="about-me-avatar">
        <img className="about-me-avatar-img" src={profile} loading="lazy" alt="profile image"/>
        <ul className="about-me-icons">
          <li>
            <a className="icons" href={GITHUB}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
              
          </li>
          <li>
            <a className="icons" href={LINKEDIN}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a className="icons" href={`mailto:${MAIL}`}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
         </ul>
      </div>
      <div className="about-me-text">
        <p>
         <Trans i18nKey="about-me.content">
           {[<i className="text-primary"/>]}
         </Trans>
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
