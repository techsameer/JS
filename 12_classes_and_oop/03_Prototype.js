// let myName = "Sameer     "
// let text = "abc     "

// console.log(myName.truelength());


let myheros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is: ${this.spiderman}`);
    }
}


Object.prototype.sameer = function(){
    console.log(`Sameer is present in all objects`);
}


heroPower.sameer()
myheros.sameer()

Array.prototype.heySameer = function(){
    console.log(`Sameer says hello`);
}

myheros.heySameer()
// heroPower.heySameer()


const user = {
    name: "username",
    email: "test@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// Modern Approcah
Object.setPrototypeOf(TeachingSupport, Teacher)


let annotherUsername = "testUser      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

annotherUsername.trueLength()
"sameer".trueLength()
"ice".trueLength()