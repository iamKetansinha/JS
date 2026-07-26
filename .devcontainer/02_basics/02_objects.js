// singleton(constructor method)
//Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Ketan",
    "fullName": "Ketan Sinha",
    [mySym]: "key1",
    age: 20,
    location: "Bhagalpur",
    email: "ketan@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Thrusday"]
}

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);

// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym); // string

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "ketan@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "ketan@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello, JS_User");
}

JsUser.greeting2 = function(){
    console.log(`Hello, JS_User ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());