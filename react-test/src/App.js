import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';

import MapImage from './commponent/MapImage';
import ChartImage from './commponent/ChartImage';
import Chatbot from './commponent/chatbot';
import LoginForm from './commponent/LoginForm';

function App() {
  const labels = ['데이터1', '데이터2', '데이터3'];
  const data = [1, 2, 3];

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
          <Route path="/map" element={<MapImage src="/MAP.jpg" />} />
          
          {/* 올바른 props 전달 */}
          <Route path="/chart" element={<ChartImage labels={labels} dataProp={data} />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
         
        {/* 쳇봇 나오는곳 */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
