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

// reverse string

const reverseStr = (str) => {
  const reversStr = str.split("").reverse().join("").toLowerCase();
  return reversStr;
};
reverseStr("Tanvir");

/*
    <-- Problem Solving part - 2 -->
*/

// calculate factorial of a number  using for loop

let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial = factorial * i;
  console.log(factorial, i);
}
console.log(factorial);
