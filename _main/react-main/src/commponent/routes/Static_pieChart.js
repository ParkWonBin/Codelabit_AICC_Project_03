import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register the Title plugin along with others
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = ({ props }) => {
  const { pieLabels, pieValues, pieColors } = props;

  const chartData = {
    labels: pieLabels,
    datasets: [{
      label: 'Class',
      data: pieValues,
      backgroundColor: pieColors,
      hoverOffset: 1
    }]
  };

  // Adding title configuration in the options
  const options = {
    maintainAspectRatio: false, // Keep the aspect ratio fixed or not
    plugins: {
      legend: {
        display: true, // Show legend
        position: 'bottom',
      },
      title: {
        display: true, // Enable the title
        text: '부동산 데이터 분류', // Title text
        position: 'top', // Position of the title
        font: {
          size: 16, // Font size
          weight: 'bold' // Font weight
        },
        padding: {
          top: 10, // Padding from chart
          bottom: 20 // Padding from bottom
        }
      }
    }
  };

  return <Pie data={chartData} options={options} />;
}

export default PieChart;
