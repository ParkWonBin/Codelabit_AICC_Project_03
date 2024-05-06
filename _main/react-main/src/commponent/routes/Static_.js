import React, {useState, useEffect} from 'react';

import './Static_.css'
import PieChart from './Static_pieChart'

function Static() {

  const [getPieLabels, setPieLabels] = useState([]);
  const [getPieValues, setPieValues] = useState([]);
  const [getPieColors, setPieColors] = useState([]);
  const [getData,setData] = useState([
    {"번호": 1, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.5806949 ,"경도": 126.9827989 , "주소": "통의동"  , "주소지역": "종로구" },
    {"번호": 2, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.5806949 ,"경도": 126.9827989 , "주소": "통의동"  , "주소지역": "종로구" },
    {"번호": 3, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.5806949 ,"경도": 126.9827989 , "주소": "통의동"  , "주소지역": "종로구" },
    {"번호": 4, "건물면적": 345.28, "용도지역": "제2종일반주거", "위도": 37.5806949, "경도": 126.9827989,  "주소": "체부동",   "주소지역": "종로구" },
    {"번호": 5, "건물면적": 14.34,  "용도지역": "일반상업",      "위도": 37.5806949, "경도": 126.9827989,  "주소": "당주동",   "주소지역": "종로구" },
    {"번호": 6, "건물면적": 26.04,  "용도지역": "일반상업",      "위도": 37.5806949,  "경도": 126.9827989, "주소": "당주동",    "주소지역": "종로구"},
    {"번호": 7, "건물면적": 728.18, "용도지역": "일반상업",      "위도": 37.5806949,  "경도": 126.9827989, "주소": "신문로1가",  "주소지역": "종로구"}
 ])

 const [selectedCategory, setSelectedCategory] = useState('');

 // Effect to update the chart when the category changes
 useEffect(() => {
   if (selectedCategory && getData.length > 0) {
    const countValues = getData.reduce((acc, item) => {
      const key = item[selectedCategory];
      if (acc[key]) {
        acc[key] += 1;
      } else {
        acc[key] = 1;
      }
      return acc;
    }, {});

    const labels = Object.keys(countValues).map(x=>`${x}(${countValues[x]}건)`);
    const values = Object.values(countValues);
    const colors = values.map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`);

     setPieLabels(labels);
     setPieValues(values);
     setPieColors(colors);
   }
 }, [selectedCategory, getData]);

 const handleCategoryChange = (e) => {
  setSelectedCategory(e.target.value);
};

const isNumeric = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

 return <>
  <div className='panel'>
    <h3>데이터 개요</h3>
    <div className='chartHeader'>
      <div id='chart'>
        <PieChart props={{pieLabels: getPieLabels,pieValues: getPieValues,pieColors: getPieColors}}/>
      </div>
      <div id='chartData'>
          <button id='getCharData'>데이터 불러오기</button>
          <pre id='charDataDisplay'> 데이터 미리보기 </pre>
          분류 기준: 
          <select onChange={handleCategoryChange} value={selectedCategory}>
            <option value="">기준 선택</option>
            {getData.length > 0 && 
              Object.keys(getData[0])
                .filter(key => !isNumeric(getData[0][key]))
                .map((key, index) => (
              <option key={index} value={key}>{key}</option>
            ))}
        </select>
      </div>
    </div>
  </div>

  <div className='panel'>
  <h3>데이터 상세</h3>
  <table id='chartDataTable'>
    <thead>
      <tr>
      {// 첫번째 요소의 key값들을 모두 조회하면서 열이름 작성
      getData.length > 0 && Object.keys(getData[0]).map((key, index) => (
        <th key={index}>{key}</th>
      ))}
      </tr>
    </thead>
    <tbody>
    {// 전체 내용 출력
    getData.map((item, index) => (
      <tr key={index}>
        {Object.values(item).map((value, valueIndex) => (
          <td key={valueIndex}>{value}</td>
        ))}
      </tr>
    ))}
    </tbody>
  </table>

</div>


</>
}


export default Static;
