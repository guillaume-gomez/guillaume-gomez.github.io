import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './App.css';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Guillaume Gomez</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">{t("header.cv")}</Nav.Link>
          <NavDropdown title={t('header.work')} id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/2.1">{t("header.personnal-projects")}</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">{t("header.contribution")}</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.3">{t("header.student-projects")}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#memes">
            <FontAwesomeIcon icon={faLinkedin} />
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <FontAwesomeIcon icon={faGithub} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default App;
