import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2'; 


ChartJS.register(ArcElement, Tooltip, Legend);

function ChartImage({ labels, dataProp }) {
  console.log('차트 이미지 로드 시작!');
  console.log('labels:', labels);
  console.log('dataProp:', dataProp);

  // 차트에 표시될 데이터
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
        width: '400px',  // 너비 조정
        height: '400px', // 높이 조정
        position: 'relative', 
        margin: 'auto', // 가운데 정렬을 위한 설정
        overflow: 'hidden' // 차트가 부모 div를 넘어가지 않도록 overflow 설정
      }}>
        {/* <h2>도너츠 차트</h2> */}
        {/* react-chartjs-2의 Pie 컴포넌트를 사용하여 도너츠 차트를 렌더링*/}
        <Pie 
          data={chartData} 
          options={{ 
            maintainAspectRatio: false, // false로 변경하여 비율 고정
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
