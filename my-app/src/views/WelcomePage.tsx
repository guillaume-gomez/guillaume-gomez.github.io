import React from 'react';
import { useTranslation } from 'react-i18next';

import "./WelcomePage.css";

import Terminal from "../components/Terminal";
import Window from "../components/Window";
import Trello from "../components/Trello";

function WelcomePage() {
  const { t } = useTranslation();
  return (
    <section className="welcome-page-content">
      <div className="welcome-page-top">
        <h1 className="about-me-wave-hand">👋, {t("about-me.i-am")} <strong className="text-primary">Guillaume Gomez</strong></h1>
        <h2> Je suis Developpeur Full Stack </h2>
      </div>
      <div className="welcome-page-windows">
        <Window x={"70%"} y={"60vh"} width={500} height={300} backgroundColor="black">
          <Terminal />
        </Window>
        <Window x={"2%"} y={"70vh%"} width={600} height={400} backgroundColor="black">
          <Trello/>
        </Window>
      </div>
      <div className="welcome-page-bottom">
        en bas
      </div>
    </section>
  );
}

export default WelcomePage;