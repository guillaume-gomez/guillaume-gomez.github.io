import { useRef } from 'react'

import Header from "../components/Header";
import MoreAboutMe from "../components/MoreAboutMe";
import Presentation from "../components/Presentation";
import GridProject from "../components/GridProject";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

function Home() {
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

      <Presentation />

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

export default Home
