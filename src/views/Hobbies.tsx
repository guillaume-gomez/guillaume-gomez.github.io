import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning, faMusic, faFilm, faGamepad } from '@fortawesome/free-solid-svg-icons';

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import "./Hobbies.css";

function Hobbies() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col gap-3 items-center">
      <h4 className="font-bold">{t("hobbies.hobbies")}</h4>
      <ul className="flex flex-row gap-1">
        <li className="badge badge-ghost gap-2 p-4">
          <FlipX>
            <FontAwesomeIcon icon={faRunning} size="lg" />
          </FlipX>
          <p>{t("hobbies.sports")}</p>
        </li>
        <li className="badge badge-ghost gap-2 p-4">
          <FlipX>
            <FontAwesomeIcon icon={faMusic} size="lg"/>
          </FlipX>
          <p>{t("hobbies.music")}</p> 
        </li>
        <li className="badge badge-ghost gap-2 p-4">
          <FlipX>
            <FontAwesomeIcon icon={faGamepad} size="lg"/>
          </FlipX>
          <p>{t("hobbies.video-games")}</p>
        </li>
        <li className="badge badge-ghost gap-2 p-4">
          <FlipX>
            <FontAwesomeIcon icon={faFilm} size="lg"/>
          </FlipX>
          <p>{t("hobbies.cinema")}</p>
        </li>
       </ul>
    </section>
  );
}

export default Hobbies;

interface FlipXInterface {
  children: React.ReactNode;
}

function FlipX({ children } : FlipXInterface) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("move");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1.0, ease: "easeInOut" }}
      variants={{
        hidden: { opacity: 1, scale: 1 },
        move: { opacity: 1, scale: 1, rotateX: [0, 270, 360] }
      }}
    >
      {children}
    </motion.div>
  );
}