import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    colors: 'green'
})

export const ThemeProvider = ({children}) => {
    
    const [color, setColor] = useState('black');

    // const localColor = localStorage.getItem('state');
    // console.log(localColor);
    // setColor(localColor);
    // useEffect(()=>{
    //     if(buttonState==='false')
    //         setColor('blue');
    //     else
    //         setColor('black');
    // },[])

    const value = {color, setColor};
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}
