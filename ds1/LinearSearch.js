


// // Linear Search
// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === target) {
//         return i; // Return the index of the target element if found
//       }
//     }
//     return -1; // Return -1 if the target element is not found
//   }
  

//   // Example usage:
//   const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
//   const target = 23;
  
//   console.log("Linear Search:", linearSearch(arr, target));


// ////-------------------  Testing ---------------------------

// const array= [3,4,5,6,7,8]
// const find=7

// function linearsearch(array,find){
//   for(let i=0;i<array.length;i++){
//     if(array[i]==find){
//       return i
//     }
//   }
//   // return -1
// } 
// var result=linearsearch(array,find)
// console.log(linearsearch(array,find))


// ////-------------------  linear search in recursion  ---------------------------

// function lnearsearc(array,find,index){
//   if (array[index]==find){
//     return index
//   }
//   return lnearsearc(array, find, index + 1);
// }

// console.log(lnearsearc(array,find,0))


//////-----------------------------------practice--------------------------------------------

const array= [3,4,5,6,7,8]
let target = 5
for(let i=0; i<array.length;i++){
  if(array[i] == target){
    console.log(i)
    return
  }
}

