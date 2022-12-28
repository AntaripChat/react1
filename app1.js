import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const [a,setvalue] = useState("")
  
  function change(event){
    setvalue(event.target.value);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>

      <h1>{a}</h1>
      <input type='text' onChange={change}/>
      
    </div>
  );
}

export default App;
