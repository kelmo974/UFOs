// importing table data from data.js
const tableData = data; 

// point ot HTML table using D3
var tbody = d3.select("tbody");

// build table and clear filters
function buildTable(data) {
  tbody.html("");  

    data.forEach((dataRow) => {
    let row = tbody.append("tr");
    
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      });
    });
  }

//  function handleClick() {
//     // Grab the datetime value from the filter
//     let date = d3.select("#datetime").property("value");
//     let filteredData = tableData;
  
//      // Check to see if a date was entered and filter the
//     // data using that date.
//     if (date) {
//       // Apply `filter` to the table data to only keep the
//       // rows where the `datetime` value matches the filter value
//       filteredData = filteredData.filter(row => row.datetime === date);
//     };
  
//      // Rebuild the table using the filtered data
//     // NOTE: If no date was entered, then filteredData will
//     // just be the original tableData.
//     buildTable(filteredData);
//   };

// build function for click filtering
function handleClick() {
let date = d3.select("#datetime").property("value");
let filteredData = tableData;
//if statement to pull specific records by date
if (date) {
filteredData = filteredData.filter(row => row.datetime === date);
};
//put together table with filter request
buildTable(filteredData);
};

 //listen for form button click
 d3.selectAll("#filter-btn").on("click", handleClick);

 // display original table
 buildTable(tableData);