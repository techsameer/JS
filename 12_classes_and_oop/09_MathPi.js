const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const tea = {
    name: 'ginger tea',
    price: 250,
    isavailable: true,
    
    orderTea: function(){
        console.log("Error");
    }
}

//console.log(Object.getOwnPropertyDescriptor(tea, "name"));
/*
    {
        value: 'ginger tea',
        writable: true,
        enumerable: true,
        configurable: true
    }
*/


Object.defineProperty(tea, "name", {
    //writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(tea, "name"));

for (let [key, value] of Object.entries(tea)) {
    if(typeof value !== 'function'){
        console.log(`${key}  :  ${value}`);
    }
}