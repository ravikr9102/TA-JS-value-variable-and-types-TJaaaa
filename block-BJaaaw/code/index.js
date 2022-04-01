// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = +prompt("Enter a number");

if (num % 2 === 0) {
  console.log("number is even");
} else {
  console.log("number is odd");
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let numA = prompt("Enter number1");
let numB = prompt("Enter number2");

if (numA > numB) {
  console.log("max value is numA");
} else {
  console.log("max value is numB");
}
// 3. Convert the above code using`?` terniary operator

numA > numB ? alert(` max value is ${numA}`) : alert(`max value is ${numB}`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let house = prompt("enter house name");

if (house === "stark") {
  console.log("winter is coming");
} else if (house === "lannister") {
  console.log("A lannister always pays his debt");
} else {
  console.log("All men must die");
}

// 5. Convert the above code using`?` terniary operator

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let monthname = prompt("Enter the  name of the month");

switch (monthname) {
  case "January":
    alert("The number of days are 31");
    break;
  case "January":
    alert("The number of days are 28");
    break;
  case "february":
    alert("The number of days are 30");
    break;
  case "march":
    alert("The number of days are 31");
    break;
  case "april":
    alert("The number of days are 30");
    break;
  case "may":
    alert("The number of days are 30");
    break;
  case "June":
    alert("The number of days are 31");
    break;
  case "July":
    alert("The number of days are 31");
    break;
  case "august":
    alert("The number of days are 31");
    break;
  case "september":
    alert("The number of days are 31");
    break;
  case "october":
    alert("The number of days are 31");
    break;
  case "number":
    alert("The number of days are 31");
    break;
  case "december":
    alert("The number of days are 31");
    break;
  default:
    alert("Enter a valid input");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/

let salary = prompt("Enter your Salery");

switch (true) {
  case salary <= 20000:
    let tax = (salary * 10) / 100;
    alert(`Your in-hand amount ${salary-tax}`);
    break;
    default: 
    alert("Not a valid input")
    case salary <= 40000:
    let discount = (salary * 20) / 100;
    alert(`Your in-hand amount ${salary-discount}`);
    break;
    default: 
    alert("Not a valid input")
    case salary > 50000:
    let rupees = (salary * 30) / 100;
    alert(`Your in-hand amount ${salary-rupees}`);
    break;
    default: 
    alert("Not a valid input")
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

let marks = +prompt("Enter your marks");

if (marks > 100) {
  alert("Marks can't be greater than 100");
} else if (marks > 80 && marks < 100) {
  alert("Grade A");
} else if (marks > 50 && marks < 80) {
  alert("Grade B");
} else if (marks > 30 && marks < 50) {
  alert("Grade C");
} else if (marks > 0) {
  alert("Grade D");
}
let score = +prompt("enter your score");
switch (true) {
  case score > 100:
    alert("Marks can't be greater than 100");
    break;
  case score > 80 && score < 100:
    alert("Grade A");
    break;
  case score > 50 && score < 80:
    alert("Grade B");
    break;
  case score > 30 && marks < 50:
    alert("Grade C");
    break;
  case score > 0:
    alert("Grade D");
    break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

// let weather = prompt("What is weather");

if (weather == "sunny") {
  alert("Wear a T-shirt");
} else if (weather == "rainy") {
  alert("Don't forget to take your raincoat");
} else if (weather == "hot") {
  alert("Get a hanky");
} else if (weather == "freezing") {
  alert("Get your sweeter on");
} else {
  alert("Not a valid input");
}
