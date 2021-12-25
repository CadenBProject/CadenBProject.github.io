import runningGif from './assets/running.gif';
import './App.css';
import React, { useState } from 'react';

const StoryText = (props) => {
  
  return props.state === 0 ? (
    <div className="StoryText">
      <h2>This is the text for the story</h2>
      <p>
        You can have different font sizes if you'd like. Like having the title for the section above and
        more sentences here to explain the scenerio. Let's make sure we check how this looks on mobile too.
      </p>
    </div>
  ) : null
}

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={runningGif} alt="logo" />
        <StoryText state={state} />
      </header>
    </div>
  );
}

export default App;
