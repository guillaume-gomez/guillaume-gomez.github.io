import React from 'react';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faRunning, faMusic, faFilm, faGamepad } from '@fortawesome/free-solid-svg-icons';

import "./Hobbies.css";

function Hobbies() {
  const { t } = useTranslation();
  return (
    <section className="hobbies-content content">
      <h4 className="hobbies-title">{t("hobbies.hobbies")}</h4>
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
          <FontAwesomeIcon icon={faGamepad} size="lg"/>
          <p>{t("hobbies.video-games")}</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faFilm} size="lg"/>
          <p>{t("hobbies.cinema")}</p>
        </li>
       </ul>
    </section>
  );
}

export default Hobbies;