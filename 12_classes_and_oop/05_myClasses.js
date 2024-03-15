// ES6

// class user {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new user("user1", "user1@google.com", "123")
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());



// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const user2 = new User("user2", "user2@google.com", "123")
console.log(user2.encryptPassword());
console.log(user2.changeUsername());