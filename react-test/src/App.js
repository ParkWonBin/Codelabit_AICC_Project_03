import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';

import MapImage from './commponent/MapImage';
import ChartImage from './commponent/ChartImage';
import Chatbot from './commponent/chatbot';
import LoginForm from './commponent/LoginForm'

function App() {


  return (
    <Router>
      <div className="App">
        {/* 네비게이션 */}
        <nav className="navbar">
          <h3>AICC 3차 프로젝트 1팀!</h3>
          <ul>
            <li><Link to="/map">MAP</Link></li>
            <li><Link to="/chart">chart</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        {/* 메뉴별 화면 나오는곳 */}
        <Routes>
          <Route path="/map" element={ <MapImage/> } />
          <Route path="/chart" element={ <ChartImage/>} />
          <Route path="/login" element={<LoginForm/>} />
        </Routes>
         
         {/* 쳇봇 나오는곳 */}
        <Chatbot/>

      </div>
    </Router>
  );
}

export default App;
