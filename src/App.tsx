import React, { useRef } from 'react';
import Header from "./components/Header";
import AboutMe from "./views/AboutMe";
import Hobbies from "./views/Hobbies";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import WelcomePage from "./views/WelcomePage";
import Footer from "./views/Footer";

import './App.css';

function App() {
  const toProject = useRef<HTMLSpanElement>(null);
  const toHomepage = useRef<HTMLSpanElement>(null);
  const toAboutMe = useRef<HTMLSpanElement>(null);
  return (
    <div className="App">
      <Header/>
      <div className="App-container">
       <span ref={toHomepage} style={{width: "100%"}}>
         <WelcomePage refTarget={toProject}/>
       </span>
       <div className="container">
        <span ref={toProject} style={{width: "100%"}} >
         <Projects refTarget={toAboutMe} />
        </span>
        <span ref={toAboutMe} style={{display: "flex", justifyContent: "center"}}>
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
