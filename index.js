// code here, goodluck!!

// syntax nazi mode-ON //
"use strict";

const prompt = require("prompt-sync")();

function getValidNumberInput(promptMessage) {

    // empty variable so we could store or update the value later //
    let num ;

    while (true) {
        const input = prompt(promptMessage);
        num = Number(input);

        if(!isNaN(num)) {
            return num;
        }   else {
            console.log(" Invalid input! Please enter a valid number!!");
        }
    }
}

function getValidOperatorInput(promptMessage) {
  const validOperators = ['+', '-', '*', '/', '%', '**'];
  let operator;
  while (true) {
    operator = prompt(promptMessage).trim();
    if (validOperators.includes(operator)) return operator;
    console.log("❌ Invalid operator! Please enter one of: +, -, *, /, %, **");
  }
}

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? "Error: Division by zero!" : a / b; }
function modulo(a, b) { return a % b; }
function power(a, b) { return a ** b; }

function analyzeResult(result) {
  const type = typeof result;
  console.log(`Type of result: ${type}`);
  
  if (type === 'number') {
    if (result > 0) console.log("✅ The result is positive.");
    else if (result < 0) console.log("⚠️ The result is negative.");
    else console.log("🟰 The result is zero.");

    if (Number.isInteger(result)) console.log("It’s an integer.");
    else console.log("It’s a floating-point number.");

    const evenOdd = result % 2 === 0 ? "Even" : "Odd";
    console.log(`The number is ${evenOdd}.`);

    if (result > 0 && result % 2 === 0) console.log("🔥 Positive and even number!");
    else if (result < 0 || result === 0) console.log("⚡ Negative or zero value detected.");
  }
  else if (type === 'string') {
    console.log(`⚠️ Error message: ${result}`);
  }
  else {
    console.log(result ?? "Result is undefined or null, something went wrong!");
  }
}




while (true) {
  const num1 = getValidNumberInput("Enter first number: ");
  const operator = getValidOperatorInput("Enter operator (+, -, *, /, %, **): ");
  const num2 = getValidNumberInput("Enter second number: ");

  let result;
  switch (operator) {
    case '+': result = add(num1, num2); break;
    case '-': result = subtract(num1, num2); break;
    case '*': result = multiply(num1, num2); break;
    case '/': result = divide(num1, num2); break;
    case '%': result = modulo(num1, num2); break;
    case '**': result = power(num1, num2); break;
    default: result = "Unknown operator!";
  }

  console.log(`\n🔹 Result: ${result}`);
  analyzeResult(result);

  const again = prompt("\nDo you want to perform another calculation? (yes/no): ").toLowerCase();
  if (again === 'no') {
    console.log("👋 Exiting calculator. Goodbye!");
    break;
  }
}



