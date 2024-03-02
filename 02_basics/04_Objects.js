// Singelton Object
// const tinderUser = new Object()    // Empty object


// Non Singelton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sameer",
            lastName: "Kumar"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const object1 = {1: "a", 2: "b"}
const object2 = {3: "a", 4: "b"}

// const object3 = {object1, object2}
// { object1: { '1': 'a', '2': 'b' }, object2: { '3': 'a', '4': 'b' } }

// const object3 = Object.assign({}, object1, object2)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const object3 = {...object1, ...object2}
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(object3)

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

// console.log(users[1].email)


console.log(tinderUser)

console.log(Object.keys(tinderUser))       // [ 'id', 'name', 'isLoggedIn' ]
// Returns the array of keys

console.log(Object.values(tinderUser))      // [ '123abc', 'Sam', false ]
// Returns the array of values

console.log(Object.entries(tinderUser))
// [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]
// Returns the nested array of key and value pair

console.log(tinderUser.hasOwnProperty('isLoggedIn'))        // true
console.log(tinderUser.hasOwnProperty('isLoggedIn'))        // false
