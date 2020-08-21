import React from 'react';
import nik from './img/nik.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={nik} className="App-logo" alt="logo" />
        <p>
          This is Nikki
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a> */}
      </header>
    </div>
  );
}

export default App;
