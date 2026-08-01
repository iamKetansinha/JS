// for loop______________

for (let index = 0; index < 10; index++) {
    const element = index
    //console.log(element);
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
    //console.log(`Tabel of ${i}`);

    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value: ${j}, and inner loop ${i}`);
        //console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let myArr = ["flash", "batman", "superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
    
}

// break and continue___________

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        //console.log("Detected 5");
        break // break and come out of the loop based on the condition
    }
    //console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        //console.log("Detected 5");
        continue // skip the current iteration and move on the next one
    }
    //console.log(`Value of i is ${index}`);
    
}

// while loop______________

let index = 1
while (index <= 10) {
    //console.log(`Value of index is: ${index}`);
    index = index + 2
}

let myArr1 = ["flash", "batman", "superman"]

let arr = 0
while (arr < myArr1.length) {
    //console.log(`Value of arr ${arr} is ${myArr1[arr]}`);
    arr++
}

// do-while loop_____________

//let score = 1
let score = 11

do {
    //console.log(`Score is ${score}`);
    score++
} while (score <= 10);