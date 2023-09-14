import logo from './Cat.svg';
import waves from './layered-waves-haikei.svg';
import './App.css';
import Cat from './components/Cat.js'
import CodeBlock from './components/CodeBlock';
function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Cat />
        <div className='waves'>
        {/* <CodeBlock>
          Hi there.
          Wow!
        </CodeBlock> */}
        </div>
        <div className='waves2'></div>


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
