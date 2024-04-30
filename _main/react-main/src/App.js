import './App.css';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // index.js에서 

// commponets 불러오기
import MapImage from './commponent/MapImage';
import ChartImage from './commponent/ChartImage';
import LoginForm from './commponent/LoginForm';
import Chatbot from './commponent/chatbot';


function App() {
  return (
    <div className="App">
    
      <nav className="navbar">
        <h3>AICC 3차 프로젝트 1팀!</h3>
        <ul>
          <li><Link to="/map">MAP</Link></li>
          <li><Link to="/chart">chart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/map" element={<MapImage src='/MAP.jpg' />} />
        <Route path="/chart" element={<ChartImage src='/chart.png' />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
        
      <Chatbot/>
    </div>
  );
}

export default App;
