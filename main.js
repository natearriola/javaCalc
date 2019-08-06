// Project Setup
/*
- Add event handler 
// This is an invoked function, so an anonymous function with parenthesis to ope and close it.
*/

// Get values of each button
//Create an object for the calculator
const Calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operand: null
};
//input Digits
function updateDisplay() {
  const currentValue = document.querySelector(".current-value");
  currentValue.value = Calculator.displayValue;
}
updateDisplay();

function inputDigits(digit) {
  const { displayValue } = Calculator;
  Calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
}

function clearInput(digit) {
  Calculator.displayValue = digit;
}

// Click event to get the values of the btns
const btns = document.querySelector(".allButtons");
btns.addEventListener("click", event => {
  const { target } = event;
  if (target.classList.contains("oper")) {
    console.log(target.value);
  } else if (target.classList.contains("decimal")) {
    console.log(target.value);
  } else if (target.classList.contains("clear")) {
    clearInput(target.value);
    console.log(target.value);
  }
  inputDigits(target.value);
  updateDisplay();
});
