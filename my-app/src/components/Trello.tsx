import React from 'react';
import "./Trello.scss";

function Trello() {
  return (
  <div className="trello-ui">
    <nav className="trello-navbar trello-app">App bar</nav>
    <nav className="trello-navbar trello-board">Perso</nav>
    <div className="trello-lists">
      <div className="trello-list">
        <header>A faire</header>
        <ul className="trello-ul">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
        </ul>
        <footer>Add a card...</footer>
      </div>
      <div className="trello-list">
        <header>En cours</header>
        <ul className="trello-ul">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
          <li>
            <img src="holder.js/300x150?auto=yes&bg=#ccc" alt=""/>
            Lorem ipsum dolor sit amet
          </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet metus laoreet, ut condimentum</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis enim sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
        <footer>Add a card...</footer>
      </div>
      <div className="trello-list">
        <header>Fait</header>
        <ul className="trello-ul">
          <li>Just some text</li>
          <li>Just some text</li>
        </ul>
        <footer>Add a card...</footer>
      </div>
    </div>
  </div>);
}

export default Trello;
