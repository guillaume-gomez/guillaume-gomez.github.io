import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
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
      <div className="grid-container">
        <div className="Title" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem"}}>
            <h2 className="title-relative" style={{display: "flex", alignSelf:"start"}}>{t("welcome-page.i-am")}</h2>
            <h1 className="title-relative"><strong className="text-primary">Guillaume Gomez</strong></h1>
            <div className="welcome-page-bottom" style={{padding: "5rem"}} onClick={() => refTarget!.current!.scrollIntoView({behavior: "smooth"}) }>
              <motion.div whileHover={{ translateY: 5, transition: { duration: 0.5, repeat: Infinity } }}>
                <MacMouse fill="var(--white)" style={{width: "60px"}}/>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="TextFullStack" style={{gridColumnStart: 2, gridColumnEnd: 7, display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <h3>Full stack developper</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="terminal" style={{ gridColumnStart: 8, gridColumnEnd: 12,  display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Window width={600} height={300} backgroundColor="black">
            <Terminal />
          </Window>
        </div>
        <div className="trello" style={{ gridColumnStart: 2, gridColumnEnd: 7}}>
          <Window width={800} height={450} backgroundColor="black">
            <Trello/>
          </Window>
        </div>
        <div className="textCTO" style={{gridColumnStart: 8, gridColumnEnd: 12, display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <h3>But a CTO too</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </section>
  );
}

export default WelcomePage;