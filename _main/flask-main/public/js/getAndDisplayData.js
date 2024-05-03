// 함수를 전역 스코프에서 정의합니다.
async function getAndDisplayData() {
    try {
        // 쿼리 스트링의 'data' 값을 JSON 객체로 파싱합니다.
        const response = await fetch('/getData'); // localhost 현재 포트로 요청하게 됨
        const data = await response.json();
        
        ////////////////////////////////////
        // 이전 데이터 삭제 여부 선택
        const shouldClearPrevData = false
        ////////////////////////////////////
        
        // 테이블 UI 선택
        const tableBody = document
            .getElementById('dataTable2')
            .getElementsByTagName('tbody')[0];

        // 기존 데이터 삭제
        if(shouldClearPrevData){
            tableBody.innerHTML = '';
        }

        // JSON 데이터를 행추가
        data.forEach(item => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = item.번호;
            row.insertCell(1).textContent = item.건물면적;
            row.insertCell(2).textContent = item.용도지역;
            row.insertCell(3).textContent = item.위도;
            row.insertCell(4).textContent = item.경도;
            row.insertCell(5).textContent = item.주소;
            row.insertCell(6).textContent = item.주소지역;
        });

        const dataContainer = document.getElementById('dataContainer')
        if(shouldClearPrevData){
            dataContainer.innerText = '';
        }
        dataContainer.innerText +=  JSON.stringify(data)
        

    } catch (error) {
        console.error("Error parsing JSON from URL:", error);
    }
}
