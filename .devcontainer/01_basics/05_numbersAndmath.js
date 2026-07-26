const score = 100
//console.log(score);

const balance = new Number(500)
//console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 143.8606

//console.log(otherNumber.toPrecision(4));

const hunderd = 100000000
// console.log(hunderd.toLocaleString()); //US standard
// console.log(hunderd.toLocaleString('en-IN')); //Ind standard

//**********Maths**********

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(5.4));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(5.9));
// console.log(Math.min(4,5,8,3,2,7));
// console.log(Math.max(4,5,8,3,2,7));

console.log(Math.random()); // value between 0 - 1
console.log(Math.random()*10); // for value between 0 - infinity
console.log((Math.random()*10) + 1); // to avoid 0


// Generic formula for value between a particular range
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
