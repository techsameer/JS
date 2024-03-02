const user = {
    Username: "Sameer",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.Username} , welcome to website`);
        // console.log(this)
    }
}

// this keyword is used to access current context

user.welcomeMessage()       // sameer , welcome to website
user.Username = "Sam"
user.welcomeMessage()       // Sam , welcome to website

// console.log(this);          {}


// function chai() {
//     let username = "Sam"
//     console.log(this.username);             // undefined
// }

// chai()

// this keyword only refers to context in objects



// const chai = function () {
//     let username = "Sam"
//     console.log(this.username);             // undefined
// } 


// ***********************  Arrow function  **************

const chai = () => {
    let user = "sameer"
    console.log(this)               // {}
}


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2, 3));

// Implicit return 

const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(3,4));