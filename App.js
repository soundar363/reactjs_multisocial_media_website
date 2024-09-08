import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Instagram from './components/Instagram';
import Facebook from './components/Facebook';
import Whatsapp from './components/Whatsapp';
import About from './components/About';
import './App.css';
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instagram">Instagram</Link>
            </li>
            <li>
              <Link to="/facebook">Facebook</Link>
            </li>
            <li>
              <Link to="/whatsapp">Whatsapp</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/whatsapp" element={<Whatsapp />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </div>
    </Router>
    
  );
};

export default App;