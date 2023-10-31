'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import Image from 'next/image';

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
  const [iconNumber, setIconNumber] = useState<number>(1);

  function onChangeLanguage(e: any) {
    i18n.changeLanguage(e.target.value)
  }

  useEffect(() => {
    setTimeout(() => {
      setIconNumber(oldNumber => (oldNumber + 1) % 10)
    }, 1000);
  }, [iconNumber]);

  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a href="https://guillaume-gomez.github.io/avatar-generator/">
          <Image
            width={48}
            height={48}
            src={`/icons/${iconNumber}.png`}
            alt="one of my generated icon"
          />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 items-center">
            <li
              className="btn"
              onClick={() => refTarget!.current!.scrollIntoView({behavior: "smooth"})}
            >
              {t("header.about-me")}
            </li>
            <li>
              <select className="select select-bordered w-full max-w-xs" onChange={onChangeLanguage} value={language}>
                <option value="en">{t("header.english")}</option>
                <option value="fr">{t("header.french")}</option>
              </select>
            </li>
             <span className="header-separator"></span>
            <li>
              <a href={LINKEDIN}>
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </li>
            <li>
              <a href={GITHUB}>
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </li>
            <li>
              <a href={language === "fr" ? `${process.env.PUBLIC_URL}/CV_FR.pdf` : `${process.env.PUBLIC_URL}/CV_EN.pdf`}>
                <FontAwesomeIcon icon={faFile} size="lg" />
              </a>
            </li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className="header-container">
      <div className="header-name">
        <a href="https://guillaume-gomez.github.io/avatar-generator/">
          <img
            width="48px"
            className="header-logo"
            src={`${process.env.PUBLIC_URL}/icons/${iconNumber}.png`}
            alt="one of my generated icon"
          />
        </a>
      </div>
      <div className="header-links">
      <button className="about-me-link" onClick={() => refTarget!.current!.scrollIntoView({behavior: "smooth"})}>{t("header.about-me")}</button>
      <select className="custom-select" onChange={onChangeLanguage} value={language}>
        <option className="custom-option" value="en">{t("header.english")}</option>
        <option className="custom-option" value="fr">{t("header.french")}</option>
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
