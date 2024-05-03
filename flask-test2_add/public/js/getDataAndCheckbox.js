document.addEventListener('DOMContentLoaded', async  function() {
// async function getDataAndCheckbox() {
    try {
        const response = await fetch('/getData2');
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

        // const dataContainer3 = document.getElementById('dataContainer3')
        // dataContainer3.innerText = dataContainer3.innerText + " " + JSON.stringify(jsonData) 
        
});
} catch (error) {
        console.error("Error parsing JSON from URL:", error);
}

// }

     });


    


