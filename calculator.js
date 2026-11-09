const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }

    return a / b;
}

function multiply(a, b){
  return a * b;
}

function average(numbers){
  const sum = numbers.reduce((total, number) => total + number, 0);
  return sum / numbers.length;
}

function factorial(number){
  let result = 1;

  for(let i = 1; i <= number; i++){
    result *= i;
  }

  return result;
}

function sumNaturalNumbers(number){
  let result = 0;

  for(let i = 1; i <= number; i++){
    result += i;
  }

  return result;
}

function quadraticFormula(a, b, c){
  const discriminant = (b * b) - (4 * a * c);

  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  return [x1, x2];
}


// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {
  
  add: add,
  subtract: subtract,
  average: average,
  factorial: factorial,
  sumNaturalNumbers: sumNaturalNumbers,
  quadraticFormula: quadraticFormula,
  divide: divide,
  multiply: multiply
};