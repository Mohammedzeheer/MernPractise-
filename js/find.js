// const array=[3,4,5,6,7,8,3,2]
// const fin= array.find(findfunction)

// function findfunction(value){
//     return value % 2 ==0
// }

// console.log(fin)

const array=[3,4,5,6,7,8,3,2]
const fin= array.find((value)=>value%2==0)

console.log(`find : `,fin)

const fil= array.filter((total,value)=>value%2==0)

console.log(`filter :`,fil)