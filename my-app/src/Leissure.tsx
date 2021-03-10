import React from 'react';
import { useTranslation } from 'react-i18next';
import profile from "./profile.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import "./Leissure.css";

function Leissure() {
  const { t } = useTranslation();
  return (
    <section className="leissure-content">
      <h2 className="leissure-title">Hobbies</h2>
      <ul className="leissure-icons">
        <li>
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <p>Sports</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          <p>Music</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          <p>Cinema</p>
        </li>
       </ul>
    </section>
  );
}

export default Leissure;