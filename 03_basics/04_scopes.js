function one() {
    const username = "sameer"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) ReferenceError: website is not defined

    two()
}

one()

if(true)
{
    const uname = "sameer"
    if(uname === "sameer") {
        const website = " youtube"
        console.log(uname + website)
    }
    // console.log(website)  // ReferenceError: website is not defined
}
// console.log(uname)  // ReferenceError: uname is not defined




// ++++++++++++++++  interesring ++++++++++++++

console.log(addOne(5))          // No error
function addOne(num) {
    return num+1
}

addOne(5)



// addTwo(5)                // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}

addTwo(5)