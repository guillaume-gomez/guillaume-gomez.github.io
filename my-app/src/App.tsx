import React from 'react';
import Header from "./components/Header";
import AboutMe from "./views/AboutMe";
import Hobbies from "./views/Hobbies";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import WelcomePage from "./views/WelcomePage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-container">
      <WelcomePage />
       
        {/*<AboutMe/>
        <Hobbies />
        <Experience />
        <Skills />*/}
      </div>
    </div>
  );
}

export default App;
