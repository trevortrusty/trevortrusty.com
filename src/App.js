import logo from './Cat.svg';
import waves from './layered-waves-haikei.svg';
import './App.css';
import Cat from './components/Cat.js'

function App() {
  return (
    <div className="App">
      
      <div className="App-container">
        {/* <img src={waves} className='waves'/> */}
        <div className='waves'></div>
        <div className='splash'>
          <Cat className="App-logo"/>
        </div>

        <div className='footer'>
          <p>Trevor Trusty</p>
          <p>trevortrusty.com</p>
          <p>Hi</p>
        </div>

      </div>
    </div>
  );
}

export default App;
