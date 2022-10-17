import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Meme } from './features/meme/Meme';
import { Nav } from './features/nav/Nav';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Meme />
      
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
