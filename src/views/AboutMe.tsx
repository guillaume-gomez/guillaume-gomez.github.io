import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Image from 'next/image';

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
    <section className="w-full">
      <SectionHeader text={t("about-me.about-me")} />
      <div className="about-me-infos">
        <FadeInWhenVisibleAndMove direction="left">
          <div className="flex flex-col gap-2 items-center">
            <Image
              width={300}
              height={300}
              className="rounded-xl"
              src={`/profile.jpeg`}
              loading="lazy"
              alt="my face"
            />
            <ul className="flex flex-row justify-between gap-2">
              <li key="GITHUB">
                <a className="btn btn-ghost" href={GITHUB}>
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                  
              </li>
              <li key="LINKEDIN">
                <a className="btn btn-ghost" href={LINKEDIN}>
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </li>
              <li key="MAIL">
                <a className="btn btn-ghost" href={`mailto:${MAIL}`}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              </li>
             </ul>
          </div>
        </FadeInWhenVisibleAndMove>
        <FadeInWhenVisibleAndMove direction="right">
          <p className="text-left" style={{lineHeight: 1.75}}>
           <Trans i18nKey="about-me.content">
             {[<i key="text" className="var(--text-primary)"/>]}
           </Trans>
          </p>
        </FadeInWhenVisibleAndMove>
      </div>
    </section>
  );
}

export default AboutMe;
