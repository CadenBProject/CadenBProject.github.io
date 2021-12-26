import runningGif from './assets/running.gif';
import DEADGif from './assets/DEAD.gif';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [node, setNode] = useState("intro");

  if (node === "intro") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={runningGif} alt="logo" />
        <div className="StoryText">
          <h2>Welcome to my game</h2>
          <p>
            Click continue to begin ...
          </p>
          <button onClick={() => {setNode("start")}}>
            continue
          </button>
        </div>
        </header>
      </div>
    )
  }

  if (node === "start") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={runningGif} alt="logo" />
        <div className="StoryText">
          <h2>THIS IS THE FIRST STORY THAT EVERYTHING WILL BRANCH FROM</h2>
          <p>
            This is some more text explaining that story
          </p>
          <button onClick={() => {setNode("DEAD")}}>
            Phone
          </button>
          <button onClick={() => {setNode("Story Branch 2")}}>
            eat them
          </button>
          <button onClick={() => {setNode("Story Branch 3")}}>
            push them
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Phone") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={runningGif} alt="logo" />
        <div className="StoryText">
          <h2>Title</h2>
          <p>
            Wow u chose the phone? who u gonna call ur proud mama?.
          </p>
          <button onClick={() => {setNode("Story Branch 1")}}>
            kill them
          </button>
          <button onClick={() => {setNode("Story Branch 2")}}>
            eat them
          </button>
          <button onClick={() => {setNode("Story Branch 3")}}>
            push them
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "DEAD") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={DEADGif} alt="logo" />
        <div className="StoryText">
          <h2>HAH U DIED</h2>
          <p>
            You died, would you like to restart?
          </p>
          <button onClick={() => {setNode("start")}}>
          restart
          </button>
        </div>
        </header>
      </div>
    )
  }
}

export default App;
