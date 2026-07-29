const user = {
    username: "Ketan",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`);
        //console.log(this); // refer to current context
    }
};

// user.welcomeMessage()
// user.username = "David"
// user.welcomeMessage()
//console.log(this); // {}


// function chai() {
//     let username = "ketan"
//     console.log(this.username); // undefined
// }
// chai()

// const chai = function(){
//     let username = "ketan"
//     console.log(this.username); // undefined
// }
// chai()

// const chai = () => {
//     let username = "ketan"
//     console.log(this.username); // undefined
// }
// chai()

//___________Basic syntax OF arrow function________________

// () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//console.log(addTwo(4, 8));

// const addTwo = (num1, num2) => num1 + num2 // ______Implicite return______
// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => {username: "ketan"} // undefined
//const addTwo = (num1, num2) => ({username: "ketan"}) // return object

//console.log(addTwo(5, 8));

// Immediately Invoked Function Expressions (IIFE) --->
// Global scope me defined variable's se hone wale
// pollution se bachane ke liye.

//(function defination)(execution call)

(function chai() { // named iife
    console.log(`DB CONNECTED`);
})();

( (name) => { // unnamed iife
    console.log(`DB CONNECTED_2 ${name}`)
})("Ketan")