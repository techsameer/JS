function sayMyName() {
    console.log("S")
    console.log("A")
    console.log("M")
    console.log("E")
    console.log("E")
    console.log("R")
}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers()           // NaN

// addTwoNumbers(3, 4)          // 7
// addTwoNumbers(3, "4")        // 34
// addTwoNumbers(3, null)       // 3

// const result = addTwoNumbers(3, 5)          // 8

// console.log("Result", result);          // undefined


function addTwoNumbers2(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result2 = addTwoNumbers2(3, 5) 
// console.log("Result", result2);                     // 8

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sameer"))

// It returns undefined if no parameters are passed
console.log(loginUserMessage());            // undefined just logged in