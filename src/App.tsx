import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Shuffle from './Shuffle';
import { shuffle } from './utils';

function App() {
  const [name, setName] = useState<string>('');

  console.log('App render');

  const random = () => setName(shuffle());
  const clearName = () => setName('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Shuffle name={name} clearName={clearName} />
        <button type="button" onClick={random} style={{marginTop: '10px'}} >Shuffle Name</button>
      </header>
    </div>
  );
}

export default App;
