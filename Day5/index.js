

// Calculator

// Prompt  to enter two numbers and select an operation
let number1 = parseFloat(prompt("Enter the first number:"));
let number2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Select an operation (+, -, *, /):");

let result;

// Perform the selected operation
if (operation === "+") {
  result = number1 + number2;
} else if (operation === "-") {
  result = number1 - number2;
} else if (operation === "*") {
  result = number1 * number2;
} else if (operation === "/") {
  result = number1 / number2;
} else {
  console.log("Invalid operation selected.");
}

// Display the result if it is defined
if (result !== undefined) {
  console.log("Result:", result);
}
