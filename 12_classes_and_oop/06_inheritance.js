class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const user1 = new Teacher("user1", "user1@email.com", "123")
user1.addCourses()

const user2 = new user("user2")
user2.logMe()

console.log(user1 == user2);  // false

console.log(user1 instanceof Teacher);  // true

console.log(user1 instanceof user);    // true

console.log(user2 instanceof Teacher);  // false
