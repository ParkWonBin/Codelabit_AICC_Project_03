import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'; 

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartImage({ labels, dataProp }) {
  console.log('차트 이미지 로드 시작!');

  const chartData = {
    labels: labels || ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: 'My First Dataset',
      data: dataProp || [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // 화면 높이에 맞추기 위한 설정
    }}>
      <div style={{ 
        width: '850px',  // 부모 div의 너비를 850px로 조절
        height: '850px', // 부모 div의 높이를 850px로 조절
        position: 'relative', 
        margin: 'auto' // 가운데 정렬을 위한 설정
      }}>
        <h2>도너츠 차트</h2>
        <Pie 
          data={chartData} 
          options={{ 
            maintainAspectRatio: false,
            responsive: false,
            width: 1500, // 차트 너비를 800px로 조절
            height: 1500, // 차트 높이를 800px로 조절
            plugins: {
              legend: {
                display: false
              }
            }
          }} 
        />
      </div>
    </div>
  );
}

export default ChartImage;
