import React from 'react';
import { Navbar, MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { render } from 'react-dom';

import AboutMe from "./AboutMe.react";
import Resume from "./Resume.react";
import ArticlesContainer from "./ArticlesContainer.react";

import { t } from "./Translations";

class App extends React.Component {

  constructor(){
    super();
    [
      "renderNavBar",
      "renderAboutMe",
      "renderResume",
      "renderArticlesContainer",
      "seeAboutMe",
      "seeResume",
      "seeArticlesContainer"
    ].forEach(item => {
      this[item] = this[item].bind(this);
    });
    this.state = { currentPage: "home", locale: "fr" };
  }

  seeAboutMe() {
    this.setState({ currentPage: "aboutMe" });
  }

  seeResume() {
    this.setState({ currentPage: "resume" });
  }

  seeArticlesContainer() {
    this.setState({ currentPage: "articleContainer" });
  }

  renderAboutMe() {
    if(this.state.currentPage == "aboutMe") {
      return (<AboutMe locale={this.state.locale} />);
    }
  }

  renderResume() {
    if(this.state.currentPage == "resume") {
      return (<Resume locale={this.state.locale} />);
    } 
  }

  renderArticlesContainer() {
    if(this.state.currentPage == "articleContainer") {
      return (<ArticlesContainer locale={this.state.locale} />);
    }
  }

  renderNavBar() {
    const { locale } = this.state;
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Guillaume Gomez</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} onClick={this.seeAboutMe}>
                {t(locale, "index_about_me")}
              </NavItem>
              <NavItem eventKey={2} onClick={this.seeResume}>{t(locale, "index_resume")}</NavItem>
              <NavDropdown eventKey={3} title={t(locale, "index_work")} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} onClick={this.seeArticlesContainer} >{t(locale, "index_student_project")}</MenuItem>
                <MenuItem eventKey={3.2}>{t(locale, "index_personal_project")}</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>{t(locale, "index_contribution")}</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.renderAboutMe()}
        {this.renderResume()}
        {this.renderArticlesContainer()}
      </div>
    );
  }

  render () {
    return (this.renderNavBar());
  }
}

render(<App/>, document.getElementById('app'));