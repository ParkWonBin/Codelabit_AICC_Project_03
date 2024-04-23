import React from "react";
// import { useEffect } from "react";

function KakaoMap() {
    // const addScript = (src, callback) => {
    //     const script = document.createElement("script");
    //     script.src = src;
    //     script.async = true; // 스크립트를 동기적으로 로드
    //     script.onload = callback; // 스크립트 로드 완료 시 콜백 함수 실행
    //     document.body.appendChild(script);
    // };

    // useEffect(() => {
    //     // 첫 번째 스크립트 로드
    //     addScript("/script/kakaoMap.js", () => {
    //         // 이곳에 지연 후 실행하고 싶은 코드를 넣습니다.
    //         setTimeout(function() {
    //             // 첫 번째 스크립트 로딩이 완료된 후 두 번째 스크립트 로드
    //             addScript("/script/initKakaoMap.js", () => {
    //                 console.log("Both scripts loaded successfully");
    //             });
    //           }, 500);
    //     });
    // }, []);

    return (
        <div>
            {/* <h1>Kakao Maps in Action</h1>
            <div id="map" style={{width: "500px", height: "400px"}}></div>
            <div id="result" style={{width: "500px", height: "400px"}}>여기에 지도 위치 정보를 표시합니다.</div> */}
        </div>
    );
}

export default KakaoMap;
