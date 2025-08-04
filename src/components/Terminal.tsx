import React from 'react';
import Typewriter from 'typewriter-effect';

const data = [
  "ruby",
  "ruby on rails",
  "typescript",
  "react",
  "rust",
  "c++",
  "c#",
  "unity",
  "elixir"
]

function Terminal() {
  return (
    <div style={{padding: "5px 10px", color: "#1FC110", fontFamily: "Inconsolata", fontSize: "1.25rem"}}>
      { data.map((d, index) => (
        <div key={d} >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .start()
              .callFunction((state) => {
                state.elements.cursor.style.display = 'none';
              })
              .pauseFor(5100 * (index))
              .callFunction((state) => {
                state.elements.cursor.style.display = '';
              })
              .typeString('>')
              .pauseFor(1000)
              .changeDelay(25)
              .typeString(` apt-get install `)
              .changeDelay(200)
              .typeString(d)
              .callFunction((state) => {
                state.elements.cursor.style.display = 'none';
              });
            }}
          />
         </div>)
      )}
    </div>
  );
}

export default Terminal;