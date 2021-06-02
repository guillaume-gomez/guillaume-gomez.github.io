import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import "./AboutMe.css";
import { GITHUB, LINKEDIN, MAIL } from '../constants';

function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="about-me-content">
      <h2 style={{textAlign: "center"}}>{t("about-me.about-me")}</h2>
      <div className="about-me-infos">
        <div className="about-me-avatar">
          <img className="about-me-avatar-img" src={`${process.env.PUBLIC_URL}profile.jpeg`} loading="lazy" alt="my face"/>
          <ul className="about-me-icons">
            <li>
              <a className="icons" href={GITHUB}>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
                
            </li>
            <li>
              <a className="icons" href={LINKEDIN}>
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </li>
            <li>
              <a className="icons" href={`mailto:${MAIL}`}>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </li>
           </ul>
        </div>
        <div className="about-me-text">
          <p>
           <Trans i18nKey="about-me.content">
             {[<i className="var(--text-primary)"/>]}
           </Trans>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
