import ThreeJsArtwork from "./ThreeJsArtwork";
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/all";

function Presentation(){
  const [hideSquare, setHideSquare] = useState<boolean>(false);

  useGSAP(() => {
    const greetingSplit = new SplitText(".name-gsap", {type: "chars, words"});
    //greetingSplit.chars.forEach(char => char.classList.add("text-gradient"));

    const roleSplit = new SplitText(".role-gsap", {type: "words"});

    gsap.from(greetingSplit.chars,
      {
        y: -60,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.10,
      }
    );

    gsap.from(roleSplit.words,
      {
        opacity: 0,
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.05,
        delay: 2.0,
      }
    );

    gsap.from(".buttons-gsap", 
      {
        opacity: 0,
        y: -100,
        duration: 0.5,
        ease: 'sin.inOut',
        delay: 3,
        stagger: 0.5,
      }
    );

    gsap.from(".treejs-gsap", 
      {
        opacity: 0,
        y: -400,
        duration: 0.5,
        ease: "slow(0.1,0.9,false)",
        delay: 3,
      }
    )

  }, [])

  return (
    <div className="flex flex-row h-screen">
        <div className="w-1/2 flex flex-col items-center justify-center gap-5" /*style={{border: "2px solid blue"}}*/>
            <div className="flex flex-col gap-8" /*style={{border: "2px solid red"}}*/>
              <div className="greeting-gsap">
                <p className="text-secondary text-xl" /*style={{border: "2px solid green"}}*/>Hello, I'm</p>
                <p className="name-gsap text-9xl bold font-display" /*style={{border: "2px solid orange"}}*/>Guillaume</p>
                <p className="name-gsap text-9xl bold font-display -my-7" /*style={{border: "2px solid brown"}}*/>Gomez</p>
              </div>
              <div className="role-gsap">
                <p className="text-2xl" /*style={{border: "2px solid olive"}}*/>A Full Stack Web developper,</p>
                <p className="text-2xl linear-wipe" /*style={{border: "2px solid grey"}}*/>doing creative things</p>
              </div>
              <div className="buttons-gsap flex flex-col gap-3 w-70" /*style={{border: "2px solid purple"}}*/>
                <button className="btn btn-primary">My Resume</button>
                <div className="flex flex-row gap-3 w-full">
                    <button className="btn btn-accent">Contact me</button>
                    <button className="btn grow">tot</button>
                    <button className="btn grow">tot</button>
                </div>
              </div>
            </div>
        </div>
         <div className="treejs-gsap w-1/2 flex flex-col items-center justify-center gap-5" /*style={{zIndex: 11}}*/>
            <ThreeJsArtwork hideSquare={hideSquare} />
            <div className="p-4 flex flex-row gap-1">
              <label>Hide stuff</label>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={hideSquare}
                onClick={ () => setHideSquare(!hideSquare) }
              />
            </div>
        </div>
      </div>
  )
}

export default Presentation;