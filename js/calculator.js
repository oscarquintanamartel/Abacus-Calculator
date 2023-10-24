let addSymbol = (character) => {
  document.getElementById("screen").value += character;
};

let clearScreen = () => {
  document.getElementById("screen").value = "";
};

let calculate = () => {
  let res = "Error";
  let operation = document.getElementById("screen").value;

  let operator;
  let operatorFound = false;
  let a;
  let b;

  for (i = 0; i < operation.length && operatorFound == false; i++) {
    if (isNaN(operation[i]) == false && isNaN(operation[i + 1]) == true) {
      operatorFound = true;
      operator = operation[i + 1];
      a = operation.slice(0, i + 1);
      b = operation.slice(i + 2);
      console.log(a);
      console.log(b);
    }
  }

  if (isNaN(a) == false && isNaN(b) == false) {
    a = parseInt(a);
    b = parseInt(b);

    if (operator == "+") {
      res = sumar(a, b);
    } else if (operator == "-") {
      res = restar(a, b);
    } else if (operator == "*") {
      res = multiplicar(a, b);
    } else if (operator == "/") {
      res = dividir(a, b);
    }
  } else {
    res;
  }

  console.log(res);
  document.getElementById("screen").value = res;
};

let sumar = (a, b) => a + b;
let restar = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => {
  let res = "Error";

  if (b != 0) {
    res = a / b;
  }
  return res;
};
