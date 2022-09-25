// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


function buildTable(data) {
  tbody.html("");
  // Add the forEach Function
  data.forEach((dataRow) => {
   // Append 
    let row = tbody.append("tr");
  // Loop Through Data Rows
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}





//function handleClick() {
  // Grab the datetime value from the filter
  //let date = d3.select("#datetime").property("value");
  //let filteredData = tableData;
   // Check to see if a date was entered and filter the
  // data using that date.
  //if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    //filteredData = filteredData.filter(row => row.datetime === date);
  //}
   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  //buildTable(filteredData);
//}
// Attach an event to listen for the form button
//d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
//buildTable(tableData);





// Challenge


// 1. Create a variable to keep track of all the filters as an object.
var filters = {};
// 3. Use this function to update the filters. 
function updateFilters() {
  // 4a. Save the element that was changed as a variable.
  let updatedElement = d3.select(this)
  // 4b. Save the value that was changed as a variable.
  let updatedValue = d3.event.target.value;
  // 4c. Save the id of the filter that was changed as a variable.
  let updatedID = d3.event.target.id;
  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  if (updatedValue){
    filters[updatedID] = updatedValue;
  }
  else{
    delete filters[updatedID];
  }
  // 6. Call function to apply all filters and rebuild the table
  filterTable();
}
// 7. Use this function to filter the table when data is entered.
function filterTable() {
  // 8. Set the filtered data to the tableData.
  filteredData = tableData;
  console.log(filters)
  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([key,value]) => {
    filteredData = filteredData.filter(tableEntry => tableEntry[key] === value);
  });
  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData)
}
// 2. Attach an event to listen for changes to each filter
d3.select("#datetime").on("change",updateFilters);
d3.select("#city").on("change",updateFilters);
d3.select("#state").on("change",updateFilters);
d3.select("#country").on("change",updateFilters);
d3.select("#shape").on("change",updateFilters);
// Build the table when the page loads
buildTable(tableData);
