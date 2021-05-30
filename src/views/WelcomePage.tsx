import React, { useEffect, useState, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { ReactComponent as MacMouse } from "../macintosh-mouse.svg";


import "./WelcomePage.scss";


import Terminal from "../components/Terminal";
import Window from "../components/Window";
import Trello from "../components/Trello";

function WelcomePage() {
  const { t } = useTranslation();
  const toTexts = useRef<HTMLDivElement>(null);
  const [displayTerminal, setDisplayTerminal] = useState<boolean>(false);
  const [displayTrello, setDisplayTrello] = useState<boolean>(false);
  
  useEffect(() => {
    setTimeout(() => setDisplayTerminal(true) , 2000);
    setTimeout(() => setDisplayTrello(true) , 6000);
  }, []);

  return (
    <section className="welcome-page-content first-gradient">
      <div className="grid-container">
        <div className="title">
          {<div style={{display: "flex", flexDirection: "column", alignItems: "center", border: "2px solid yellow", gap: "1rem", padding: "5rem"}}>
            <h2 style={{display: "flex", alignSelf:"start", border: "2px solid grey"}}>{t("welcome-page.i-am")}</h2>
            <h1 ><strong className="text-primary">Guillaume Gomez</strong></h1>
            <div className="welcome-page-bottom" style={{padding: "5rem"}} onClick={() => toTexts!.current!.scrollIntoView({behavior: "smooth"}) }>
              <motion.div whileHover={{ translateY: 5, transition: { duration: 0.5, repeat: Infinity } }}>
                <MacMouse fill="var(--white)" style={{width: "60px"}}/>
              </motion.div>
            </div>
          </div>}
        </div>
        <div ref={toTexts} className="textFullStack">
          <h3>Full stack developper</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="terminal">
          <Window backgroundColor="black" minHeight={325}>
            <Terminal />
          </Window>
        </div>
        <div className="trello">
          <Window backgroundColor="none">
            <Trello/>
          </Window>
        </div>
        <div className="textCTO">
          <h3>But a CTO too</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </section>
  );
}

export default WelcomePage;