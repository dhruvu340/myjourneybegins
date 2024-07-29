// Immediately Invoked Function Expressions (IIFE) runs immediatly and to avoid scope destuction due to some var we use this

// normalfunction-> func name (){}



/* syntax (function name(){})() or (() => {})()*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')