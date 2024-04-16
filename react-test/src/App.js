import React, { useState } from 'react';
import './App.css';

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
          <li><a href="/" onClick={handleMAPClick}>MAP</a></li>
          <li><a href="/about" onClick={handleChartClick}>chart</a></li>
        </ul>
      </nav>
      <div className="content">
        {currentPage === 'MAP' && (
          <img src="/MAP.jpg" alt="MAP" width="700" height="700" />
        )}
        {currentPage === 'chart' && (
          <img src="/chart.png" alt="chart" width="500" height="500" />
        )}
      </div>

      <div className="chatbot-button-container"> 
        <button>챗봇</button>
      </div>
    </div>
  );
}

export default App;
