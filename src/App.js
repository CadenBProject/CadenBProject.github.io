import runningGif from './assets/running.gif';
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
          <button onClick={() => {setNode("kill them")}}>
            kill them
          </button>
          <button onClick={() => {setNode("eat them")}}>
            eat them
          </button>
          <button onClick={() => {setNode("push them")}}>
            push them
          </button>
        </div>
        </header>
      </div>
    )
  }

  if (node === "kill them") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={runningGif} alt="logo" />
        <div className="StoryText">
          <h2>You killed them</h2>
          <p>
            Sorry now you're arrested
          </p>
          <button onClick={() => {setNode("option 1")}}>
            option 1
          </button>
          <button onClick={() => {setNode("option 2")}}>
            option 2
          </button>
          <button onClick={() => {setNode("option 3")}}>
            option 3
          </button>
        </div>
        </header>
      </div>
    )
  }

  if (node === "eat them") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={runningGif} alt="logo" />
        <div className="StoryText">
          <h2>You ate them</h2>
          <p>
            Sorry now you're a cannibal
          </p>
          <button onClick={() => {setNode("option 1")}}>
            option 1
          </button>
          <button onClick={() => {setNode("option 2")}}>
            option 2
          </button>
          <button onClick={() => {setNode("option 3")}}>
            option 3
          </button>
        </div>
        </header>
      </div>
    )
  }


}

export default App;
