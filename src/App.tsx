import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from "./components/Header";
import ThreeJsArtwork from "./components/ThreeJsArtwork";
import MoreAboutMe from "./components/MoreAboutMe";
import GridProject from "./components/GridProject";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

function App() {
  const container = useRef();
  const tl = useRef();
  const [hideSquare, setHideSquare] = useState<boolean>(false);


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
              trigger: ".start.initial",
              start: "clamp(top center)",
              endTrigger: ".final",
              end: "clamp(top center)",
              scrub: 1,
             // markers: true
            }
          });

          tl.current
          .add(
            Flip.fit(".box", secondState, flipConfig),
            "+=2.0"
          ).add(
            Flip.fit(".box", thirdState, flipConfig),
            "+=0.5"
          ).add(
            Flip.fit(".box", fourthState, flipConfig),
            "+=0.5"
          );
        });
    },
    { scope: container  }
  );

  return (
    
    <div className="h-screen bg-base-100 px-2">
      <div className="relative top-6">
        <Header />
      </div>
      <div ref={container} className="main flex flex-row h-screen">
        <div className="w-1/2 flex flex-col items-center justify-center gap-5">
            <div>
              <p className="text-secondary text-xl">Hello, I'm</p>
              <p className="text-9xl bold font-display">Guillaume</p>
              <p className="text-9xl bold font-display">Gomez</p>
              <p className="text-2xl">A Full Stack Web developper,</p>
              <p className="text-2xl linear-wipe ">doing creative things</p>
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
         <div className="w-1/2 flex flex-col items-center justify-center gap-5" style={{zIndex: 11}}>
            <ThreeJsArtwork />
            <div>
              <label>Hide stuff</label>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                value={hideSquare}
                onToggle={ () => setHideSquare(!hideSquare) }
              />
            </div>
        </div>
      </div>

      <div className="container m-auto">
        <GridProject />
        
        <div  className="bg-secondary">
          <div className="w-1/4">
            <MoreAboutMe />
          </div>

          <div className="start initial">
            <div className="box gradient-blue text-black">toto</div>
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

    </div>
  )
}

export default App
