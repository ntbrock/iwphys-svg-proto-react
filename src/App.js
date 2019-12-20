import React from 'react';
import logo from './logo.svg';
import './App.css';
import SvgContainer from "./components/SvgContainer";

function App() {

    const uv=400;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Taylor edited <code>src/App.js</code> and save {uv} to reload.
        </p>

          <SvgContainer />
      </header>
    </div>
  );
}

export default App;
