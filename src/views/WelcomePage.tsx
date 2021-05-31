import React, { useEffect, useState, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { ReactComponent as MacMouse } from "../macintosh-mouse.svg";

import "./WelcomePage.scss";

import Terminal from "../components/Terminal";
import Window from "../components/Window";
import Trello from "../components/Trello";
import Header from "../components/Header";

interface WelcomePageInterface {
  toAboutMe: React.RefObject<HTMLSpanElement>
  toTexts: React.RefObject<HTMLSpanElement>
}

function WelcomePage({ toAboutMe, toTexts } : WelcomePageInterface) {
  const { t } = useTranslation();
  const [displayTerminal, setDisplayTerminal] = useState<boolean>(false);
  const [displayTrello, setDisplayTrello] = useState<boolean>(false);
  
  useEffect(() => {
    setTimeout(() => setDisplayTerminal(true) , 2000);
    setTimeout(() => setDisplayTrello(true) , 6000);
  }, []);

  return (
    <section className="welcome-page-content first-gradient">
      <Header refTarget={toAboutMe}/>
      <div className="welcome-page-text">
        <div style={{padding: "2rem"}}>
          <h2>{t("welcome-page.i-am")}</h2>
          <h1>
            <strong className="text-primary">
              Guillaume Gomez
            </strong>
          </h1>
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