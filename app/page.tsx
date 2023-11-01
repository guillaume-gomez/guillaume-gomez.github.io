"use client"

import { useRef } from "react";
import Header from "/src/components/Header";
import WelcomePage from "/src/views/WelcomePage";
import WelcomePageInfos from "/src/views/WelcomePageInfos";
import Experience from "/src/views/Experience";
import Education from "/src/views/Education";
import AboutMe from "/src/views/AboutMe";
import Hobbies from "/src/views/Hobbies";
import Footer from "/src/views/Footer";
import Projects from "/src/views/Projects";

export default function Page() {
  const toProject = useRef<HTMLSpanElement>(null);
  const toHomepage = useRef<HTMLSpanElement>(null);
  const toAboutMe = useRef<HTMLSpanElement>(null);
  const toTexts = useRef<HTMLSpanElement>(null);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="container">
        <Header/>
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
      </div>
      <Footer refTarget={toHomepage}/>

    </div>);
}