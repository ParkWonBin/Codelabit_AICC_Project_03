import { Map, MapMarker } from 'react-kakao-maps-sdk';

const StaticKakaoMap = ({ props }) => {
  const { latitude, longitude, message } = props.getMapData;

  const styleMap = { width: "100%", height: "500px", margin: "auto" };
  const styleMarker = { color: "#000", padding: "5px" };

  return (
    <div className='panel'>
      <h3>지도에 데이터 표시 </h3>
      <Map center={{ lat: latitude, lng: longitude }} style={styleMap}>
        <MapMarker position={{ lat: latitude, lng: longitude }}>
          <div style={styleMarker}>{message}</div>
        </MapMarker>
      </Map>
    </div>
  );
}

export default StaticKakaoMap;
