
// const array= [2,4,1,5,6,7,9]
// let large = array[0]
// let secondLarge =array[0]

// for(let i=0;i<array.length;i++){
//   if(array[i]>large){
//     large=array[i]
//   }
// }
// for(let i=0;i<array.length;i++){
//   if((array[i]>secondLarge) && (array[i]!=large)){
//    secondLarge=array[i]
//   }
// }
// console.log(secondLarge)

// const array= [2,4,13,5,6,9,7,4,10,14]
// let large = array[0]
// let secondLarge= array[0]

// for(let i=1;i<array.length;i++){
//   if(array[i]>large){
//     large=array[i]
//   }else if(secondLarge<array[i]){
//     secondLarge=array[i]
//   }
// }
// console.log(`large : `, large)
// console.log(`Second large :  `, secondLarge)

// const stones= [2,4,13,5,6,9,7,4,10,14]
// while(stones.length>1){
//   stones.sort((a,b)=>b-a); 
//   console.log(stones)
//   stones[1]=stones[0]-stones[1]; 
//   stones.shift();
// }
// console.log(stones[0])


// while(stones.length>1){
//   stones.sort()
// }

const stones= [12,11,4,5,6,3,2,1]
while(stones.length>1){
  stones.sort((a,b)=>b-a)
  console.log(stones)
  stones[1]=stones[0]-stones[1]
  stones.shift();
}

console.log(stones)
