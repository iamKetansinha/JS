// Global Scope.....
// let a = 20
// const b = 50
// var c = 70

// console.log(a); // 20
// console.log(b); // 50
// console.log(c); // 70

//_____________Block Scope_________________
var c = 500
let a = 700

if (true) { // Block Scope......
    let a = 20
    const b = 50
    var c = 70
    //console.log("Inner: ", a); // 20
    
}

//console.log(a); // not defined
//console.log(b); // not defined
//console.log(c); // 70

//console.log(c); // 70
//console.log(a); // 700

function one(){
    const username = "ketan"

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
        
    }
    //console.log(website); // not defined ( will not execute further )
    
    two()

}

//one()

if (true){
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        //console.log(username + website)
    }
    //console.log(website); // error
}
//console.log(username); // error

//________________Intrestering____________________

//addOne(5) // return result

function addOne(num){
    return num + 1
}

//addOne(5) // return result

//addTwo(5) // error

const addTwo = function(num){
    return num + 2
}

//addTwo(5) // return result