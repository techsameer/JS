const user = {
    username: "Sameer",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from databaase");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);