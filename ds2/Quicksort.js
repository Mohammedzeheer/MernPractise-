
const arr=[4,3,2,5,6,7,1,3]

function quicksort(arr){
    if(arr.length<2){
        return 
    }    
    
  let pivot= arr.length-1
  let left=[]
  let right=[]

  for(let i=0;i<arr.length;i++){
    if(arr[i]<pivot){
        left.push(arr[i])
    }else{
        right.push(arr[i])
    }
  }

  return [...quicksort(left),pivot,...quicksort(right)]
}

const a=[4,3,2,5,6,7,1,3]
function quick(a){
   if(a.length < 2){
      return a; 
   }

   let pivot = a[a.length - 1];
   let left = [];
   let right = [];

   for(let i = 0; i < a.length - 1; i++){
      if(a[i] < pivot){
         left.push(a[i]);
      } else {
         right.push(a[i]);
      }
   }

   return [...quick(left), pivot, ...quick(right)];
}

console.log(quick(a));

// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
  
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
  
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
  
//     return [...quickSort(left),pivot,...quickSort(right)]
//   }
  
// //   const arr=[789,4,6,-1,-3]
//   const sorted=quickSort(arr)
//   console.log(sorted)
  




