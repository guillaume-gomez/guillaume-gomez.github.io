import React, { useRef} from 'react';
import { useTranslation } from 'react-i18next';

import "./WelcomePageInfos.css";
import FadeInWhenVisibleAndMove from "../components/animations/FadeInWhenVisibleAndMove";

import Terminal from "../components/Terminal";
import Window from "../components/Window";
import Trello from "../components/Trello";

function WelcomePageInfos() {
  const { t } = useTranslation();
  const toTexts = useRef<HTMLDivElement>(null);

  return (
    <section className="welcome-page-infos-content">
      <div className="welcome-page-infos-grid-container">
        <div ref={toTexts} className="textFullStack">
            <FadeInWhenVisibleAndMove direction="left">
              <h3 className="welcome-page-title">{t("welcome-page-infos.full-stack")}</h3>
              <p>{t("welcome-page-infos.full-statck-text")}</p>
            </FadeInWhenVisibleAndMove>
        </div>
        <div className="terminal">
          <FadeInWhenVisibleAndMove direction="right">
            <Window backgroundColor="black" minHeight={325}>
              <Terminal />
            </Window>
           </FadeInWhenVisibleAndMove>
        </div>
        <div className="trello">
          <FadeInWhenVisibleAndMove direction="left">
            <Window backgroundColor="none">
              <Trello />
            </Window>
          </FadeInWhenVisibleAndMove>
        </div>
        <div className="textCTO">
          <FadeInWhenVisibleAndMove direction="right">
            <h3 className="welcome-page-title">{t("welcome-page-infos.cto")}</h3>
            <p>{t("welcome-page-infos.cto-text")}</p>
          </FadeInWhenVisibleAndMove>
        </div>
      </div>
    </section>
  );
}

export default WelcomePageInfos;
