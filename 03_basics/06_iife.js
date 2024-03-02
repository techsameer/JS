// Immediately Invoked Function Expressions (IIFE)


// Named IIFE
(function test(){
    console.log(`DB CONNECTED`);
})() ;


// There might be some pollution from global scope variables
// So to prevent our function from that pollution we use IIFE
// Syntax ==>
/*
        (
            function definition
        ) () ;     ====> semicolon is necessary to stop the context 

*/

// unnamed IFFE
( () => {
    console.log('DB CONNECTED TWO')
} ) ();


// IFFE with parameters
( (name) => {
    console.log(`DB CONNECTED TWO by ${name}`)
} ) ('Sameer');