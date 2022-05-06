import React from 'react';
import './App.css';
import Users from './components/Users';

function App() {
  console.log('app changed');
  return (
    <div className="App screen-wrapper">
      <Users />
    </div>
  );
}

export default App;
