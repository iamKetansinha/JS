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
console.log(loginUserMessage());