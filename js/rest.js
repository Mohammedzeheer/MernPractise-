// function sum(...numbers) {
//     let total = 0;
//     for (const num of numbers) {
//         total += num;
//     }
//     return total;
// }

// const result = sum(1, 2, 3, 4);
// console.log(result); // Output: 10


function printArgs(firstArg, ...restArgs) {
    console.log(firstArg);     // Prints the first argument
    console.log(restArgs);     // Prints an array of the remaining arguments
}

printArgs(1, 2, 3, 4);
// Output:
// 1
// [2, 3, 4]
