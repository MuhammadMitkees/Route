var result;

var operator = window.prompt("Enter operator ( either +, -, * or / ): ");

const number1 = parseInt(window.prompt("Enter first number: "));
const number2 = parseInt(window.prompt("Enter second number: "));

function myCalc() {
  var statment = "";
  switch (operator) {
    case "+":
      result = number1 + number2;
      statment = `${number1} + ${number2} = ${result}`;
      break;

    case "-":
      result = number1 - number2;
      statment = `${number1} - ${number2} = ${result}`;
      break;

    case "*":
      result = number1 * number2;
      statment = `${number1} * ${number2} = ${result}`;
      break;

    case "/":
      result = number1 / number2;
      statment = `${number1} / ${number2} = ${result}`;
      break;

    default:
      statment = "Invalid operator";
      break;
  }
  return statment;
}
document.write(`<h1>${myCalc(number1, number2)} </h1>`);
