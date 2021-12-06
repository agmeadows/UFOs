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

// Use this function to filter the table when data is entered.
function filterTable(fieldData) {

  // Set the filtered data to the tableData.
  let filteredData = tableData
  console.log(fieldData)
  
  // Check each field and filter
  if (fieldData[0]["value"] != '')
  {
    filteredData = filteredData.filter(row => row.datetime === fieldData[0]["value"])
  }
  if (fieldData[1]["value"] != '')
  {
    filteredData = filteredData.filter(row => row.city === fieldData[1]["value"])
  }
  if (fieldData[2]["value"] != '')
  {
    filteredData = filteredData.filter(row => row.state === fieldData[2]["value"])
  }
  if (fieldData[3]["value"] != '')
  {
    filteredData = filteredData.filter(row => row.country === fieldData[3]["value"])
  }
  if (fieldData[4]["value"] != '')
  {
    filteredData = filteredData.filter(row => row.shape === fieldData[4]["value"])
  }

  console.log(filteredData)

  // Rebuild the table using the filtered data
  buildTable(filteredData);
}

// Store form defaults
fieldData = [];
fields = d3.selectAll("input")
for (let i = 0; i <= 4; i++) {
  fieldData.push({
    key: fields.nodes()[i].id,
    value: fields.nodes()[i].placeholder
  })
}

console.log(fieldData)

// Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", function(){
  
  // Store values and send to filter function
  fields = d3.selectAll("input");
  for (let i = 0; i <= 4; i++) {
    console.log("orig " + fieldData[i].value)
    console.log("new " + fields.nodes()[i].value)
    if (fieldData[i].value != fields.nodes()[i].value)
    {
      console.log(fields.nodes()[i].id + " Field Changed");
      fieldData[i].value = fields.nodes()[i].value.toLowerCase()
      filterTable(fieldData);
      break;
    }
  } 
});


// Build the table when the page loads
buildTable(tableData);
