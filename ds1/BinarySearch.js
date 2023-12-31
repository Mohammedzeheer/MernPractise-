//  // Binary Search
//  function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
  
//       if (arr[mid] === target) {
//         return mid; // Return the index of the target element if found
//       } else if (arr[mid] < target) {
//         left = mid + 1; // Search in the right half of the array
//       } else {
//         right = mid - 1; // Search in the left half of the array
//       }
//     }
  
//     return -1; // Return -1 if the target element is not found
//   }

//   // Example usage:
//   const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
//   const target = 23;

//   console.log("Binary Search:", binarySearch(arr, target));


//   //// My code -------------------------------------------------------

// const arra=[2,4,6,7,8,9]
// let start=0
// let end=arra.length-1
// const find= 7

// while(start<=end){
//  let mid= Math.floor(start+(end-start)/2)
//   if(arra[mid]==find)
//   {
//     console.log(mid)
//   }
//   if (arra[mid]<find)
//   {
//       start=mid+1
//   }else{
//       end=mid-1
//   }
// } 




///binary search in recursion -----------------------------------
function binarySearchRecursive(arr, find, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor(start + (end - start) / 2);

  if (arr[mid] === find) {
    return mid;
  } else if (arr[mid] < find) {
    return binarySearchRecursive(arr, find, mid + 1, end);
  } else {
    return binarySearchRecursive(arr, find, start, mid - 1);
  }
}

// // Example usage:
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const elementToFind = 6;

// const resultIndex = binarySearchRecursive(array, elementToFind, 0, array.length - 1);
// console.log(resultIndex);


// function binarysearch(array,target,start,end){
//    if(start>end){
//     return -1
//    }
//  let mid=Math.floor(start+(end-start)/2)
//    if (array[mid]==target){
//      return mid;
//    }
//    if(array[mid]<target){
//     return binarysearch(array,target,mid+1,end)
//    }
//    else{
//     return binarysearch(array,target,start,mid-1)
//    }
// }

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(binarysearch(array1,5,0,array1.length))

// let array = [1,2,3,4,6,7,8]
// let start=0
// let end=array.length-1
// let find = 6

// let BinarySearch = ()=>{
//     let mid=Math.floor(start+ (end/2))
//     if(array[i]<array[mid]){
//         for(let i=0;i<mid;i++){
//           array[i]==find
//         }
//     }else{
//         for(let i=0;i>mid;i++){
//             array[i]==find
//           } 
//     }
// }

// let array = [1, 2, 3, 4, 5, 6, 7];
// let start = 0;
// let end = array.length - 1; 
// let target = 6;

// while(start<=end){
//     let mid = Math.floor((start+end)/2)
//     if(array[mid]===target){
//         console.log(mid)
//         break;
//     }else if(array[mid]<target){
//         start = mid+1
//     }else {
//         end = mid-1
//     }
// }


// const binarySearch = (array,target,start,end )=>{
//  let mid = Math.floor((start+end)/2)
//  if(array[mid]===target){
//     console.log(mid)
//     return 
//  }else if (array[mid]<target){
//    return binarySearch(array,target,mid+1,end)
//  }else{
//     return binarySearch(array,target,mid,mid-1)
//  }
// }
// let array = [1, 2, 3, 4, 5, 6, 7];
// binarySearch(array,5,0,array.length-1)




function binarySearch (array,target,start,end){
    let mid=Math.floor((start+end)/2)
    if(array[mid]===target){
        console.log(mid)
        return
    }else if(array[mid]<target){
        return binarySearch(array,target,mid+1,end)
    }else{
        return binarySearch(array,target,start,mid-1)
    }
}
let array = [1, 2, 3, 4, 5, 6, 7];
binarySearch(array,3,0,array.length-1)


function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5))



// function binarySearch(a,target,start,end){
//   let mid=Math.floor((start+end)/2)
//   if(a[mid]==target){
//      console.log(mid)
//      return
//   }
//   else if(a[mid]<target){
//      return binarySearch(a,target,mid+1,end)
//   }else{
//      return binarySearch(a,target,start,mid-1)
//   }
//  }
//  let a=[2,3,4,5,6,67]
//  target= 4
//  binarySearch(a,target,0,a.length-1)