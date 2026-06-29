import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import "./Footer.css";

interface FooterInterface {
  refTarget: React.RefObject<HTMLSpanElement>
}

function Footer({refTarget} : FooterInterface) {
  const { t } = useTranslation();

  return (
    <footer className="d-flex flex-col justify-center items-center footer-content pb-8">
      <div className="footer-up" onClick={() => refTarget!.current!.scrollIntoView({behavior: "smooth"}) }>
        <motion.div 
          whileHover={{ translateY: -5, transition: { duration: 0.5, repeat: Infinity } }}
        >
          <FontAwesomeIcon icon={faChevronUp} size="2x"/>
        </motion.div>
      </div>
      <div className="about-website">
        <p>Guillaume Gomez © 2026 </p>
      </div>
    </footer>
  );
}

export default Footer;