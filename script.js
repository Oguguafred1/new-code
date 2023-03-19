// Save data to local storage
function saveData() {
    // Get input values
    let input1Value = document.getElementById("input1").value;
    let input2Value = document.getElementById("input2").value;
    let inputFile = document.getElementById("inputFile").files[0];
  
    // Create object to store data
    let data = {
      input1: input1Value,
      input2: input2Value,
      inputFile: inputFile
    };
  
    // Store data in local storage
    localStorage.setItem("myData", JSON.stringify(data));
  }
  
  // Retrieve data from local storage and display it
  function displayData() {
    // Retrieve data from local storage
    let data = JSON.parse(localStorage.getItem("myData"));
  
    // Check if data exists
    if (data) {
      // Create output elements
      let outputDiv = document.getElementById("output");
      let input1Output = document.createElement("p");
      let input2Output = document.createElement("p");
      let inputFileOutput = document.createElement("img");
  
      // Set output element values
      input1Output.innerText = "Input 1: " + data.input1;
      input2Output.innerText = "Input 2: " + data.input2;
      inputFileOutput.src = URL.createObjectURL(data.inputFile);
  
      // Append output elements to output div
      outputDiv.appendChild(input1Output);
      outputDiv.appendChild(input2Output);
      outputDiv.appendChild(inputFileOutput);
    }
  }
  
  // Clear local storage
  function clearStorage() {
    localStorage.clear();
  }
  
  // Call displayData function when page loads
  window.onload = function() {
    displayData();
  };
  


  let p = document.getElementById('p');

  p.addEventListener('click', function(){
    p.style.color = ('red');
  });