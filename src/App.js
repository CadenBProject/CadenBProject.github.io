import runningGif from './assets/running.gif';
import './App.css';
import React, { useState } from 'react';

const StoryText = (props) => {

  if (props.state === 0) {
    return (
      <div className="StoryText">
      <h2>This is the text for the story</h2>
      <p>
        You can have different font sizes if you'd like. Like having the title for the section above and
        more sentences here to explain the scenerio. Let's make sure we check how this looks on mobile too.
      </p>
    </div>
    )
  }

  if (props.state === 1) {
    return (
      <div className="StoryText">
      <h2>This is the next phase of the story</h2>
      <p>
        This is more text regarding the second phase of the story. Some nice story here :)
      </p>
    </div>
    )
  }

}

const StoryOptions = (props) => {
  return (
    <button onClick={props.onClick}>
      continue
    </button>
  )
}

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={runningGif} alt="logo" />
        <StoryText state={state} />
        <StoryOptions 
          onClick={() => {
            setState(state + 1)
          }}
        />
      </header>
    </div>
  );
}

export default App;
