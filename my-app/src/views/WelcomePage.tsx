import React from 'react';
import { useTranslation } from 'react-i18next';

import "./WelcomePage.scss";

import Terminal from "../components/Terminal";
import Window from "../components/Window";
import Trello from "../components/Trello";

function WelcomePage() {
  const { t } = useTranslation();
  return (
    <section className="welcome-page-content">
      <div className="welcome-page-top">
        <h1 className="about-me-wave-hand">👋, {t("about-me.i-am")} <strong className="text-primary">Guillaume Gomez</strong></h1>
        <h2> Je suis <span className="background--magical">Developpeur Full Stack</span> </h2>
      </div>
      <div className="welcome-page-windows">
        <div className="welcome-page-terminal">
          <Window width={500} height={300} backgroundColor="black">
            <Terminal />
          </Window>
        </div>
        <div className="welcome-page-trello">
          <Window width={600} height={450} backgroundColor="black">
            <Trello/>
          </Window>
        </div>
      </div>
      <div className="welcome-page-bottom">
        en bas
      </div>
    </section>
  );
}

export default WelcomePage;