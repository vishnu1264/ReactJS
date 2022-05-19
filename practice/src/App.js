import React, { useState, useEffect } from 'react';
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
  function Wild(props){

    useEffect(()=>{
      console.log('I run after every props value change');
    },[props.name, props.type])

    return(
      <div>
        <button 
          onClick={ () => {
            if(props.type === 'carnivorous')
              setType('herbivorous')
            else
              setType('carnivorous')
          }}
        > {props.type} </button>
        <h3>{props.type}</h3>
      </div>
    )
  }

  // // useEffect Runs After Props and State Value Change
  // useEffect(()=>{
  //   console.log('I run after props and state value change');
  // },[])

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
      <Wild style={{width:200}} name={animal} type={type}/>
      {/* <Bird type={bird} /> */}
      {/* <Wild name={bird} onClick={()=>{setBird('parrot')}} >Parrot</Wild>
      <Wild name={bird} onClick={()=>{setBird('sparrow')}} >Sparrow</Wild> */}
      <h1>{animal}</h1>
    </>
  );
}

export default App;
