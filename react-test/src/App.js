import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import MapImage from './Map';
import ChartImage from './ChartImage';

function App() {
  const [currentPage, setCurrentPage] = useState(null);

  const handleMAPClick = (event) => {
    event.preventDefault();
    setCurrentPage('MAP');
  };

  const handleChartClick = (event) => {
    event.preventDefault();
    setCurrentPage('chart');
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h3>AICC 3차 프로젝트 1팀!</h3>
        <ul>
          <li><Link to="/" onClick={handleMAPClick}>MAP</Link></li>
          <li><Link to="/about" onClick={handleChartClick}>chart</Link></li>
        </ul>
      </nav>
      <div className="content">
        {currentPage === 'MAP' && <Map />}
        {currentPage === 'chart' && <Chart />}
      </div>
      <div className="chatbot-button-container"> 
        <button>챗봇</button>
      </div>
    </div>
  );
}

export default App;
