import React from 'react';
import { Meme } from './features/meme/Meme';
import { Nav } from './features/nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Meme />
    </div>
  );
}

export default App;
