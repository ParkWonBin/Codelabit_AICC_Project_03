import React, { useState, useEffect } from 'react';
import { Map, MapMarker, Polygon } from 'react-kakao-maps-sdk';
import axios from 'axios';

import './Map.css';
const flaskBaseURL = process.env.REACT_APP_FLASK_URL;

export function MapData(props) {
  const [resultText, setResultText] = useState('<p>위치:코드랩아카데미</p><p>위도: 37.4809375</p><p>경도: 126.8789252</p>');
  const [getMapData, setMapData] = useState({
    viewLat: 37.4809375,
    viewLng: 126.8789252,
    markerLat: 37.4809575,
    markerLng: 126.8794252,
    msg: '코드랩 아카데미',
    zoom: 15,
    boundingbox: []
  });


  useEffect(() => {
    if (getMapData.boundingbox.length > 0) {
      setResultText(`
        <p>주소: ${getMapData.msg}</p>
        <p>위도: ${getMapData.markerLat}</p>
        <p>경도: ${getMapData.markerLng}</p>
        <p>경계 상자: [${getMapData.boundingbox.join(', ')}]</p>
        <pre>${JSON.stringify(getMapData, null, 4)}</pre>
      `);
    }
  }, [getMapData]);

  const handleGeo = async () => {
    const query = document.getElementById('geoquery').value;
    setResultText('검색중...');

    try {
      const response = await axios.post(`${flaskBaseURL}/getGeoData`, { query: query }, {
        headers: {'Content-Type': 'application/json'}
      });

      const data = response.data;
      if (data.isFound) {
        const mapSettings = adjustMap(data.boundingbox);
        setMapData({
          viewLat: mapSettings.center.lat,
          viewLng: mapSettings.center.lng,
          markerLat: data.latitude,
          markerLng: data.longitude,
          msg: data.address,
          boundingbox: data.boundingbox,
          zoom: mapSettings.zoomLevel
        });
      } else {
        setResultText('해당 주소를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setResultText('데이터를 불러오는 데 실패했습니다.');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleGeo();
    }
  };

  return (<>
<div id='MapContainer'>
  <Map
    center={{ lat: getMapData.viewLat, lng: getMapData.viewLng }}
    style={{ width: "60%", height: "500px", margin: "auto" }}
  >
    
  <MapMarker position={{ lat: getMapData.markerLat, lng: getMapData.markerLng }}>
    <div style={{color: "#000",padding: "5px"}}> {
      getMapData.msg.length>35
      ? getMapData.msg.slice(0,35)+"..."
      :getMapData.msg
    } </div>
  </MapMarker>

{getMapData.boundingbox.length > 0 && (
  <Polygon
    path={[
      { lat: parseFloat(getMapData.boundingbox[0]), lng: parseFloat(getMapData.boundingbox[2]) },
      { lat: parseFloat(getMapData.boundingbox[0]), lng: parseFloat(getMapData.boundingbox[3]) },
      { lat: parseFloat(getMapData.boundingbox[1]), lng: parseFloat(getMapData.boundingbox[3]) },
      { lat: parseFloat(getMapData.boundingbox[1]), lng: parseFloat(getMapData.boundingbox[2]) }
    ]}
    strokeWeight={3} // 선의 두께
    strokeColor={'#FF0000'} // 선의 색깔
    strokeOpacity={0.8} // 선의 불투명도
    fillColor={'#FF0000'} // 채우기 색깔
    fillOpacity={0.2} // 채우기 불투명도
  />
)}
</Map>

<div id='AddressContainer'>
  <h1>새주소 검색</h1>
  <div id='inputContainer'>
    <input id="geoquery" type="text" placeholder="주소를 입력하세요" onKeyPress={handleKeyPress}/>
    <button id='geoBtn' onClick={handleGeo}>검색</button>
  </div>
  <div id="result" dangerouslySetInnerHTML={{ __html: resultText }}></div>
</div>

</div></>);
}

function adjustMap(bounds) {
  // bounds는 [남쪽 위도, 서쪽 경도, 북쪽 위도, 동쪽 경도] 형식입니다.
  const [south, north, east, west] = bounds.map(x=>parseFloat(x));

  // 중심점 계산
  const centerLat = (south + north) / 2;
  const centerLng = (west + east) / 2;

  // 지도의 범위(경도와 위도의 차이)에 따라 적절한 줌 레벨을 추정
  const latDiff = north - south;
  const lngDiff = east - west;

  // 경도와 위도 차이에 따라 줌 레벨을 조절
  let zoomLevel = 10; // 기본 줌 레벨
  if (latDiff < 0.01 && lngDiff < 0.01) zoomLevel = 15; // 좁은 범위
  else if (latDiff < 0.05 && lngDiff < 0.05) zoomLevel = 11; // 중간 범위
  else if (latDiff < 0.1 && lngDiff < 0.1) zoomLevel = 8; // 넓은 범위

  const result = { center: { lat: centerLat, lng: centerLng }, zoomLevel };
  // console.log(result)
  return result
}

export default MapData;