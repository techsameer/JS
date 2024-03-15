class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return `${this._email.toUpperCase()}`
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}sameer`
    }

    set password(value){
        this._password = value
    }
}

const sameer = new user("sam@abc.com", "test")
console.log(sameer.email);