console.log("initKakaoMap-로드시작")
kakao.maps.load( function() {
    console.log("지도 생성 시작")
    // 지도 생성
    const map = new kakao.maps.Map(
        document.getElementById('map'), {
        center: new kakao.maps.LatLng(37.576851, 126.973191),
        level: 3
    });

    // 지도 중심좌표에 마커를 생성합니다 
    const marker = new kakao.maps.Marker({ position: map.getCenter() }); 
      
    // 지도에 마커를 표시합니다
    marker.setMap(map);

    // 지도에 클릭 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
        // 클릭한 위도, 경도 정보를 가져옵니다 
        var latlng = mouseEvent.latLng; 
        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);    
        
        document.getElementById('result').innerHTML = 
            `클릭한 위치 : <br>{위도: ${latlng.getLat()}, 경도: ${latlng.getLng()}}`;

    });
    console.log("지도 생성 완료")
});
console.log("initKakaoMap-로드완료")