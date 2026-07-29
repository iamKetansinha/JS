// Comparison Operator's --->
// <, >, <=, >=, ==, !=, === (also check type not only value)

// if statement.......
const temp = 41

// if (temp < 50) { // will execute this block only if the condition is true
//     console.log('Less than 50');
// }
// console.log("Executed"); // always execute

// if-else statement.........

// if (temp > 50) { // will execute this block only if the condition is true
//     console.log("Less than 50");
// } else { // else this block will execute
//     console.log("Greater than 50");
// }
// console.log("Executed"); // always execute

// Short-hand notation
const balance = 1000

//if (balance > 500) console.log("test"), console.log("test2"); // Implicite scope

// if-else-if statement__________
//if (balance < 250) {
//     console.log("Less than 250");
// } else if (balance < 500){
//     console.log("Less than 500")
// } else if (balance < 750){
//     console.log("Less than 750")
// } else {
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

// logical AND operator
// if (userLoggedIn && debitCard) { // both condition must be true to execute the code block.
//     console.log('Allow to buy course.');
// }

// // logical OR opreator
// if (userLoggedInFromGoogle || userLoggedInFromEmail) {
//     console.log('User logged in.');
// }

// Nullish Coalescing Operator (??): null, undefined

let val1;
//val = 5 ?? 10 // 5
//val1 = null ?? 10 // 10
//val1 = undefined ?? 10 // 10

//console.log(val1);

// Terniary operator_________

// condition ? true : false

const iceTeaPrice = 110
iceTeaPrice <= 100 ? console.log("Less than 100") : console.log("more than 100");

