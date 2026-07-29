// basic syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
//}

const month = "jan"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Febuary");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    case "may":
        console.log("May");
        break;
    case "june":
        console.log("June");
        break;

    default:
        console.log("Default key match");
        break;
}

//________Truthy And Falsy value________

// assume's value shall be true or shall be false

// const userEmail = "k@ketan.ai"

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values ---> false, 0, -0, BigInt 0n,
// null, undefined, NaN

// truthy values ---> except all falsy value,
// "0", 'false', " ", [], {}, function(){}

// const arr = []

// if (arr.length === 0) {
//     console.log("Array is empty");
// }

const obj = {}

if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}