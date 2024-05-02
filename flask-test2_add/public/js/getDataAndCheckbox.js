// document.addEventListener('DOMContentLoaded', async  function() {
async function getDataAndCheckbox() {
    try {
        const response = await fetch('http://localhost:5001/getData2');
        const jsonData = await response.json();
        console.log('jsonData Array ==>', jsonData );
    
        document.getElementById('filterButton').addEventListener('click', function() {
        let selectedColumns = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
        checkboxes.forEach(chk => {
            selectedColumns.push(chk.value);
        });
    
        const filteredData = jsonData.map(item => {
            let filteredItem = {};
            selectedColumns.forEach(key => {
                if (item.hasOwnProperty(key)) {
                    filteredItem[key] = item[key];
                }
        });
            return filteredItem;
        });
    
    document.getElementById('output').textContent = JSON.stringify(filteredData, null, 2);
    
        });
            } catch (error) {
        console.error("Error parsing JSON from URL:", error);
        }

}


    // });