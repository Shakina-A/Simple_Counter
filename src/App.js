import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import React, { useState } from 'react';

function App() {
  const[dark,setDark]=useState(false);
  return (
    <div className={dark?"container dark":"container"}>
      <h1>Simple Counter App</h1>
      <Counter></Counter>
      <button onClick={()=>setDark(!dark)}>
        {dark ?"Switch to Light Mode":"Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
