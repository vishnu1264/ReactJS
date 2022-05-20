import React, { useState, useEffect, useMemo } from "react";

const App2 = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const [doubleNumber, setDoubleNumber] = useState(0);
    // const doubleNumber = slowFunction(number);
    // const themeStyles {
    //     backgroundColor : dark? 'black' : 'white',
    //     color : dark? 'white' : 'black'
    // }

    /*const doubleNumber = useMemo( ()=>{
        return slowFunction(number)
    },[number] ) ;*/

    useEffect( () => {
        setDoubleNumber(slowFunction(number));
     }, [number] )
    
    const themeStyles = useMemo( () => {
        return {
            backgroundColor : dark? 'black' : 'white',
            color : dark? 'white' : 'black'
        }
    }, [dark])

    //everytime the function gets called because themeStyles refers to different 
    //location in memory. so we use useMemo to store it.
    useEffect( () => {
        console.log("Theme changed");
    }, [themeStyles] )

    // console.log('render');
    return(
        <>
            <input 
                type='number'
                value={number} 
                onChange={ e => {
                    setNumber(e.target.value);
                    // console.log(e);
                }}
            />
            <button onClick={()=>{
                setDark(x => !x)
            }}>
            Change Theme
            </button>
            <div style={themeStyles}> {doubleNumber} </div>
        </>
    )

}

function slowFunction(num){
    console.log('running slow function');
    for(let i=0;i<1000000000;i++) {}
    // console.log('called');
    return num*2;
}

export default App2;