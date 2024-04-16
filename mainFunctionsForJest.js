// dSantos module 18 mainFunctionsForJest.js

function addition(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Input is not a number");
  }
  return a + b;
}


function multiplication(y, z) {
  if (typeof y !== "number" || typeof z !== "number") {
    throw new Error("Input is not a number");
  }
  return y * z;
}

//Version 01 using long form function
const someArray001 = [1, 1, 1];
const someArray002 = [9, 1, 1, 1, 4, 15, -1];

function concatOdds(arrayOne, arrayTwo) {
  const allNumbers =
    arrayOne.every((num) => typeof num === "number") &&
    arrayTwo.every((num) => typeof num === "number");
  if (!allNumbers) {
    throw new Error("Input arrays must contain only numbers");
  }
  const comboArray001 = arrayOne.concat(arrayTwo);
  return comboArray001.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
}
try {
  const arrayConcatResult = concatOdds(someArray001, someArray002);
  console.log(arrayConcatResult);
} catch (error) {
  console.log(error.message);
}

/* Old version Do not use
const comboArray001 = someArray001.concat(someArray002);
const orderedArray001 = comboArray001.filter(concatOdds).sort((a, b) => a - b);
function concatOdds(inputArray) {
  if (typeof inputArray !== "number") {
    console.error("Input must be a number");
  }
  return inputArray % 2 !== 0;
} */

module.exports = { addition, multiplication, concatOdds };
