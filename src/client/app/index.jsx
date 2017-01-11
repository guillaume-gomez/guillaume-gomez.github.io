import React from 'react';
import { Navbar, MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { render } from 'react-dom';

import AboutMe from "./AboutMe.react";
import Resume from "./Resume.react";
import StudentProjects from "./StudentProjects.react";
import PersonalProjects from "./PersonalProjects.react";
import Contribution from "./Contribution.react";

import { t } from "./Translations";

class App extends React.Component {

  constructor(){
    super();
    [
      "renderNavBar",
      "renderAboutMe",
      "renderResume",
      "renderStudentProjects",
      "renderPersonnalProjects",
      "renderContribution",
      "seeAboutMe",
      "seeResume",
      "seeStudentProjects",
      "seePersonalProjects",
      "seeContribution"
    ].forEach(item => {
      this[item] = this[item].bind(this);
    });
    this.state = { currentPage: "aboutMe", locale: "fr" };
  }

  seeAboutMe() {
    this.setState({ currentPage: "aboutMe" });
  }

  seeResume() {
    this.setState({ currentPage: "resume" });
  }

  seeStudentProjects() {
    this.setState({ currentPage: "studentProjects" });
  }

  seePersonalProjects() {
    this.setState( { currentPage: "personalProjects" });
  }

  seeContribution() {
    this.setState( { currentPage: "contribution" });
  }

  renderAboutMe() {
    if(this.state.currentPage === "aboutMe") {
      return (<AboutMe locale={this.state.locale} />);
    }
  }

  renderResume() {
    if(this.state.currentPage === "resume") {
      return (<Resume locale={this.state.locale} />);
    }
  }

  renderStudentProjects() {
    if(this.state.currentPage === "studentProjects") {
      return (<StudentProjects locale={this.state.locale} />);
    }
  }

  renderPersonnalProjects() {
    if(this.state.currentPage === "personalProjects") {
      return (<PersonalProjects locale={this.state.locale} />);
    }
  }

  renderContribution() {
    if(this.state.currentPage === "contribution") {
      return (<Contribution locale={this.state.locale} />);
    }
  }

  renderNavBar() {
    const { locale } = this.state;
    return (
      <div>
        <Navbar inverse collapseOnSelect className="navbar-static-top">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" onClick={this.seeAboutMe}>Guillaume Gomez</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} onClick={this.seeResume}>{t(locale, "index_resume")}</NavItem>
              <NavDropdown eventKey={2} title={t(locale, "index_work")} id="basic-nav-dropdown">
                <MenuItem eventKey={2.1} onClick={this.seeStudentProjects} >{t(locale, "index_student_project")}</MenuItem>
                <MenuItem eventKey={2.2} onClick={this.seePersonalProjects}>{t(locale, "index_personal_project")}</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.3} onClick={this.seeContribution}>{t(locale, "index_contribution")}</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.renderAboutMe()}
        {this.renderResume()}
        {this.renderStudentProjects()}
        {this.renderPersonnalProjects()}
        {this.renderContribution()}
      </div>
    );
  }

  render () {
    return (this.renderNavBar());
  }
}

render(<App/>, document.getElementById('app'));