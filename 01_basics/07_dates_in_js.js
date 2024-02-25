// Dates

let myDate = new Date()
console.log(typeof myDate);

console.log(myDate.toString());     // Sun Feb 25 2024 18:04:46 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Sun Feb 25 2024
console.log(myDate.toISOString());  // 2024-02-25T18:05:27.773Z
console.log(myDate.toJSON());       // 2024-02-25T18:05:56.512Z
console.log(myDate.toLocaleDateString());  // 2/25/2024
console.log(myDate.toLocaleString());   // 2/25/2024, 6:07:38 PM

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

let myCreatedDateTwo = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDateTwo.toLocaleString());  // 1/23/2023, 5:03:00 AM

// let date = new Date("2023-01-14")
// console.log(date.toLocaleString());     // 1/14/2023, 12:00:00 AM

let date = new Date("01-14-2023")
console.log(date.toLocaleString());     // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString("default", {
    weekday: "long",
})) // Sunday