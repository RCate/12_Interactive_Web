// Assign the data from `data.js` to a descriptive variable
var UFO_Data = data;

// Select the submit button
var $submit = d3.select("#filter-btn");

var $tbody = document.querySelector("tbody");
var $inputElement = document.getElementById('datetime');

$submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Get the value property of the input element
  var inputDate = $inputElement.value;

  console.log(inputDate);

  var filteredData = UFO_Data.filter(UFO => UFO.datetime === inputDate);

  console.log(filteredData);
  
    $tbody.innerHTML = "";
    for (var i = 0; i < filteredData.length; i++) {
      // Get get the current sightings object and its fields
      var sightings = filteredData[i];
      var fields = Object.keys(sightings);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the sightings object, create a new cell at set its inner text to be the current value at the current address's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = sightings[field];
      }
    }
  
});
