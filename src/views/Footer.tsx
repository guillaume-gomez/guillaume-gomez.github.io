import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

//import Chat from "../components/Chat";

import "./Footer.css";

interface FooterInterface {
  refTarget: React.RefObject<HTMLSpanElement>
}

function Footer({refTarget} : FooterInterface) {
  const { t } = useTranslation();

  return (
    <footer className="footer-content">
      <div className="footer-up">
        <motion.div 
          whileHover={{ translateY: -5, transition: { duration: 0.5, repeat: Infinity } }}
          onClick={() => refTarget!.current!.scrollIntoView({behavior: "smooth"}) } >
          <FontAwesomeIcon icon={faChevronUp} size="2x"/>
        </motion.div>
      
      </div>
      <div className="about-website">
        <p>Guillaume Gomez © 2021 </p>
        <p className="designed-by">{t("footer.design-by")}<a className="underline-link" href="http://allanictheo.com/">Theo Allanic</a></p>
      </div>
    </footer>
  );
}

export default Footer;