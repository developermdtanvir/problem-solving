/*
 *Title : Javascript Scope test importance : hoasting
 * Description : scope implimant with function
 */

const bonus = 10;

function sum(num1, num2) {
  let result = num1 + num2 + bonus;
  if (result > 20) {
    var mood = "happy";
    //  let mood = "happy"; output cannot access for global
    // const mood = "happy"; output : cannot access for global
    console.log(mood);
  }
  console.log(mood);
  return result;
}

const output = sum(20, 20);
