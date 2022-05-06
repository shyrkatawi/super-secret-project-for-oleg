import React from 'react';
import './App.css';
import Input from './components/Input';
import Users from './components/Users';

function App() {
    console.log('app changed')
  return (
    <div>
      <div className="App">
        <Input />
        <Users />
      </div>
    </div>
  );
}

export default App;
