import logo from './logo.svg';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './context/theme.context';
import './App.css';

const App = () => {
  const {color, setColor} = useContext(ThemeContext);
  // const {colors} = useContext(ThemeContext);
  // console.log(colors);
  // const [color, setColor] = useState('black');
  // console.log(color);

  // const[buttonState, setButtonState] = useState('false');

  const toggleButton = () => {
    // console.log('calling');
    // setButtonState(!buttonState);
    // localStorage.setItem('state', buttonState);
    if(color === 'black')
      setColor('#d8d8d8');
    else
      setColor('black');
  }

  // console.log('render');
  return (
    <div className='main'>
      <div className='toggle-screen' style={{backgroundColor:`${color}`}}></div>
      <button type='button' onClick={toggleButton} >Click me</button>
    </div>
  )
}

export default App;
