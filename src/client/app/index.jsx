import React from 'react';
import { Navbar, MenuItem, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import { render } from 'react-dom';

import AboutMe from "./AboutMe.react";

class App extends React.Component {

  constructor(){
    super();
    this.renderNavBar = this.renderNavBar.bind(this);
    this.renderAboutMe = this.renderAboutMe.bind(this);
    this.seeAboutMe = this.seeAboutMe.bind(this);

    this.state = { currentPage: "home" };
  }

  seeAboutMe() {
    this.setState({ currentPage: "aboutMe" });
  }

  renderAboutMe() {
    if(this.state.currentPage == "aboutMe") {
      return (<AboutMe />);
    }
  }

  renderNavBar() {
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
              <NavItem eventKey={1} href="#" onClick={this.seeAboutMe}>
                <span data-translatable> About me // A propos </span>
              </NavItem>
              <NavItem eventKey={2} href="#">Resume</NavItem>
              <NavDropdown eventKey={3} title="My Work" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Student Project</MenuItem>
                <MenuItem eventKey={3.2}>Personnal Project</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Contribution</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.renderAboutMe()}
      </div>
    );
  }

  render () {
    return (this.renderNavBar());
  }
}

render(<App/>, document.getElementById('app'));