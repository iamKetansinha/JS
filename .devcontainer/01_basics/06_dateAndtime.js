let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

//let myCreatedDate = new Date(2006, 2, 14)
//console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date(2006, 2, 14, 5, 3)
//let myCreatedDate = new Date("2000-1-10") // YY-MM-DD
let myCreatedDate = new Date("1-10-2000") // MM-DD-YY
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp/1000));

let newDate = myCreatedDate.toLocaleString('default', {
    weekday: "long",
    month: "2-digit"
})
console.log(newDate);
