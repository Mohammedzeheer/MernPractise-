const array= [2,4,13,5,6,9,7,4,10]
let large = array[0]
let secondLarge= array[0]

for(let i=1;i<array.length;i++){
  if(array[i]>large){
    large=array[i]
  }else if(secondLarge<array[i]){
    secondLarge=array[i]
  }
}
console.log(large)
console.log(secondLarge)