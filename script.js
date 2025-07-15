// script.js
// This script handles the functionality of a simple calculator.
// It allows basic arithmetic operations and handles user input from buttons.

    let input = document.getElementById("display");
let buttons = document.querySelectorAll(".buttons button");

let string = "";

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (value === "AC") {
      string = "";
      input.value = "";
    } else if (value === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    } else {
      string += value;
      input.value = string;
    }
  });
});
