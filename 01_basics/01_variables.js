const accountId = 144553
let accountEmail = "sameerkr@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2  // Not allowed => const variables can not be changed

accountEmail = "abc@gmail.com"
accountPassword = "212121"
accountCity = "Chennai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])