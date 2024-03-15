class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const sameer = new User("sameer")
// console.log(sameer.createId());   // TypeError: sameer.createId is not a functio


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher = new Teacher("teacher1", "teacher1@google.com")
// console.log(teacher.createId())      // TypeError: teacher.createId is not a function
