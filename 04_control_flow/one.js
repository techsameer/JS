// if

const isUserLoggedIn = true
const temperature = 41

if(temperature < 50) {
    console.log("Temperature less than 50")
}
else {
    console.log("Temperature is greater than 50")
}
/*
    <, >, <=, >=, ==, ===
*/


// Scope in control flow :

/*
const score = 200

if(score > 100){
    let power = "fly"
    console.log(`User power : ${power}`)
}

console.log(`User power : ${power}`)

*/


// Shorthand Notation :

const balance = 1000

// if(balance > 500) console.log("Test"), console.log("Test2");

if (balance < 500) {
    console.log("Less than 500")
}
else if(balance < 750){
    console.log("Less than 750")
}
else if(balance < 900){
    console.log("Less than 900")
}
else {
    console.log("Greater than 900")
}




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allowed to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}