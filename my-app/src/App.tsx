import React from 'react';
import Header from "./Header";
import AboutMe from "./AboutMe";


import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-content">
        <AboutMe/>
      </div>
    </div>
  );
}

export default App;
