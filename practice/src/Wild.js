import React from "react";

function Wild({setType, name, type}){

    const [val, setVal] = React.useState(0);

    // useEffect Runs After Props and State Value Change
    React.useEffect(()=>{
      console.log('I run after every state and props value change');
    },[name, type, val])

    return(
      <div>
        <button 
          onClick={ () => {
            if(type === 'carnivorous')
              setType('herbivorous')
            else
              setType('carnivorous')
          }}
        > {type} </button>
        <h3>{type}</h3>
      </div>
    )
  }

  export default Wild;