// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]);

// Array copy opertion creates shallow copies of array
// Shallow copies means the reference is shared instead of values
// Deep copies menans the value is shared
// JavaScript arrays are resizable
// JavaScript array can contain elements of multiple data types


// Array Methods

myArr.push(6)
myArr.push(7)
console.log(myArr);


myArr.unshift(0)        //Adds element in front
// myArr.pop()             // Removes element from back
console.log(myArr)

myArr.shift()       // Removes element from front
console.log(myArr);    

console.log(myArr.includes(9));         // true or false

const newArr = myArr.join()
console.log(newArr);                    // Converts to string

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)             // Includes end points and removes that portion from original array
console.log(myn2);
console.log("C ", myArr);