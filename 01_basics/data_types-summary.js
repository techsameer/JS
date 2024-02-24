// Primitive => call by value

/* 
7 types :
            String, Number, Boolean, null, undefined,
            symbol, BigInt
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id == anotherId);  // false

const bigNumber = 3456789456123789451221245n
console.log(typeof bigNumber);

// ***********************************************

// Non Primitive => Reference type

/*
    Arrays, Objects, Functions
*/

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Sameer",
    age: 18
}

const myFunction = function(){
    console.log("Hello World");
}

/*
    For typeof operations :-

        Type of val                 Result
        
        undefined                  undefined
        Null                        object
        Boolean                     boolen
        Number                      number
        String                      string
*/



// https://262.ecma-international.org/5.1/#sec-11.4.3