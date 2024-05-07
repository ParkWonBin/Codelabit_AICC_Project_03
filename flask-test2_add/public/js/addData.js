async function addData() {

   await fetch('/addData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            // 데이터를 테이블에 추가
            const table = document.getElementById('inputTable').getElementsByTagName('tbody')[0];
            const row = table.insertRow();
            row.insertCell(0).innerHTML = data.건물면적;
            row.insertCell(1).innerHTML = data.용도지역;
            row.insertCell(2).innerHTML = data.위도;
            row.insertCell(3).innerHTML = data.경도;
            row.insertCell(4).innerHTML = data.주소;
            row.insertCell(5).innerHTML = data.주소지역;
        })
        .catch(error => console.error('Error:', error));


}