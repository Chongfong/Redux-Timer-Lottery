import React from 'react';
import Counter from './features/counter/Counter';
import Lottery from './features/lottery/Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Lottery />
      </header>
    </div>
  );
}

export default App;
