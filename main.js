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

//UI CONTROLLER
/*
- Get input value 
- display input value on UI 
- update UI 
*/
const UIController = (function() {
  return {
    btn: document.querySelectorAll(".btn"),
    currentVal: document.querySelector(".currentValue"),
    btnClick: function() {
      for (let btn of UIController.btn) {
        btn.addEventListener("click", function() {
          const btnClicked = this.innerHTML;
          if (UIController.currentVal.innerHTML === "0") {
            UIController.currentVal.innerHTML = btnClicked;
          } else {
            UIController.currentVal.innerHTML += btnClicked;
          }
        });
      }
    }
  };
})();

const calcController = (function(UICtrl) {
  return {
    clear: function() {
      if (UICtrl.btnClicked === "AC") {
        UIController.currentVal.innerHTML = "0";
        UIController.inputStorage = [];
      }
    }
  };
})(UIController);

//GLPOBAL APP CONTROLLER
//Controls the whole app, can access modules by returning an object and storing the object in a variable.
const controller = (function(calcCtrl, UICtrl) {
  UIController.btnClick();
  const clear = function() {
    calcCtrl.clear();
  };
  document.querySelector(".clear").addEventListener("click", clear);
  const equalCtrl = function() {
    // get input display
    let input = UICtrl.inputStorage;
    console.log(input);
    // clear display
  };
  document.querySelector(".equal").addEventListener("click", equalCtrl);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      equalCtrl();
    }
  });
})(calcController, UIController);

// read input data
