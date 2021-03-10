import React from 'react';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faRunning, faMusic, faFilm } from '@fortawesome/free-solid-svg-icons';

import "./Hobbies.css";

function Leissure() {
  const { t } = useTranslation();
  return (
    <section className="hobbies-content">
      <h2 className="hobbies-title">{t("hobbies.hobbies")}</h2>
      <ul className="hobbies-icons">
        <li>
          <FontAwesomeIcon icon={faRunning} size="lg" />
          <p>{t("hobbies.sports")}</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faMusic} size="lg"/>
          <p>{t("hobbies.music")}</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faFilm} size="lg"/>
          <p>{t("hobbies.cinema")}</p>
        </li>
       </ul>
    </section>
  );
}

export default Leissure;