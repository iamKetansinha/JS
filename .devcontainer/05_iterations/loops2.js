// for of loop____________

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    //console.log(num);
}

const greeting = "Hello World!"

for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);
}

// Maps____________
// unlike objects maps holds Unique value and Preserve order.

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")

//console.log(map);

for (const keys of map) {
    //console.log(keys);
}

for (const [keys, values] of map) {
    //console.log(keys, ":-", values);
}

const myObj = { // objects are not iterable using for of loop
    game1: 'NFS',
    game2: 'PUBG',
    game3: 'COD'
}

//for (const [key, value] of myObj) {
    //console.log(key, value);
//}

//for in loop________________

const myObj2 = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python'
}

for (const key in myObj2) {
    //console.log(`${key} is extension for ${myObj2[key]}`);
}

const programming = ['c++', 'js', 'python', 'java']

for (const key in programming) {
   //console.log(programming[key]);
}

const coding = ['c++', 'js', 'python', 'java', 'golang']

// forEach loop_____________
// takes a callback function 
// it does not return any value
coding.forEach( function (item) {
    //console.log(item);
})

coding.forEach((item) => {
    //console.log(item);
})

function printMe(item) {
    //console.log(item);
}

//coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
})

const myCoding = [
    {
        language: 'C++',
        languageFileName: 'cpp'
    },
    {
        language: 'Java',
        languageFileName: 'java'
    },
    {
        language: 'Python',
        languageFileName: 'py'
    }
]

myCoding.forEach( (item) => {
    //console.log(item.language);
    //console.log(item.languageFileName);
})

// filter___________________
// unlike forEach loop filter returns a value baseed on the given condition.
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNum = myNum.filter( (num) => num > 5)

const newNum = []

myNum.forEach( (num) => {
    if ( num > 5) {
        newNum.push(num)
    }
})

//console.log(newNum);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map( (num) => { return num + 10 })

const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

//console.log(newNums);


const numbers = [1, 2, 3, 4, 5]

const myTotal = numbers.reduce( (acc, currVal) => {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
}, 0)

//console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'Python course',
        price: 999
    },
    {
        itemName: 'Mobile Dev',
        price: 5999
    },
    {
        itemName: 'Data Science',
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
