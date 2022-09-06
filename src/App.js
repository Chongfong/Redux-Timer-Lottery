import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Counter from './features/counter/Counter';
import Winner from './features/winner/Winner';
import Lottery from './features/lottery/Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Counter />
                  <Lottery />
                </>
)}
            />
            <Route
              path="/result"
              element={(
                <Winner />
)}
            />
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;
