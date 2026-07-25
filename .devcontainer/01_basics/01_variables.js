const accountId = 78965
let accountEmail = "ketan@google.com"
var accountPassword = "12345"
accountCity = "Bhagalpur"
let accountState;

// accountId = 123 ---> not allowed

accountEmail = "ks@gmail.com"
accountPassword = "987654"
accountCity = "Patna"

console.log(accountId);

/*
Prefer not to use var, because of issue in block scope
and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])