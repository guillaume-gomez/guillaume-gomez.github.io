import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { LINKEDIN, GITHUB } from "../constants";

import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header-name">
        <p>Guillaume Gomez</p>
      </div>
      <div className="header-links">
        <a href={LINKEDIN}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href={GITHUB}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Header;
