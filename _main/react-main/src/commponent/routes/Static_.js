import React, {useState, useEffect} from 'react';

import './Static_.css'
import GetDataHeader from './Static_getDataHeader';
import StaticTable from './Static_table'
import StaticKakaoMap from './Static_kakaoMap'

function Static() {
  const [getMapData, setMapData] = useState(null); 
  const [getData,setData] = useState([])
//   const [getData,setData] = useState([
//     {"번호": 1, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.57801685 ,"경도": 126.9727906 , "주소": "통의동"  , "주소지역": "종로구" },
//     {"번호": 2, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.57801685 ,"경도": 126.9727906 , "주소": "통의동"  , "주소지역": "종로구" },
//     {"번호": 3, "건물면적": 680.83, "용도지역": "제1종일반주거", "위도": 37.57801685 ,"경도": 126.9727906 , "주소": "통의동"  , "주소지역": "종로구" },
//     {"번호": 4, "건물면적": 345.28, "용도지역": "제2종일반주거", "위도": 37.57796505, "경도": 126.97090667722514,  "주소": "체부동",   "주소지역": "종로구" },
//     {"번호": 5, "건물면적": 14.34,  "용도지역": "일반상업",      "위도": 37.5716796, "경도": 126.9739063,  "주소": "당주동",   "주소지역": "종로구" },
//     {"번호": 6, "건물면적": 26.04,  "용도지역": "일반상업",      "위도": 37.5716796,  "경도": 126.9739063, "주소": "당주동",    "주소지역": "종로구"},
//     {"번호": 7, "건물면적": 728.18, "용도지역": "일반상업",      "위도": 37.57017,  "경도": 126.97417, "주소": "신문로1가",  "주소지역": "종로구"}
//  ])

 useEffect(() => {
  if (getData.length > 0) {  // 데이터가 로드되었는지 확인
    setMapData({
      latitude: getData[0].위도,
      longitude: getData[0].경도,
      message: `번호: ${getData[0].번호}`  // 메시지 형식 지정
    });
  }
}, [getData]);  // getData가 변경될 때마다 실행


 return <>
  <GetDataHeader props={{getData, setData}}/>
  
  {getMapData // 데이터 존재 시 아래 표시
  ? <>
      <StaticTable props={{getData, setMapData}}/>
      <StaticKakaoMap props={{getMapData}}/>
    </>
  : <></>
  }
</>
}


export default Static;
