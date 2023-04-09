// Using alert, prompt, confirm and console

/*

1. Do the following using `alert` function. When you find any square bracket
 replace that to the value of the variable.

*/

let num1 = 21;
let num2 = 32;

// - Create a variable named `language` and store the value of `JavaScript` in it
let language = 'javaScript';

// - Alert message saying `I am learning [language]`
alert(`I am learning ${language}`);

// - Alert `The value of num1 is [num1] and the value of num2 is [num2]`
alert(`The value of num1 is ${num1} and the value of num2 is ${num2}`);

// - Alert `The sum of [num1] and [num2] is [num1 + num1]`
alert(`The sum of ${num1} and ${num2} is ${num1 + num1}`);

// 2. Do the following using `alert`, `prompt` and `confirm` and `console`

// - Using prompt accept the name of the user and store it a variable names `userName`
let userName = prompt('What is your name?');
// - Using prompt accept the profession of the user and store it a variable names`userProfession`
let userProfession = prompt('What is your profession?');
// - Using confirm check if user is adult or not and store the value in `isAdult`
let isAdult = confirm('Are you Adult?');
// - Alert message `I am [userName] a [userProfession]`
alert(`I am ${userName} a ${userProfession}`);
// - Log the message `I am [userName] a [userProfession]`
console.log(`I am ${userName} a ${userProfession}`);
// - Alet message `Username: [userName]
alert(`Username: ${userName}
         Adult: ${isAdult}
         Profession: ${userProfession}
       `);
// Adult: [isAdult]
// Profession: [userProfession]` (it should be in three different lines)
// - Log the message using console.log `Username: [userName]
// Adult: [isAdult]
// Profession: [userProfession]` (it should be in three different lines)

console.log(`Username: ${userName}
             Adult: ${isAdult}
             Profession: ${userProfession}
          `);

/*
. Addition using prompt

  - Accept two number values form user and store them in `numA` and`numB`.

  - Alert the sum of both numbers. [numA + numB]
  - Alert [numA - numB]
  - Alert [numA * numB]
  - Log using console.log [numA - numB]
  - Log using console.log [numA * numB]
*/

let num3 = prompt("Enter First Number")
let num4 = prompt("Enter Second Number")

alert(`${num3 + num4}`)
alert(`${num3 - num4}`)
alert(`${num3 * num4}`)
console.log(`${num3 - num4}`);
console.log(`${num3 * num4}`);