import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import FadeInWhenVisibleAndMove from "../components/animations/FadeInWhenVisibleAndMove";
import SectionHeader from "../components/SectionHeader";

import "./AboutMe.css";

import { GITHUB, LINKEDIN, MAIL } from '../constants';

function AboutMe() {
  const { t } = useTranslation();
  return (
    <section className="about-me-content">
      <SectionHeader text={t("about-me.about-me")} />
      <div className="about-me-infos">
        <FadeInWhenVisibleAndMove className="about-me-avatar" direction="left">
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
        </FadeInWhenVisibleAndMove>
        <FadeInWhenVisibleAndMove className="about-me-text" direction="right">
          <p>
           <Trans i18nKey="about-me.content">
             {[<i className="var(--text-primary)"/>]}
           </Trans>
          </p>
        </FadeInWhenVisibleAndMove>
      </div>
    </section>
  );
}

export default AboutMe;
