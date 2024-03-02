
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
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react';
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
        <Parallax pages={2}>

        <ParallaxLayer 
          className='section-1-background'
          offset={0.45 - topOffset}
          speed={.2}
          factor={1} 
        />

        <ParallaxLayer
        offset={0}
        speed={1}
        >
        <div className='nav'>
          <div className='nav-left'>
            <a href='./' className='firstName'>TREVOR</a>
            <a href='./' className='lastName'>TRUSTY</a>
          </div>
          <div className='nav-right'>
            <a className='navBtnGithub'>GITHUB</a>
            <a className='navBtnProjects'>PORTFOLIOLI</a>
          </div>
        </div>
        </ParallaxLayer>
        
        <ParallaxLayer 
          className='section-1'
          speed={.03}
          offset={-.09 - topOffset}
   
          >
        <div className='flex-1'>  
            <h1>FULL STACK <span className='developer'>DEVELOPER,</span></h1>
            <h3>SOFTWARE CREATOR & MUSICIAN</h3>
          </div>
          <div className='flex-2'>
            {
              laptopState ? 
              <img onClick={toggleLaptopState} className='laptop' width='80%' src={laptopOn}/>
                : <img onClick={toggleLaptopState} className='laptop' width='80%' src={laptop}/>
            }
            
          </div>
        </ParallaxLayer>
        <ParallaxLayer 
          className='section-2-background'
          offset={.68}
          speed={.2}
          factor={1} 
        />
        </Parallax>
      </div>
    </div>
  );
}

export default App;
