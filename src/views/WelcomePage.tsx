import React from 'react';
import { isBrowser } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { ReactComponent as MacMouse } from "../macintosh-mouse.svg";


import "./WelcomePage.scss";

import Scene from "../components/Scene";
import Header from "../components/Header";
import FromUpToDown from "../components/animations/FromUpToDown";

interface WelcomePageInterface {
  toAboutMe: React.RefObject<HTMLSpanElement>
  toTexts: React.RefObject<HTMLSpanElement>
}

function WelcomePage({ toAboutMe, toTexts } : WelcomePageInterface) {
  const { t } = useTranslation();
  return (
    <section className="welcome-page-content first-gradient">
        <Header refTarget={toAboutMe}/>
        <div className="welcome-page-text">
        <FromUpToDown>
          <div style={{padding: "2rem"}}>
            <h2>{t("welcome-page.i-am")}</h2>
            <h1>
              <strong className="text-primary">
                Guillaume Gomez
              </strong>
            </h1>
          </div>
        </FromUpToDown>
        <div className="three-js-view">
          {isBrowser && <Scene />}
        </div>
        <div className="welcome-page-bottom" style={{padding: "2rem", display: "flex", justifyContent: "center"}} onClick={() => toTexts!.current!.scrollIntoView({behavior: "smooth"}) }>
          <motion.div whileHover={{ translateY: 5, transition: { duration: 0.5, repeat: Infinity } }}>
            <MacMouse fill="var(--white)" style={{width: "60px"}}/>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WelcomePage;