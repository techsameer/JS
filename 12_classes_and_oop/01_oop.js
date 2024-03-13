const user = {
    username: "Sameer",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from databaase");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("sameer", 12, true)
const userTwo = new User("test", 11, false)


console.log(userOne.constructor);
// console.log(userTwo);