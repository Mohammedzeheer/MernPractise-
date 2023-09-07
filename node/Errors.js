// RangeError: Invalid array length
var arr = [1, 2, 3];
arr.length = -1; 


// EvalError: alert is not defined
eval("console.log('Hello, world!');");


// URIError: URI malformed
decodeURIComponent('%'); 



// TypeError: num.toUpperCase is not a function
var num = "Hello";
num.toUpperCase(); 


 // SyntaxError: Invalid assignment left-hand side
if (x = 10) {
    // Some code
}

// ReferenceError: variableThatDoesNotExist is not defined
console.log(variableThatDoesNotExist); 


