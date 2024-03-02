if(true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);      // ReferenceError: a is not defined
// console.log(b);      // ReferenceError: b is not defined
console.log(c);         // 30

// Block Scope and Global Scope

let x = 300             // variable declared in global scope

if(true)
{
    let x = 10          // variable declared il local scope
    console.log("Inner : ", x);     // Inner :  10
}
console.log("Outer : ", x);         // Outer :  300