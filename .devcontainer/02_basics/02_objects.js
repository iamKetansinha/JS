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

// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "ketan@google.com",
    fullname: {
        userfullname: {
            firstname: "Ketan",
            lastname: "sinha"
        }
    }
}

//console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj3 = {5: "e",6: "f"}

// const obj4 = Object.assign(obj1, obj2)
// const obj5 = Object.assign({}, obj1, obj2, obj3)
const obj5 = {...obj1, ...obj2, ...obj3}

//console.log(obj5);

const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
]

//console.log(user[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//Object destructuring........
const course = {
    name: "JS",
    price: 999,
    courseinstructor: "Hitesh"
}

const{courseinstructor} = course
const{courseinstructor: instructor} = course

console.log(instructor);
