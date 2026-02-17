import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import NewTabPage from './components/NewTabPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newtab" element={<NewTabPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
