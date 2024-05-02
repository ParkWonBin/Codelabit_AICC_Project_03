async function getAndDisplayGeoData() {
    const query = document.getElementById('geoquery').value;
    try {
        // 결과 표시할 div 선택
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '검색중...';

        // 데이터를 전송할 때는 이렇게 body 에 실어보낸다.
        const response = await fetch('/getGeoData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: query })
        });

        // 요청을 받아서 json으로 파싱한다.
        const data = await response.json();

        // 결과를 화면에 그린다.
        resultDiv.innerHTML = '';
        if (data.isFound) {
            resultDiv.innerHTML = `
                <p>주소: ${data.address}</p>
                <p>위도: ${data.latitude}</p>
                <p>경도: ${data.longitude}</p>
                <p>경계 상자: [${data.boundingbox.join(', ')}]</p>
            `;
        } else {
            resultDiv.innerText = '해당 주소를 찾을 수 없습니다.';
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}