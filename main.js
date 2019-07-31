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
    },
    clearCalc: function() {
      UIController.clearDOM.addEventListener("click", function() {
        if (UIController.clearDOM.classList.contains("clear")) {
          UIController.currentVal.innerHTML = 0;
        }
      });
    }
- Get input value 
- display input value on UI 
- update UI 
*/

const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
};

function inputDigit(digit) {
  const { displayValue } = calculator;
  // Overwrite `displayValue` if the current value is '0' otherwise append to it
  calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
}

function updateDisplay() {
  const display = document.querySelector(".current-value");
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector(".allButtons");
keys.addEventListener("click", event => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("oper")) {
    console.log("operator", target.value);
    return;
  }

  if (target.classList.contains("decimal")) {
    console.log("decimal", target.value);
    return;
  }

  if (target.classList.contains("clear")) {
    console.log("clear", target.value);
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});

/*

const Calculator = {
  displayValue: "0",
  firstInput: null,
  secondInput: false,
  operator: null
};

function getInput(digit) {
  const displayValue = Calculator.displayValue;
  Calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
}
function updateValue() {
  const display = document.querySelector(".current-value");
  display.value = Calculator.displayValue;
}

updateValue();
const keys = document.querySelector(".allButtons");
keys.addEventListener("click", event => {
  const target = event.target;
  if (!target.matches("btn")) {
    return;
  }
  if (target.classList.contains("decimal")) {
    console.log("num", target.value);
    return;
  }
  if (target.classList.contains("oper")) {
    console.log("oper", target.value);
    return;
  }
  if (target.classList.contains("clear")) {
    return;
  } else {
    console.log("num", target.value);
    getInput(target.value);
    updateValue();
  }
});
*/
/***********
 * const UIController = (function() {
  const keys = document.querySelector(".allButtons");
  keys.addEventListener("click", event => {
    const { target } = event;
    if (!target.classList.contains("btn")) {
      return;
    }
    if (target.classList.contains("num")) {
      console.log("num", target.value);
      return;
    }
    if (target.classList.contains("oper")) {
      return;
    }
    if (target.classList.contains("clear")) {
      return;
    }
    getInput(target.value);
    displayValue();
  });

  return {
    displayValue: "0",
    firstInput: null,
    secondInput: false,
    operator: null,
    clearDOM: document.querySelector(".clear")
  };

  function displayValue() {
    const currentValue = document.querySelector(".current-value");
    currentValue.value = UIController.displayValue;
  }
  function getInput(digit) {
    const { displayVal } = UIController;
    UIController.displayValue =
      displayVal === "0" ? digit : UIController.displayValue + digit;
  }
})();

const calcController = (function(UICtrl) {
  return {
    getValue: function() {
      let valueDOM = document.querySelector(".currentValue").innerHTML;
      valueDOM = parseInt(valueDOM, 10);
      return valueDOM;
    }
  };
})(UIController);
 */

/*
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
*/
//GLPOBAL APP CONTROLLER
//Controls the whole app, can access modules by returning an object and storing the object in a variable.

/***********
 * const controller = (function(calcCtrl, UICtrl) {
  // Display Value //

  //Gets current Value //
  const equalCtrl = function() {
    // get input display
    // clear display
  };
  document.querySelector(".equal").addEventListener("click", equalCtrl);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      equalCtrl();
    }
  });
})(calcController, UIController);
 * 
 */

// read input data
