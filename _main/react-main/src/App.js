import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios'

import MapImage from './commponent/MapImage';
import ChartImage from './commponent/ChartImage';
import Chatbot from './commponent/chatbot';
import LoginForm from './commponent/LoginForm';

function App() {
  const labels = ['데이터1', '데이터2', '데이터3'];
  const data = [1, 2, 3];
  
  // axios로 받아온 데이터를 저장할 state
  const [apiData, setApiData] = useState(null);
  
  const fetchData = () => {
    axios.get('http://apis.data.go.kr/5080000/polcsttnCctvSttuService/getPolcsttnCctvSttu')
      .then((결과) => {
        // 받아온 데이터를 state에 저장
        setApiData(결과.data);
      })
      .catch((data) => {
        console.log('실패함', data);
      });
  };

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
          <Route path="/chart" element={<ChartImage labels={labels} dataProp={data} />} />
          {/* LoginForm에 fetchData와 apiData 전달 */}
          <Route path="/login" element={<LoginForm fetchData={fetchData} apiData={apiData} />} />
        </Routes>

        {/* 데이터 받아오는 버튼 (LoginForm으로 옮기지 않음) */}
        <button onClick={fetchData}>데이터 받아오기</button>
        
        {/* 받아온 데이터를 출력 (LoginForm으로 옮기지 않음) */}
        {apiData && (
          <div>
            <h4>받아온 데이터:</h4>
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          </div>
        )}

        {/* 쳇봇 나오는곳 */}
        <Chatbot />
      </div>
    // </Router>
  );
}

export default App;