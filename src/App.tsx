import React, { useRef, lazy, Suspense } from 'react';
import { renderToStaticMarkup } from "react-dom/server";
import { isBrowser } from 'react-device-detect';
//import SmoothScroll from "./components/animations/smoothScroll/SmoothScroll";
import WelcomePage from "./views/WelcomePage";
import Footer from "./views/Footer";
import Cursor from "./components/Cursor";
import { ReactComponent as Stripes } from "./stripes.svg";
import './App.css';

// lazy components
const AboutMe = lazy(() => import ("./views/AboutMe"));
const Hobbies = lazy(() => import ("./views/Hobbies"));
const Experience = lazy(() => import ("./views/Experience"));
const Skills = lazy(() => import ("./views/Skills"));
const Projects = lazy(() => import ("./views/Projects"));
const WelcomePageInfos = lazy(() => import ("./views/WelcomePageInfos"));
const Education = lazy(() => import ("./views/Education"));
const renderLoader = () => <p style={{height: "100vh", textAlign: "center"}}>Loading</p>;

function App() {
  const toProject = useRef<HTMLSpanElement>(null);
  const toHomepage = useRef<HTMLSpanElement>(null);
  const toAboutMe = useRef<HTMLSpanElement>(null);
  const toTexts = useRef<HTMLSpanElement>(null);

  const svgString = encodeURIComponent(renderToStaticMarkup(<Stripes />));

  function renderCommon() {
    return (
      <div className="bg-primary">
        { isBrowser && <Cursor /> }
          <div className="App-container">
            <Suspense fallback={renderLoader()}>
            <div className="stripes" style={{backgroundImage: `url('data:image/svg+xml;utf8, ${svgString}')`, display: "block"}} />
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
            </Suspense>
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
