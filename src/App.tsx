import React, { useRef } from 'react';
import { isBrowser } from 'react-device-detect';

import AboutMe from "./views/AboutMe";
import Hobbies from "./views/Hobbies";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import WelcomePage from "./views/WelcomePage";
import WelcomePageInfos from "./views/WelcomePageInfos";
import Education from "./views/Education";
import Footer from "./views/Footer";

import SmoothScroll from "./components/animations/smoothScroll/SmoothScroll";

import './App.css';

function App() {
  const toProject = useRef<HTMLSpanElement>(null);
  const toHomepage = useRef<HTMLSpanElement>(null);
  const toAboutMe = useRef<HTMLSpanElement>(null);
  const toTexts = useRef<HTMLSpanElement>(null);

  function renderCommon() {
    return (
      <div className="App">
        <div className="App-container">
          {/*}<img src={`${process.env.PUBLIC_URL}/stripes.svg`} className="stripes" /> */}
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
            <Experience />
            <Education />
            <span ref={toAboutMe} style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
              <AboutMe />
              <Hobbies />
            </span>
            <Skills />
          </div>
        </div>
        <Footer refTarget={toHomepage}/>
      </div>
    );
  }

  /*if(isBrowser) {
    return (
      <SmoothScroll>
        {renderCommon()}
      </SmoothScroll>
    );
  }*/

  return renderCommon();
}

export default App;
