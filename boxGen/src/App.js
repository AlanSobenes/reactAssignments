import './App.css';
import {useState} from 'react';
import BoxColors from './components/boxGen';
import ColorForm from './components/ColorForm';

function App(){
  
  const [boxColors, setBoxColors] =  useState([]);

  const newColor = (color) => {
    console.log("hi from app.js");
    const copyColors = [...boxColors];
    copyColors.push(color);
    setBoxColors(copyColors);
    
  };
  return(
  <div className='App'>
    <ColorForm addColor={newColor}/>
    <BoxColors boxColor={boxColors}/>
  </div>
  );
};

export default App;