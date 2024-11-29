import logo from './logo.svg';
import './App.css';
   // client/src/App.js
import React from 'react';
import HabitList from './components/HabitList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HabitList />
      </header>
    </div>
  );
}

export default App;
