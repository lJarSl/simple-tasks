/*
 * Задание 1
 * Напишите код, который при клике на любой
 * div внутри root будет выводить в консоль его id.
 */

const clickHandler = (e) => {
  const target = e.target;

  if (target.tagName === "DIV" && target.id !== "root") {
    console.log(target.id);
  }
};

const root = document.getElementById("root");

root.addEventListener("click", clickHandler);

/**
 * Задание 2
 * Напишите код, который сделает из массива объект
 */

const createObj = (arr) => {
  const reducer = (accumulator = {}, value) => {
    accumulator[value.name] = value.value;
    return accumulator;
  };
  return arr.reduce(reducer, {});
};
var arr = [
  { name: "width", value: 10 },
  { name: "height", value: 20 }
];

console.log(createObj(arr)); // {width: 10, height: 20}

/**
 * Задание 3
 * Реализуйте сортировку пузырьком
 * Функция bubleSort должна быть чистой
 */

function bubleSort([...arr]) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length; j >= i; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

const arr2 = [5, 2, 7, 0, 3, 1];
console.time("FirstWay");
const sortedArr = bubleSort(arr2);
console.timeEnd("FirstWay");
console.log(sortedArr); // [0, 1, 2, 3, 5, 7]
