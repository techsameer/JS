const userEmail = []

if (userEmail) {
    console.log("Got the user Email")
}
else {
    console.log("Don't have user email")
}

/*

    Falsy values :
            false, 0, -0, BigInt 0n, "", null, undefined, NaN

    Truthy values :
            true, "0", 'false', " ", [], {}, function() {}

*/


if (userEmail.length === 0) {
    console.log("Empty Array");
}


const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}




// Nullish Coalesing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10          // 5
// val1 = null ?? 10       // 10
// val1 = undefined ?? 15  // 15
val1 = null ?? 10 ?? 15    //10

console.log(val1)



// Ternary Operator

// syntax : condition ? true statement : false statement

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80")