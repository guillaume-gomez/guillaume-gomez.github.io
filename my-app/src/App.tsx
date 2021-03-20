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
        {/*<div className="parallax dynamic-parallax bg1">*/}
          <WelcomePage refTarget={toProject}/>
        {/*</div>*/}
        {/*<div className="parallax static-parallax">*/}
       <div className="container-fluid">
        <span ref={toProject} >
             <Projects />
         </span>
        {/*</div>*/}
       
       <AboutMe />
       <Hobbies />
       <Experience />
       <Skills />
       <Chat />
          </div>
      </div>
    </div>
  );
}

export default App;
