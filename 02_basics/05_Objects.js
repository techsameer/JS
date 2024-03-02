const course = {
    name : "JS",
    price: "999",
    courseInsructor: "Sameer"
}

// course.courseInsructor

// const {courseInsructor} = course
// console.log(courseInsructor);           // Sameer

const {courseInsructor: instructor} = course
console.log(instructor);           // Sameer



// API format (JSON)

// {
//     "name": "Sameer",
//     "courseName": "JS",
//     "price": "free"
// }

// Array of objects

// [
//     {},
//     {},
//     {}
// ]


