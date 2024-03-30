#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "enter your first number",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "enter your second number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "select any one operation",
    type: "list",
    name: "operation",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);
console.log(answer);
if (answer.operation === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
  }
  else if (answer.operation === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
  }
  else if (answer.operation === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
  }
  else{
    console.log("invalid")
  }