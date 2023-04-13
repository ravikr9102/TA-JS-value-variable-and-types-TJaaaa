// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number = +prompt("Enter a number");

if(number % 2 === 0){
  console.log('number is even')
} else {
  console.log('number is odd');
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");

if(num1 > num2 ){
  alert(`${num1} is greater`)
} else {
  alert(`${num2} is greater`)
}

// 3. Convert the above code using`?` terniary operator

let numbers = +prompt("Enter a number");

numbers % 2 === 0 ? console.log('number is even') : console.log('number is odd');

let numOne = +prompt("Enter first number");
let numTwo = +prompt("Enter second number");

numOne > numTwo ? alert(`${numOne} is Max Value`) :  alert(`${numTwo} is Max Value`)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt("Enter the house name");

if(houseName === "stark"){
  console.log('Winter is coming');
} else if( houseName === "lannister"){
  console.log('A lannister always pays his debt')
} else {
  console.log('All men must die')
}

// 5. Convert the above code using`?` terniary operator
let house = prompt('Enter the name of the house');

house === 'stark'
  ? alert('Winter is coming')
  : house === 'lannister'
  ? alert('A lannister always pays his debt')
  : alert('All men must die');

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let monthName = prompt('Enter the name of the month');

switch (monthName) {
  case 'January':
    alert('The number of days are 31');
    break;
  case 'February':
    alert('The number of days are 28');
    break;
  case 'March':
    alert('The number of days are 31');
    break;
  case 'April':
    alert('The number of days are 31');
    break;
  case 'May':
    alert('The number of days are 31');
    break;
  case 'June':
    alert('The number of days are 31');
    break;
  case 'July':
    alert('The number of days are 30');
    break;
  case 'August':
    alert('The number of days are 30');
    break;
  case 'October':
    alert('The number of days are 31');
    break;
  case 'November':
    alert('The number of days are 30');
    break;
  case 'December':
    alert('The number of days are 31');
    break;
  default:
    alert('Not a valid input');
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let Salary = +prompt('Enter your salary');

switch (true) {
  case Salary <= 20000:
    let tax = (Salary * 10) / 100;
    alert(`Your in-hand amount ${Salary - tax}`);
    break;
  case Salary <= 40000:
    let discount = (Salary * 20) / 100;
    alert(`Your in-hand amount ${Salary - discount}`);
    break;
  case Salary > 50000:
    let rupees = (Salary * 30) / 100;
    alert(`Your in-hand amount ${Salary - rupees}`);
    break;
  default:
    alert('Not a valid input');
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = +prompt('Enter your marks');

switch (true) {
  case marks > 100:
    alert(`Marks can't be greater than 100`);
    break;
  case marks > 80 && marks < 100:
    alert(`Grade A`);
    break;
  case marks > 50 && marks < 80:
    alert(`Grade B`);
    break;
  case marks > 30 && marks < 50:
    alert(`Grade C`);
    break;
  default:
    alert(`Grade D`);
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt("What is the weather like outside?");

if(weather === 'sunny') {
  alert(`Wear a T-shirt`);
} else if( weather === "rainy") {
  alert(`Don't forget to take your raincoat`);
} else if( weather === 'hot') {
  alert(`Get a hanky`);
} else if( weather === 'freezing') {
  alert(`Get your sweeter on`)
} else {
  alert(`Not a valid input`)
}
