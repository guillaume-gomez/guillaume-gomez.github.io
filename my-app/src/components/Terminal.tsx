import React from 'react';
import Typewriter from 'typewriter-effect';
import "./Terminal.css";

const data = [
  "ruby",
  "javascript",
  "rust",
  "C++"
]

function Terminal() {
  return (
    <div style={{margin: "20px 20px", color: "#1FC110", fontFamily: "Inconsolata"}}>
      { data.map((d, index) => (
        <div key={d} >
          <Typewriter
            onInit={(typewriter) => {
              typewriter.
              start().
              callFunction((state) => {
                state.elements.cursor.style.display = 'none';
              }).
              pauseFor(5000 * (index + 1)).
              typeString('>').
              pauseFor(100).
              typeString(` apt get install ${d}`).
              callFunction((state) => {
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
