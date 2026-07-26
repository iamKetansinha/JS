//Array

const myArr = [1,2,3,4,5]
const myHeros = ["shaktiman","naagraj","doga"]
//console.log(myHeros[1]);

const myArr2 = new Array(0,1,2,3,4,5)

//Array methods

myArr.push(6,7)
myArr.pop()
myArr.unshift(-1,0)
myArr.shift()

//console.log(myArr);

// console.log(myArr.includes(8))
// console.log(myArr.indexOf(11))
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//console.log(myArr);

const newArr1 = myArr.slice(1,3)
// console.log(newArr1);
// console.log("A: ",myArr);

const newArr2 = myArr.splice(1,3)
// console.log(newArr2);
// console.log("B: ",myArr);

const marvel_heros = ["hulk","ironman","spiderman"]
const dc_heros = ["superman","batman","flash"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros, ...myHeros] // spread operator
//console.log(all_new_heros);

const another_arr = [1, 2, 3, [4, 5], 6, 7, [8, [9, 10]], 11]
const real_another_arr = another_arr.flat(Infinity)
//console.log(real_another_arr);


// console.log(Array.isArray("Ketan"));
// console.log(Array.from("Ketan"));
// console.log(Array.from({name:"Ketan"})); // returns empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
