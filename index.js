/*
 * Title : Problem Solving
 * Description : Javascript exam problem solving
 * Author : MD Tanvir Hossain
 * Date : 25/2/2023
 */

// find large number of array

let largeNumber = 0;

const numbers = [20, 30, 40, 70, 80];

// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   if (largeNumber < number) {
//     largeNumber = number;
//   }
// }
// console.log(largeNumber);

numbers.forEach((number) => {
  if (largeNumber < number) {
    largeNumber = number;
  }
});

// Remove Duplicate item of array

const roll = [20, 30, 40, 40, 50, 60, 80];

const filterRoll = [];

roll.forEach((number) => {
  const filterNumber = filterRoll.indexOf(number);
  if (filterNumber === -1) {
    filterRoll.push(number);
  }
});

/*
 * count the number word in a string
 * I am solve this problem one way but similar problem solve multiple way
 */
const article = "Hello World how are you";

const split = article.split(" ");
console.log(split.length);

// reverse string

const reverseStr = (str) => {
  const splitStr = str.split("").reverse().join("").toLowerCase();
  console.log(splitStr);
};
reverseStr("Tanvir");
