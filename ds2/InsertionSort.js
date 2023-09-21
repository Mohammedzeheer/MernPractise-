
let a = [3,4,5,6,7,1,4]
// for(let i=1;i<array.length;i++){
//      temp= array[i]
//      j = i-1

//      while(j>=0 && array[j]>temp){
//         array[j+1] = array[j]
//         j--
//      }
//      array[j+1]=temp
// }

// console.log(array)

// for(let i=1;i<array.length;i++){
//     let temp= array[i]
//      let j=i-1 
//      while(j>=0& array[j]>temp){
//       array[j+1]=array[j]
//       j--
//      }
//      a[j+1]=temp
// }


// for(let i=1;i<array.length;i++){
//     let temp= array[i]
//     let j=i-1
//     while(j>=0 && array[j]>temp){
//         a[j+1] = a[j]
//         j--
//     }
//     a[j+1]= temp
// }


// for(let i=1;i<a.length;i++){
//     let temp=a[i]
//     let j=i-1
//     while(j>=0 && a[j]>temp){
//         a[j+1]=a[j]
//         j--
//     }
//     a[j+1]=temp
// }

// console.log(a)


for(let i=1;i<a.length;i++){
    let temp=a[i]
    let j=i-1
    while(j>=0&&a[j]>temp){
        a[j+1]=a[j]
        j--
    }
    a[j+1]=temp
}

console.log(a)