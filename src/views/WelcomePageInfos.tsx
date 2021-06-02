import React, { useEffect, useState, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ReactComponent as MacMouse } from "../macintosh-mouse.svg";


import "./WelcomePageInfos.css";

import Terminal from "../components/Terminal";
import Window from "../components/Window";
import Trello from "../components/Trello";

function WelcomePageInfos() {
  const { t } = useTranslation();
  const toTexts = useRef<HTMLDivElement>(null);
  const [displayTerminal, setDisplayTerminal] = useState<boolean>(false);
  const [displayTrello, setDisplayTrello] = useState<boolean>(false);
  
  useEffect(() => {
    setTimeout(() => setDisplayTerminal(true) , 2000);
    setTimeout(() => setDisplayTrello(true) , 6000);
  }, []);

  return (
    <section className="welcome-page-infos-content">
      <div className="welcome-page-infos-grid-container">
        <div ref={toTexts} className="textFullStack">
            <h3>Full stack developper</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          
        </div>
        <div className="terminal">
            <Window backgroundColor="black" minHeight={325}>
              <Terminal />
            </Window>
        </div>
        <div className="trello">
            <Window backgroundColor="none">
              <Trello />
            </Window>
          
        </div>
        <div className="textCTO">
            <h3>But a CTO too</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          
        </div>
      </div>
    </section>
  );
}

export default WelcomePageInfos;


interface FadeInWhenVisibleAndMoveInterface {
  children: React.ReactNode;
  direction: "left"| "right";
}


function FadeInWhenVisibleAndMove({ children, direction } : FadeInWhenVisibleAndMoveInterface) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      controls.start("move");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 2.0, type: "spring", bounce: 0.20  }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0, x: direction === "left" ?  "-25vw" : "25vw" },
        move: {x: 0}
      }}
    >
      {children}
    </motion.div>
  );
}