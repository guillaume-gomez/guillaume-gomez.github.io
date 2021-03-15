import React from 'react';
import Header from "./components/Header";
import AboutMe from "./views/AboutMe";
import Hobbies from "./views/Hobbies";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import WelcomePage from "./views/WelcomePage";
import Chat from "./components/Chat";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-container">
         <WelcomePage />
         <Projects />
         <AboutMe />
         <Hobbies />
        <Experience />
        <Skills />
         <Chat />
      </div>
    </div>
  );
}

export default App;
