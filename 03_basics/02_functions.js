// Rest operator (...) is packs all the value in an array which 
// we can use in further operations in functions

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500));     // [ 200, 400, 500 ]


function calculateCartPrice2(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200, 400, 500, 8000));  // [ 500, 8000 ]

const user = {
    username: "Sameer",
    num: 999
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and number is ${anyobject.num}`)
}

handelObject(user)      // Username is Sameer and number is 999

const user1 = {
    username: "Sameer",
    nums: 999
}

handelObject(user1)        // Username is Sameer and number is undefined


handelObject({
    username: "Sam",
    num: 199
})                          // Username is Sam and number is 199


const myArr = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArr))               // 400