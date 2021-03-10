import React from 'react';
import { useTranslation } from 'react-i18next';
import profile from "./profile.jpeg";

import "./AboutMe.css";

function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className="about-me-content">
      <div id="blue" className="avatar-content">
        <img className="avatar" src={profile} alt="profile image"/>
      </div>
      <div id="red">
        <h1>👋, {t("about-me.i-am")} <strong className="text-primary">Guillaume Gomez</strong></h1>
        <p>{t("about-me.content")}</p>
      </div>
    </div>
  );
}

export default AboutMe;
