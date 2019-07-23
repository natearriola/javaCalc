// Project Setup
/*
- Add event handler 
// This is an invoked function, so an anonymous function with parenthesis to ope and close it.
*/

// CALC CONTROLLER
/*
- Add result in data structure 
- calculate result of display 
*/
const calcController = (function() {})();

//UI CONTROLLER
/*
- Get input value 
- display input value on UI 
- update UI 
*/
const userInterfaceController = (function() {})();

//GLPOBAL APP CONTROLLER
//Controls the whole app, can access modules by returning an object and storing the object in a variable.
const controller = (function(calcCtrl, UICtrl) {
  const resultCtrl = function() {
    // Get input data
    // Add data to calc Controller
    // Add data to the UI
    // Calculate data
    // display the data
  };
  document.querySelector(".equal").addEventListener("click", resultCtrl);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      resultCtrl();
    }
  });
})(calcController, userInterfaceController);
