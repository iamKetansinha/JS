const promise1 = new Promise(function(resolve, reject) {
    // Do an async task
    // DB call, cryptography, network
    setTimeout(function() {
        console.log("Async task is completed");
        resolve()
    }, 1000)
    
})

// relation to resolve
promise1.then(function() {
    console.log("Promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2 is completed");
        resolve()
    }, 1000)

}).then(function() {
    console.log("Promise 2 resolved");
})

const promise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: 'Ketan', email: 'ketan@examplecom'})
    }, 1000)
    
})

promise3.then(function(user) {
    console.log(user);
})

const promise4 = new Promise(function(resolve, reject) {
    setTimeout(function(params) {
        let error = true
        if (!error) {
            resolve({username: "Ketan", password: 1234})
        } else{
            reject('ERROR: Something went wrong!')
        }
        
    }, 1000)
})

promise4.
then(function(user) {
    console.log(user);
    return user.username
})
.then(function(username) {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(() => {
    console.log('The promise is either resolved or rejected!');
})



const promise5 = new Promise(function(resolve, reject) {
    setTimeout(function(params) {
        let error = true
        if (!error) {
            resolve({username: "JavaScript", password: 12345})
        } else{
            reject('ERROR: Something went wrong with JS!')
        }
    }, 1000)
})

async function consumePromise5() {
   try {
    const response = await promise5
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromise5()

// async function getUser() {
//     try {
//      const response = await fetch('https://api.github.com/users/iamKetansinha')
//      const data = await response.json()
//      console.log(data);
//     } catch (error) {
//      console.log('ERROR: Could Not Fetch User');
//     }
// }

// getUser()

fetch('https://api.github.com/users/iamKetansinha').
then((response) => {
    return response.json()
}).
then((response) => {
    console.log(response);
}).
catch((error) => console.log(error))