

function appendToDisplay(value) {
    document.getElementById('Display').value += value;
  }

  function calculate()
  {
    try{
        const result = eval(document.getElementById('Display').value);
        document.getElementById('Display').value = result;
    }
    catch(error)
    {
        document.getElementById('Display').value = "Error";
    }
  }
  
  function clearDisplay(){
    document.getElementById('Display').value = "";
  }


 // function for clear display 
function clearDisplay(){
    document.getElementById('Display').value = '';
}

//new function for the clear button
function clearButton(){
    clearDisplay();
}