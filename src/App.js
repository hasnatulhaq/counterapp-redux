import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Box } from './features/box/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <Box/>
        </span>
      </header>
    </div>
  );
}

export default App;
