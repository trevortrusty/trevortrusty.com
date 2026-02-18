import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage.js';
import NewTabPage from './components/NewTabPage.js';
import SoftwareProjectsPage from './components/SoftwareProjectsPage.js';
import PrintsPage from './components/PrintsPage.js';

function App() {
  const [view, setView] = useState('home');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          view === 'home'     ? <HomePage setView={setView} /> :
          view === 'software' ? <SoftwareProjectsPage setView={setView} /> :
                                <PrintsPage setView={setView} />
        } />
        <Route path="/newtab" element={<NewTabPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
