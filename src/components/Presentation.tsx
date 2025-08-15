import ThreeJsArtwork from "./ThreeJsArtwork";
import { useState, useRef } from 'react';



function Presentation(){
  const [hideSquare, setHideSquare] = useState<boolean>(false);

  return (
    <div className="flex flex-row h-screen">
        <div className="w-1/2 flex flex-col items-center justify-center gap-5" /*style={{border: "2px solid blue"}}*/>
            <div className="flex flex-col gap-8" /*style={{border: "2px solid red"}}*/>
              <div>
                <p className="text-secondary text-xl" /*style={{border: "2px solid green"}}*/>Hello, I'm</p>
                <p className="text-9xl bold font-display" /*style={{border: "2px solid orange"}}*/>Guillaume</p>
                <p className="text-9xl bold font-display -my-8" /*style={{border: "2px solid brown"}}*/>Gomez</p>
              </div>
              <div>
                <p className="text-2xl" /*style={{border: "2px solid olive"}}*/>A Full Stack Web developper,</p>
                <p className="text-2xl linear-wipe" /*style={{border: "2px solid grey"}}*/>doing creative things</p>
              </div>
              <div className="flex flex-col gap-3 w-70" /*style={{border: "2px solid purple"}}*/>
                <button className="btn btn-primary">My Resume</button>
                <div className="flex flex-row gap-3 w-full">
                    <button className="btn btn-accent">Contact me</button>
                    <button className="btn grow">tot</button>
                    <button className="btn grow">tot</button>
                </div>
              </div>
            </div>
        </div>
         <div className="w-1/2 flex flex-col items-center justify-center gap-5" /*style={{zIndex: 11}}*/>
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