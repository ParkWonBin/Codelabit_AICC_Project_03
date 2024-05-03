async function loadData() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    // const selectedColumns = Array.from(checkboxes).map(checkbox => checkbox.value);
    
    const response = await fetch('/getData2');
    const jsonData = await response.json();

    const tbody = document.getElementById('dataTable3').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // 기존 데이터를 클리어합니다.

    let selectedColumns = [];

    checkboxes.forEach(chk => {
        selectedColumns.push(chk.value);
    });

    jsonData.forEach(data => {
        const row = tbody.insertRow();
        selectedColumns.forEach(column => {
            const cell = row.insertCell();
            cell.textContent = data[column];
        });
    });

  
}    