import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const [a,setAge] = useState(0)
  
  function click(){
    setAge(a+1)
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h1>{a}</h1>
      <button onClick={click}>Hello</button>
    </div>
  );
}

export default App;
