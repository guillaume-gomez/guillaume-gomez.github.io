import React, { useRef } from 'react';
import AboutMe from "./views/AboutMe";
import Hobbies from "./views/Hobbies";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import WelcomePage from "./views/WelcomePage";
import WelcomePageInfos from "./views/WelcomePageInfos";
import Footer from "./views/Footer";

import './App.css';

function App() {
  const toProject = useRef<HTMLSpanElement>(null);
  const toHomepage = useRef<HTMLSpanElement>(null);
  const toAboutMe = useRef<HTMLSpanElement>(null);
  const toTexts = useRef<HTMLSpanElement>(null);
  return (
    <div className="App">
      <div className="App-container">
        <span ref={toHomepage} style={{width: "100%"}}>
          <WelcomePage toAboutMe={toAboutMe} toTexts={toTexts}/>
        </span>
        <div className="container">
          <span ref={toTexts} style={{width: "100%"}}>
            <WelcomePageInfos/>
          </span>
          <span ref={toProject} style={{width: "100%"}} >
           <Projects refTarget={toAboutMe} />
          </span>
          <span ref={toAboutMe} style={{width: "100%"}}>
            <AboutMe />
          </span>
          <Hobbies />
          <Experience />
          <Skills />
        </div>
      </div>
      <Footer refTarget={toHomepage}/>
    </div>
  );
}

export default App;
