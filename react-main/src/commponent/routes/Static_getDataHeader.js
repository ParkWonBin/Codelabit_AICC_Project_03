import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PieChart from './Static_pieChart';
const flaskBaseURL = process.env.REACT_APP_FLASK_URL;

const GetDataHeader = ({ props }) => {
    const {getData, setData} = props
    const [getPieLabels, setPieLabels] = useState([]);
    const [getPieValues, setPieValues] = useState([]);
    const [getPieColors, setPieColors] = useState([]);
    const [getRestText, setResultText] = useState('데이터 미리보기')
    const [selectedCategory, setSelectedCategory] = useState('');

    const isNumeric = (value) => {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
    
    const fnCountValue = (acc, item) => {
        const key = item[selectedCategory];
        if (acc[key]) {
            acc[key] += 1;
        } else {
            acc[key] = 1;
        }
        return acc;
    }

    const handleGetChartData = async ()=>{
        setResultText('데이터 받아오는 중...');
        try {
            const response = await axios.get(`${flaskBaseURL}/getData`, {
              headers: {'Content-Type': 'application/json'}
            });

            const newData = response.data;

            setResultText(JSON.stringify(newData,null,4));
            setData(currentData=>{
                const newTotalData = [...currentData,...newData]
                for(let i=0; i<newTotalData.length;i++){
                    newTotalData[i].번호 = i+1
                }
                return newTotalData
            })


        } catch (error) {
            console.error("Error fetching data:", error);
            setResultText('데이터를 불러오는 데 실패했습니다.');
        }
    };

  // 차트 데이터 수정
  useEffect(() => {
    if (selectedCategory && getData.length > 0) {
      const countValues = getData.reduce(fnCountValue, {});

      const labels = Object.keys(countValues).map(x => `${x} (${countValues[x]}건)`);
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

  // 데이터가 준비되면 기본값으로 첫 번째 비수치 카테고리를 선택합니다.
  useEffect(() => {
    if (getData.length > 0) {
      const nonNumericKeys = Object.keys(getData[0]).filter(key => !isNumeric(getData[0][key]));
      if (nonNumericKeys.length > 0) {
        setSelectedCategory(nonNumericKeys[0]); // 첫 번째 비수치 키를 선택
      }
    }
  }, [getData]); // getData가 변경될 때마다 실행

  return (
    <div className='panel'>
      <h3>데이터 개요</h3>
      <div className='chartHeader'>

        {getData?.length>0 // 왼쪽 차트 넣기
        ? <div id='chart'>
            <PieChart props={{
              pieLabels: getPieLabels,
              pieValues: getPieValues,
              pieColors: getPieColors
            }} />
          </div>
        :<></>
        }


        <div id='chartData'>
          <button id='getCharData' onClick={handleGetChartData}>데이터 불러오기</button>
          <pre id='charDataDisplay'> {getRestText} </pre>


        {getData?.length>0 // 차트 분류 기준 넣기
        ? <> 분류 기준: 
            <select onChange={handleCategoryChange} value={selectedCategory}>
                <option value="">기준 선택</option>
                {getData.length > 0 && 
                Object.keys(getData[0])
                .filter(key => !isNumeric(getData[0][key]))
                .map((key, index) => (
                    <option key={index} value={key}>{key}</option>
                    ))}
            </select>
        </>
        :<></>
        }
        </div>
      </div>
    </div>
  );
};

export default GetDataHeader;
