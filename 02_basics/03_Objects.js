// singelton
// Object.create

// Object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "Sameer",
    "full name": "Sameer Kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Kolkata",
    email: "sameer@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym]) // string


JsUser.email = "sameer@openAi.com"
//Object.freeze(JsUser)
JsUser.email = "sameer@microsoft.com"

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

console.log(JsUser.greeting());          // [Function (anonymous)]

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greetingTwo())