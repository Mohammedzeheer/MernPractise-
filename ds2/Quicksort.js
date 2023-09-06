
// const arr=[4,3,2,5,6,7,1,3]

// function quicksort(arr){
//     if(arr.length<2){
//         return 
//     }    
    
//   let pivot= arr.length-1
//   let left=[]
//   let right=[]

//   for(let i=0;i<arr.length;i++){
//     if(arr[i]<pivot){
//         left.push(arr[i])
//     }else{
//         right.push(arr[i])
//     }
//   }

//   return [...quicksort(left),pivot,...quicksort(right)]
// }






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
  



function binarySearch(a,target,start,end){
 let mid=Math.floor((start+end)/2)
 if(a[mid]==target){
    console.log(mid)
    return
 }
 else if(a[mid]<target){
    return binarySearch(a,target,mid+1,end)
 }else{
    return binarySearch(a,target,start,mid-1)
 }
}
let a=[2,3,4,5,6,67]
target= 4
binarySearch(a,target,0,a.length-1)
