async function getAndDisplayData2() {
    try {
        // 쿼리 스트링의 'data' 값을 JSON 객체로 파싱합니다.
        const response = await fetch('/getData2');
        const data = await response.json();
    
    
        // 기존 행을 삭제
        const tableBody = document
            .getElementById('dataTable')
            .getElementsByTagName('tbody')[0];
    
            // JSON 데이터를 테이블 행으로 변환
        tableBody.innerHTML = '';
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
    
        const dataContainer = document.getElementById('dataContainer2')
        dataContainer.innerText = dataContainer.innerText + " " + JSON.stringify(data)
    
    
        } catch (error) {
            console.error("Error parsing JSON from URL:", error);
        }
    }