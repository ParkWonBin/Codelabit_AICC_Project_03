import React from 'react';
import { Map, MapMarker} from 'react-kakao-maps-sdk'


export function MapData(props) {
  return (<>
    <img src={props.src} alt="이미지 없음 ㅠㅠ" width="700" height="700" />

    <Map center={{ lat: 33.5563, lng: 126.79581 }}style={{ width: "80%", height: "360px" }}>
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
      <div style={{color:"#000"}}>Hello World!</div>
      </MapMarker>
    </Map>
  </>)
}

export default MapData;