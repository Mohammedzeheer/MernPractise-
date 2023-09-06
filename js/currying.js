// // Regular function without currying
// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3)); // Output: 5

// // Curried version of the add function
// function curriedAdd(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// const addTwo = curriedAdd(2);
// console.log(addTwo(3)); // Output: 5


function currying(a){
    return function(b){
        return a+b
    }
}
let result= currying(3)(6)
console.log(result)


function add(a){
    return function(b){
        return a+b
    }

    }
        let result1= add(5)(67)
        console.log(result1)