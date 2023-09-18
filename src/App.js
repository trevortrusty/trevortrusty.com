
import logo from './Cat.svg';
import waves from './layered-waves-haikei.svg';
import './App.css';
import Cat from './components/Cat.js'
import CodeBlock from './components/CodeBlock';
import CodeDisplay from './components/CodeDisplay';
import laptop from './blender_laptop.png'
import laptopOn from './blender_laptop_temple.png'

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState } from 'react';
function App() {
  const [laptopState, setLaptopState] = useState(false);
  const toggleLaptopState = () => {
    setLaptopState(!laptopState);
    console.log(laptopState);
  }

  return (
    <div className="App">
      
      <div className="App-container">
        <div className='nav'>
          <div className='nav-left'>
            <a href='http://www.google.com' className='firstName'>TREVOR</a>
            <a href='http://www.google.com' className='lastName'>TRUSTY</a>
          </div>
          <div className='nav-right'>
            <a className='navBtnGithub'>GITHUB</a>
            <a className='navBtnProjects'>PORTFOLIOLI</a>
          </div>
        </div>
        <div className='section-1'>
          <div className='flex-1'>  
            <h1>FULL STACK <span className='developer'>DEVELOPER</span></h1>
            <h3>ELEVATE YOUR DIGITAL WORLD</h3>
          </div>
          <div className='flex-2'>
            {
              laptopState ? 
              <img onClick={toggleLaptopState} className='laptop' width='80%' src={laptopOn}/>
                : <img onClick={toggleLaptopState} className='laptop' width='80%' src={laptop}/>
            }
            {/* <CodeDisplay>//ReactJS..</CodeDisplay>
            <CodeDisplay>//NextJS...</CodeDisplay>
            <CodeDisplay>//Node.....</CodeDisplay>
            <CodeDisplay>//MySQL....</CodeDisplay>
            <CodeDisplay>//C++......</CodeDisplay> */}
            
          </div>
        </div>
        <div className='section-2'></div>


        <div className='footer'>
          <p>SOFTWARE SOFTWARE</p>
          <p>TREVORTRUSTY.COM</p>
          <p>making SOFTWARE since 1999</p>
          <p>MAINTAINED BY BIG SOFTWARE INC</p>
        </div>
      </div>
    </div>
  );
}

export default App;
