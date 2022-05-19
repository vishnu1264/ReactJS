import React, { useState, useEffect } from 'react';
import Wild from "./Wild";
// import Wild from './components/animal.component';
import './App.css';

function App() {

  const [animal, setAnimal] = useState('');
  const [type, setType] = useState('herbivorous');
  const [bird, setBird] = useState('flying');

  // useEffect Runs After Every Render
  useEffect(() => {
    console.log('I run after every render');
  });

  // useEffect Runs Only Once After Initial Render
  useEffect(()=>{
    console.log('I run only once after Initial render');
  },[])

  // useEffect Runs After State Value Changes
  useEffect(()=>{
    console.log('I run after every state change');
  },[animal])

  //useEffect Runs After Props Value Change


  // // useEffect Runs After Props and State Value Change
  // useEffect(()=>{
  //   console.log('I run after props and state value change');
  // },[])
  //See this in Wild.
  

  // // useEffect Cleanup
  // useEffect(()=>{
  //   console.log('cleanup');
  // },[])

  // debugger;
  console.log('render');
  return (
    <>
      <div style={ { width:200, display:'flex', justifyContent:'space-between' } }>
        <button onClick={()=>{setAnimal('Lion')}}>Lion</button>
        <button onClick={()=>{setAnimal('Tiger')}}>Tiger</button>
        <button onClick={()=>{setAnimal('Fox')}}>Fox</button>
      </div>
      <Wild style={{width:200}} name={animal} type={type} setType={setType}/>
      <h1>{animal}</h1>
    </>
  );
}

export default App;
