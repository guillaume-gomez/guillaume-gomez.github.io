import React, { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { ReactComponent as MacMouse } from "../macintosh-mouse.svg";


import "./WelcomePage.scss";


import Terminal from "../components/Terminal";
import Window from "../components/Window";
import Trello from "../components/Trello";

interface WelcomePageInterface {
  refTarget: React.RefObject<HTMLSpanElement>
}

function WelcomePage({refTarget} : WelcomePageInterface) {
  const { t } = useTranslation();
  const [displayTerminal, setDisplayTerminal] = useState<boolean>(false);
  const [displayTrello, setDisplayTrello] = useState<boolean>(false);
  
  useEffect(() => {
    setTimeout(() => setDisplayTerminal(true) , 2000);
    setTimeout(() => setDisplayTrello(true) , 6000);
  }, []);

  return (
    <section className="welcome-page-content first-gradient">
      <div className="welcome-page-top">
        <h1 className="title-relative"> <span className="about-me-wave-hand">👋</span><strong className="text-primary">Guillaume Gomez</strong></h1>
        <h2 className="title-relative"> <span className="background--magical">Developpeur Full Stack</span> </h2>
      </div>
      <div className="welcome-page-windows">
        <div className="welcome-page-trello">
          {
            displayTrello && 
            <Window width={600} height={450} backgroundColor="black">
              <Trello/>
            </Window>
          }
        </div>
        <div className="welcome-page-terminal">
          {
            displayTerminal && 
            <Window width={600} height={300} backgroundColor="black">
              <Terminal />
            </Window>
          }
        </div>
      </div>
      <div className="welcome-page-bottom" onClick={() => refTarget!.current!.scrollIntoView({behavior: "smooth"}) }>
        <motion.div whileHover={{ translateY: 5, transition: { duration: 0.5, repeat: Infinity } }}>
          <MacMouse fill="var(--white)" style={{width: "45px"}}/>
        </motion.div>
      </div>
    </section>
  );
}

export default WelcomePage;