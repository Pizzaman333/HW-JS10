// -- 1 -- //
const actionWithFunc = function (string, action) {
  action(string);
  return;
};
const writeLine = (string) => console.log(string);
const isConfirmed = confirm("Вивести 'Hello world!' в консоль?");
if (isConfirmed === true) {
  actionWithFunc("Hello world!", writeLine);
}

// -- 2 -- //
const targetNum = Number.parseInt(Math.random() * (2 - 1) + 1);
const userPrompt = Number(prompt("Вгадайте число від 1 до 100"));
const shouldCheck = confirm("Перевірити чи ви вгадали?");
if (shouldCheck === true) {
if (targetNum === userPrompt) {
  alert("Відповідь правильна!");
} else {
  alert("Відповідь не правильна!");
}
}

// -- 3 -- //

// -- 4 -- //
const applyCallbackToEachElement = (arr, callback) => {
  const newArr = [];
  for (const number of arr) {
    newArr.push(callback(number));
  }
  return newArr;
};
const arr = [1, 2, 3, 4, 5];
const squareCallback = (number) => Math.pow(number, 2);
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

// -- 5 -- //
const calculateDiscountedPrice = (price, discount, callback) => {
  console.log(`Discounted price: ${callback(price, discount)}`);
  return;
};
const showDiscountedPrice = (number, percent) =>
  number - (number * percent) / 100;
calculateDiscountedPrice(100, 10, showDiscountedPrice); 
