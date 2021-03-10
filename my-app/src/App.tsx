import React from 'react';
import Header from "./components/Header";
import AboutMe from "./views/AboutMe";
import Hobbies from "./views/Hobbies";
import Experience from "./views/Experience";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-container">
        <AboutMe/>
        <Hobbies />
        <Experience />
      </div>
    </div>
  );
}

export default App;
