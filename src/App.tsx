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
        <div className="container">
          <span ref={toHomepage}>
            <WelcomePage toAboutMe={toAboutMe} toTexts={toTexts}/>
          </span>
          <span ref={toTexts}>
            <WelcomePageInfos/>
          </span>
          <span ref={toProject}>
           <Projects refTarget={toAboutMe} />
          </span>
          <span ref={toAboutMe} style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <AboutMe />
            <Hobbies />
          </span>
          <Experience />
          <Skills />
        </div>
      </div>
      <Footer refTarget={toHomepage}/>
    </div>
  );
}

export default App;
