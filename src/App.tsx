import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tiago } from './components/Tiago';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Afrouz did the change!
        </p>
        <Tiago age={35} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
