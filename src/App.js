import React from 'react';
import './App.css';
import Joke from './components/joke';
import Marvel from './components/marvel';
require('dotenv').config();

function App() {
  return (
    <>
      <Joke />
      <Marvel />
    </>
  );
}

export default App;
