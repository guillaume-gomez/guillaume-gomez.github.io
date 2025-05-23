import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from "./components/Header";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

function App() {
  const container = useRef();
  const tl = useRef();


useGSAP(
    () => {
        gsap.context(() => {
          const secondState = Flip.getState(".second .marker");
          const thirdState = Flip.getState(".third .marker");
          const fourthState = Flip.getState(".fourth .marker")
          const flipConfig = {
            ease: "none",
            duration: 4
          };

          tl.current = gsap.timeline({
            scrollTrigger: {
              trigger: ".container.initial",
              start: "clamp(top center)",
              endTrigger: ".final",
              end: "clamp(top center)",
              scrub: 1,
              markers: true
            }
          });

          tl.current
          .add(
            Flip.fit(".box", secondState, flipConfig)
          ).add(
            Flip.fit(".box", thirdState, flipConfig),
            "+=0.5"
          ).add(
            Flip.fit(".box", fourthState, flipConfig)
          );
        });
    },
    { scope: container  }
  );

  return (
    <div className="h-screen bg-base-100">
      <div className="relative top-6">
        <Header />
      </div>
      <div className="flex flex-row h-screen">
        <div className="w-1/2 flex flex-col items-center justify-center gap-5">
            <div>
              <p className="text-secondary text-xl">Hello, I'm</p>
              <p className="text-9xl bold font-display">Guillaume</p>
              <p className="text-9xl bold font-display">Gomez</p>
              <p className="text-2xl">A Full Stack Web developper</p>
              <div className="flex flex-col gap-3 w-70">
                <button className="btn btn-primary">My Resume</button>
                <div className="flex flex-row gap-3 w-full">
                    <button className="btn btn-accent">Contact me</button>
                    <button className="btn grow">tot</button>
                    <button className="btn grow">tot</button>
                </div>
              </div>
            </div>
        </div>
         <div className="w-1/2 bg-accent">
            <canvas width={600} height={400} style={{backgroud: "black"}}/>
          </div>
      </div>

      <div ref={container} className="main">
        <div className="container initial">
          <div className="box gradient-blue">toto</div>
        </div>
        <div className="container second">
          <div className="marker"></div>
        </div>
        <div className="container third">
          <div className="marker"></div>
        </div>
        <div className="container fourth">
          <div className="marker"></div>
        </div>
      </div>
      <div className="spacer final"></div>

    </div>
  )
}

export default App
