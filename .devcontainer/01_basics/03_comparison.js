// ******Comparision******
// >, >=, <, <=, ==, !=

//console.log("2" > 1); // true
//console.log("02" > 1); // true

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true
/*
The reason is that an equality check == and comparison 
> < >= <= work differently. 
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

//++++++++++++++++++++++++++++
//Stack(Primitive), Heap(Non-primitive)

let myYoutubeName = "hiteshchoudharydotcom"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "ketan@google.com"

console.log(user1.email);
console.log(user2.email);