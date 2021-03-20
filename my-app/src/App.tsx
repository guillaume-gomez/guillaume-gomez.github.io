import React, { useRef } from 'react';
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
  const toProject = useRef<HTMLSpanElement>(null);
  return (
    <div className="App">
      <Header/>
      <div className="App-container">
       {<WelcomePage refTarget={toProject}/>}
       <div className="container">
        <span ref={toProject} style={{width: "100%"}} >
         <Projects />
        </span>
         <AboutMe />
         <Hobbies />
         <Experience />
         <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;
