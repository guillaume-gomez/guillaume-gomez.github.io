import React from 'react';
import Typewriter from 'typewriter-effect';
import "./Terminal.css";

const data = [
  "ruby",
  "ruby on rails",
  "typescript",
  "react",
  "rust",
  "C++",
  "C#",
  "Unity"
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
              pauseFor(5000 * (index)).
              callFunction((state) => {
                state.elements.cursor.style.display = '';
              }).
              typeString('>').
              pauseFor(100).
              typeString(` apt-get install ${d}`).
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
