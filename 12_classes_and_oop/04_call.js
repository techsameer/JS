function setUserName(username) {
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    setUserName.call(this, username)

    this.email = email
    this.password = password    
}

const test = new createUser("test", "test@google.com", "123")

console.log(test);