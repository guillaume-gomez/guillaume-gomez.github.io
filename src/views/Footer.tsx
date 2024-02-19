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
    <footer className="bg-base-200 flex flex-col items-center justify-center w-full h-28">
      <div className="btn btn-outline btn-primary relative -top-6" onClick={() => refTarget!.current!.scrollIntoView({behavior: "smooth"}) }>
        <motion.div 
          whileHover={{ translateY: -5, transition: { duration: 0.5, repeat: Infinity } }}
        >
          <FontAwesomeIcon icon={faChevronUp} size="2x"/>
        </motion.div>
      </div>
      <div>
        <p className="font-semibold">Guillaume Gomez © 2021-2023 </p>
        <p className="font-italic">{t("footer.design-by")}
          <a className="link px-1" href="http://allanictheo.com/">
            Theo Allanic
          </a>
          and myself
        </p>
      </div>
    </footer>
  );
}

export default Footer;