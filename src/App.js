
import logo from './Cat.svg';
import waves from './layered-waves-haikei.svg';
import './App.css';
import React from 'react';
import Cat from './components/Cat.js'
import CodeBlock from './components/CodeBlock';
import CodeDisplay from './components/CodeDisplay';
import laptop from './blender_laptop.png'
import laptopOn from './blender_laptop_temple.png'
import Waves from './components/Waves';
import Nav from './components/Nav'
import HomeTopIntro from './components/HomeTopIntro.js';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react';
import HomePage from './components/HomePage.js';
function App() {
  const [laptopState, setLaptopState] = useState(false);
  const [topOffset, setTopOffset] = useState(0);

  React.useEffect(() => {
    if (window.innerWidth <= 390) {
      setTopOffset(0.15);
    } else {
      setTopOffset(0);
    }
  }, [window.innerWidth]);

  const toggleLaptopState = () => {
    setLaptopState(!laptopState);
    console.log(laptopState);
  }

  return (
    <div className="App">
      
      <div className="App-container">
        
        <HomePage />
        
      </div>
    </div>
  );
}

export default App;
