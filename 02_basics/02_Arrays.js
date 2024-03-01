const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

const all_heros = marvel_heros.concat(dc_heros)
// [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
// concat function does not change the actual array 
//  but it returns a new array after concatainating the two arrays


// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Sameer"))        // false
console.log(Array.from("Sameer"));          // [ 'S', 'a', 'm', 'e', 'e', 'r' ]

// Interesting case
console.log(Array.from({name : "Sameer"}));   // []


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));          // [ 100, 200, 300 ]