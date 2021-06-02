import React, { useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import "./WelcomePageInfos.css";

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
            <h3>{t("welcome-page-infos.full-stack")}</h3>
            <p>{t("welcome-page-infos.full-statck-text")}</p>
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
            <h3>{t("welcome-page-infos.cto")}</h3>
            <p>{t("welcome-page-infos.cto-text")}</p>
          
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
      transition={{ duration: 2.0, type: "spring", bounce: 0.20 }}
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