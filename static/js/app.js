// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = [];

// 3. Use this function to update the filters. 
function updateFilters(fieldData) {
    let filteredData = tableData
    
    // 4a. Save the element that was changed as a variable.
    fieldElem = d3.select(fieldData.element)
    // 4b. Save the value that was changed as a variable.
    fieldVal = fieldData.value;
    // 4c. Save the id of the filter that was changed as a variable.
    fieldID = fieldData.id
  
    console.log(fieldID)
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    
    filteredData = filteredData.filter(row => row.fieldID === fieldVal);
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    
  
    // 10. Finally, rebuild the table using the filtered data
    
  }
  
// 2. Attach an event to listen for changes to each filter
fieldData = [];
fields = d3.selectAll("input")
for (let i = 0; i <= 4; i++) {
  fieldData.push({
    key: fields.nodes()[i].id,
    value: fields.nodes()[i].placeholder
  })
}


console.log(fieldData)

//fieldData.push
d3.selectAll("input").on("change", function(){
  
  fields = d3.selectAll("input")
  //console.log(fields.nodes()[1])
  for (let i = 0; i <= 4; i++) {
    if (fieldData[i].value != fields.nodes()[i].value)
    {
      console.log("Field Changed")
      updateFilters(fields.nodes()[i])
    }
  } 
});


// Build the table when the page loads
buildTable(tableData);
