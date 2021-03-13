import React from 'react';
import Header from "./components/Header";
import AboutMe from "./views/AboutMe";
import Hobbies from "./views/Hobbies";
import Experience from "./views/Experience";
import Skills from "./views/Skills";

import Terminal from "./components/Terminal";
import Window from "./components/Window";
import Trello from "./components/Trello";


import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-container">
       <Window x={"65%"} y={"60vh"} width={500} height={300} backgroundColor="black">
          <Terminal />
        </Window>
        <Window x={100} y={200} width={600} height={400} backgroundColor="black">
          <Trello/>
        </Window>
        <AboutMe/>
        <Hobbies />
        <Experience />
        <Skills />
      </div>
    </div>
  );
}

export default App;
