// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);        // false
console.log(null == 0);       // false
console.log(null >= 0);       // true

/*
The reason is that an equality check == and comparisions
> < >= <= work diffrently.
Comparision convert null to a number treating it as 0.
That's why :-
                null >= 0 is true
                null > 0 is false
*/

console.log(undefined == 0);     // false
console.log(undefined > 0);      // fasle
console.log(undefined < 0);      // false

// strict check ===   (checks also for same data types)

console.log("2" === 2);          // flase