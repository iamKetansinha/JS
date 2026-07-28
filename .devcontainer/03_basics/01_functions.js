function addTwoNum(num1, num2){
    console.log(num1 + num2);
    
}

//addTwoNum(5, 7)
//const result = addTwoNum(5, 7)
//console.log("Result: ", result); // return undefined

function addTwoNum(num1, num2){
//    var result = num1 + num2;
//    return result;
    return num1 + num2;
}

const result = addTwoNum(5, 7)
//console.log("Result: ", result); // return result
//console.log(addTwoNum(5, 7));

function loginUserMessage(username = 'Frank'){
    if(username === undefined){
        console.log('Please enter a username');
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage('Ketan'));
//console.log(loginUserMessage());

function calculateCertPrice(...num1){
    return num1
}

//console.log(calculateCertPrice(700, 400, 599, 2049));

const user = {
    username: "ketan",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

//handleObject(user)
handleObject({
    username: "Bob",
    price: 499
})

const newArr = [47, 79, 56, 29, 38]

function returnSecondValue(getArr){
    return getArr[3]
}
//console.log(returnSecondValue(newArr));
console.log(returnSecondValue([56, 76, 39, 49]));

