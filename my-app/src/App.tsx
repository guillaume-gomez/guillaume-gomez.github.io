import React from 'react';
import Header from "./Header";
import AboutMe from "./AboutMe";
import Leissure from "./Leissure";
import Experience from "./Experience";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-container">
        <AboutMe/>
        <Leissure />
        <Experience />
      </div>
    </div>
  );
}

export default App;
