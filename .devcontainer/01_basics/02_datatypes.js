"use strict";  //treat all JS code as newer version

//alert(5+5) --> We are using node, not browser

let name = "Ketan"
let age = 20
let isLoggedIn = false

/*
number --> range(2^53)
bigint
string -->""
boolean --> true/false
null --> representation of empty value --> standalone value
undefined -->variable is declared but not defined yet
symbol -->unique

object
*/

// console.table([typeof "Ketan", typeof age])
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

//******Type conversion******

let score = "67abc" // 
let score2 = undefined

//console.log(typeof(score2))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber); // NaN

/*
"67" --> 67
"67abc" --> NaN
true --> 1; false --> 0
null --> 0
undefined --> NaN
*/

let isLogged = "ketan"

let booleanIsLogged = Boolean(isLogged)
//console.log(booleanIsLogged);

/*
1 --> true; 0 --> false
"" --> false
"ketan" --> true
*/

let someNumber = 75
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//********Operations********

let value = 2
let negValue = -value
//console.log(negValue);

//console.table([2+2, 2-2, 2*2, 2/2, 2**2, 2%2])

let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2
//console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

let x = 3;
const y = x++; // postfix increment

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; // prefix increment

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
