const accountId = 144553
let accountEmail = "mohit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "mk@.com"
accountPassword = "21212121"
accountCity = "Nalanda" //this will act as string
accountCity = 2 //this will act as number
// let accountCity  and if we assign it here it will give reference error
console.log(typeof accountCity)

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])