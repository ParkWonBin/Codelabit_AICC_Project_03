import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';

import { Map, MapMarker} from 'react-kakao-maps-sdk'

import MapImage from './commponent/MapImage';
import ChartImage from './commponent/ChartImage';
import Chatbot from './commponent/chatbot';
import LoginForm from './commponent/LoginForm';

function App() {

  return (
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
          <Route path="/chart" element={<ChartImage/>} />
          <Route path="/login" element={<LoginForm/>} />
        </Routes>


        <Chatbot />

        <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{color:"#000"}}>Hello World!</div>
      </MapMarker>
    </Map>

      </div>
  );
}

export default App;