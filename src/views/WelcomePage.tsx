import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { ReactComponent as MacMouse } from "../macintosh-mouse.svg";


//import "./WelcomePage.scss";

import Scene from "../components/Scene";
import Header from "../components/Header";
import FromUpToDown from "../components/animations/FromUpToDown";
import ThreeJsRenderer from "../components/ThreeJsRenderer";


interface WelcomePageInterface {
  toAboutMe: React.RefObject<HTMLSpanElement>
  toTexts: React.RefObject<HTMLSpanElement>
}

function WelcomePage({ toAboutMe, toTexts } : WelcomePageInterface) {
  const { t } = useTranslation();
  return (
    <section className="first-gradient flex flex-col items-center justify-between h-screen">
        <div className="flex flex-col justify-between">
        <FromUpToDown>
          <div style={{padding: "2rem"}}>
            <h2 className="md:text-4xl text-3xl">{t("welcome-page.i-am")}</h2>
            <h1>
              <strong className="md:text-8xl text-5xl">
                Guillaume Gomez
              </strong>
            </h1>
          </div>
        </FromUpToDown>
        <div style={{height: "60%", border: "2px solid"}}>
           <ThreeJsRenderer />
        </div>
        <div className="welcome-page-bottom" style={{padding: "2rem", display: "flex", justifyContent: "center"}} onClick={() => toTexts!.current!.scrollIntoView({behavior: "smooth"}) }>
          {/*
          <motion.div whileHover={{ translateY: 5, transition: { duration: 0.5, repeat: Infinity } }}>
            <MacMouse fill="var(--white)" style={{width: "60px"}}/>
          </motion.div>

        */}
        </div>
      </div>
    </section>
  );
}

export default WelcomePage;