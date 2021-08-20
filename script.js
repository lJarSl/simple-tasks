/**
 * Задание 5
 * Заполнить двумерный массив NxN уникальными случайными числами
 */

const DIMENTION = 10; // Changing Value

let countOperation = 0;

console.time("FirstWay");
const getRandomValues = (dimension) => {
  let arrTemp = new Set();

  while (arrTemp.size < dimension ** 2) {
    let newNumber = Math.round(Math.random() * 100);
    arrTemp.add(newNumber);
    countOperation++;
  }

  // console.log(arrTemp, arrTemp.size);

  return [...arrTemp];
};

let arrTemp = getRandomValues(DIMENTION);
let arrResult = [];

while (arrTemp.length > 0) {
  countOperation++;
  arrResult.push(arrTemp.splice(0, DIMENTION));
}

console.log(arrResult);
console.log("чисел", DIMENTION ** 2);
console.log("операций ", countOperation);
console.timeEnd("FirstWay");