import React, { useEffect } from 'react';
import { isBrowser } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactComponent as MacMouse } from "../macintosh-mouse.svg";


import "./WelcomePage.scss";

import AframeScene from "../components/AframeScene";
import Header from "../components/Header";

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
          {isBrowser && <AframeScene />}
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

interface FromUpToDownInterface {
  children: React.ReactNode;
}


function FromUpToDown({ children } : FromUpToDownInterface) {
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
      initial="visible"
      transition={{ duration: 1.0, type: "spring", bounce: 0.25 }}
      variants={{
        visible: { y: -100, scale: 1.5 },
        move: {y: 100, scale: 1.0 }
      }}
    >
      {children}
    </motion.div>
  );
}