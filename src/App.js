import { Parallax, ParallaxLayer  } from "@react-spring/parallax";

import logo from './Cat.svg';
import waves from './layered-waves-haikei.svg';
import './App.css';
import Cat from './components/Cat.js'
import CodeBlock from './components/CodeBlock';
import CodeDisplay from './components/CodeDisplay';
import laptop from './blender_laptop.png'
function App() {
  return (
    <div className="App">
      
      <Parallax className="App-container" pages={1} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={2.5}>
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
          <div className='section-1'></div>
        </ParallaxLayer>
        <ParallaxLayer className='section-1-content' offset={0} speed={2.5}>
          <div className='flex-1'>  
              <h1>FULL STACK <span className='developer'>DEVELOPER</span></h1>
              <h3>ELEVATE YOUR DIGITAL WORLD</h3>
          </div>
          <div className='flex-2'>
            <img className='laptop' width='80%' src={laptop}/>
              {/* <CodeDisplay>//ReactJS..</CodeDisplay>
              <CodeDisplay>//NextJS...</CodeDisplay>
              <CodeDisplay>//Node.....</CodeDisplay>
              <CodeDisplay>//MySQL....</CodeDisplay>
              <CodeDisplay>//C++......</CodeDisplay> */}
              
          </div>
            
        </ParallaxLayer>
      </Parallax>
      
    </div>
  );
}

export default App;