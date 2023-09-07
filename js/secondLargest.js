// const array = [13, 4, 11, 5, 6, 9, 7, 4, 10];
// let large = array[0];
// let secondLarge = -Infinity; 

// for (let i = 1; i < array.length; i++) {
//   if (array[i] > large) {
//     secondLarge = large;
//     large = array[i];
//   } else if (array[i] > secondLarge) {
//     secondLarge = array[i];
//   }
// }

// console.log("Largest: " + large);
// console.log("Second Largest: " +  secondLarge );



const array= [13,4,11,5,6,9,7,4,10]
let large = array[0]
let secondLarge=-Infinity; 
for(let i=1;i<array.length;i++){
  if(array[i]>large){
    large=array[i]
  }else if(secondLarge<array[i]){
    secondLarge=array[i]
  }
}
console.log(large)
console.log(secondLarge)