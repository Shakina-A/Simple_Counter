import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import React, { useState } from 'react';

function App() {
  const[dark,setDark]=useState(false);
  const [name,setName]=useState("");
  return (
    <div className={dark?"container dark":"container"}>
      <h1>Simple Counter App</h1>
      <input type="text" placeholder="enter your name" value={name}
      onChange={(e)=>setName(e.target.value)}
      ></input>
      <p>Hello,{name?name:"User"}</p>
      <Counter></Counter>
     <button className="toggle-btn" onClick={() => setDark(!dark)}>
        {dark ?"☀️":"🌙"}
      </button>
      
    </div>
  );
}

export default App;
