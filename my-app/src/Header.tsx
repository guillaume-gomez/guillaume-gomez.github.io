import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { LINKEDIN, GITHUB } from "./constants";

function Header() {
  const { t } = useTranslation();
  return (   
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Guillaume Gomez</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features">{t("header.skills")}</Nav.Link>
          <Nav.Link href="#features">{t("header.experience")}</Nav.Link>
          <Nav.Link href="#features">{t("header.portfolio")}</Nav.Link>
          <Nav.Link href="#features">{t("header.resume")}</Nav.Link>
          <Nav.Link href="#features">{t("header.contact")}</Nav.Link>
          <span style={{border: "1px solid var(--secondary)", margin: "10px"}}>
          </span>
          <Nav.Link eventKey={2} href={LINKEDIN}>
            <FontAwesomeIcon icon={faLinkedin} />
          </Nav.Link>
          <Nav.Link eventKey={2} href={GITHUB}>
            <FontAwesomeIcon icon={faGithub} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
