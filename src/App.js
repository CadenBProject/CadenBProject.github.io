import runningGif from './assets/running.gif';
import DEADGif from './assets/DEAD.gif';
import Librarygif from './assets/Library.gif';
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
          <h2>You have just been sentenced to 35 years in prison for Robbery… In the transport van from the court u start thinking of how dreadful prison life is, you start thinking of all the movies and shows you have seen that have taken place in a prison setting and hope that it's not as terrible in real life.</h2>
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
          After your transport you were placed into your cell, as you sit to take your surroundings in you notice a prison fight break out in the cafeteria, terrified you think to yourself ‘I gotta get outta here’. 
          </p>
          <button onClick={() => {setNode("StartEsc")}}>
          start your escape plan
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "StartEsc") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={runningGif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          After taking a night to rest up and think about possible escapes, you decide to take a day to scope out the prison to see any possible escape routes, while walking you notice a vent behind one of the bookshelves in the library, and an air vent in the cafeteria.
          </p>
          <button onClick={() => {setNode("Library")}}>
            Library
          </button>
          <button onClick={() => {setNode("Cafeteria")}}>
            Cafeteria
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Library") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={Librarygif} alt="logo" />
        <div className="StoryText">
          <h2>Library</h2>
          <p>
          After deciding that the library is your best shot at escaping, you start to spend all your time in there, creating a map of the bookshelves, the routes of security guards and their routine, as well as inmates that use the library regularly. You almost always stay in the library until all inmates are called for lights out.
          </p>
          <button onClick={() => {setNode("Sleep_Library")}}>
          Go to sleep
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Sleep_Library") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={DEADGif} alt="logo" />
        <div className="StoryText">
          <h2>zZzzzzZzz</h2>
          <p>
            
          </p>
          <button onClick={() => {setNode("Library_Map")}}>
          Wake up
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Library_Map") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={DEADGif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          With your map all drawn out and memorized, you decide it's time to make a move, but you need a way to make your move. You figured the books covered most of the vent, but you think you should be able to put the vent back just in case. Should you take the time to put the vent back?
          </p>
          <button onClick={() => {setNode("Library_VentBack")}}>
          Yeah put the vent back
          </button>
          <button onClick={() => {setNode("Library_LeaveVent")}}>
          Leave the vent
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "Library_LeaveVent") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={DEADGif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          You decide to leave the vent open and hope the books cover the open vent. After your decision, you step out to try and get a glimpse of there the vent leaves; you clear the books out for a good view, you see the light just around a bend in the vents, and in the celebration, you rush back to your cell to create more plans and take a nap… you wake up to guards yelling at you, another inmate saw you with the vent and squealed, the warden and guard quickly realized what you were planning to do.
          </p>
          <button onClick={() => {setNode("Library_WoodCaught")}}>
          Next
          </button>
        </div>
        </header>
      </div>
    )
  }
    if (node === "Library_WoodCaught") {
      return (
        <div className="App">
          <header className="App-header">
          <img src={DEADGif} alt="logo" />
          <div className="StoryText">
            <h2></h2>
            <p>
            Being caught by the guards and warden landed you in solitary and extra cell inspections……….. After solitary, you come back to your cell and find that all your contraband is gone, and your whole plan is ruined.
            </p>
            <button onClick={() => {setNode("Intro")}}>
            Would you like to restart?
            </button>
          </div>
          </header>
        </div>
      )
  }
  if (node === "Library_VentBack") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={DEADGif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          You decided rather to be safe than sorry and put the vent back between your escape attempt. Although this may take longer, you would rather actually escape. You check the vent out and see that you need a wrench to get it open. After some thought, you come up with several ideas of how to make a wrench but think that a wooden wrench or metal wrench are the two best options. 
          </p>
          <button onClick={() => {setNode("WoodWrench")}}>
          Make a wood wrench
          </button>
          <button onClick={() => {setNode("MetalWrench")}}>
          Make a Metal wrench
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "WoodWrench") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={DEADGif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          To make up for the slow process of putting the vent back up, you think that a wooden wrench would be a great way to speed things up. You find a piece of wood out in the courtyard under a broken bench. You decide to take the wood back to your cell to make the wrench somewhat unseen.
          </p>
          <button onClick={() => {setNode("WrenchCraft")}}>
          Next
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "WrenchCraft") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={DEADGif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          In your cell, you begin chipping away a small notch in one end of the wood, chipping an approximate size of the bolts you need to loosen. After some time, you think that the wrench is ready to go test to see if the wrench fits. 
          </p>
          <button onClick={() => {setNode("WoodNow")}}>
          Test Now
          </button>
          <button onClick={() => {setNode("WoodNow")}}>
          Test Later
          </button>
        </div>
        </header>
      </div>
    )
  }
  if (node === "WoodNow") {
    return (
      <div className="App">
        <header className="App-header">
        <img src={DEADGif} alt="logo" />
        <div className="StoryText">
          <h2></h2>
          <p>
          You head out and go test the wrench. You make your way to the back vent, taking your time to be as silent as possible before taking out the wrench. After the books inside the vents were cleared, you took out the wrench and placed it up to the bolts. To your surprise, the wrench fits the bolts perfectly. You decided to test your luck and try to loosen one of the bolts. After one crank, the wrench snaps, making a loud crack sound alerting the guards passing by.
          </p>
          <button onClick={() => {setNode("Library_WoodCaught")}}>
          Next
          </button>
        </div>
        </header>
      </div>
    )
  }
}

export default App;
