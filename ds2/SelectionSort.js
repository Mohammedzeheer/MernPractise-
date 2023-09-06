//selection sort 

// let a=[6,1,8,7,9,2]
// let i;
//  function selectionSort(){
//     for (i=0;i<a.length-1;i++){
//         let min=i
//         for(let j=i+1;j<a.length;j++){
//             if(a[j]<a[min]){
//                 min=j
//             }          
//         }
//         if(min!=i){
//             [a[i] ,a[min]] =[a[min],a[i]]
//           }
//     }
//     return a
//  }

//  console.log(selectionSort());


// for(let i=0;i<array.length;i++){
//     min=i
//     for(let j= i+1;j<array.length;j++){
//         if(array[j]<array[min]){
//             min=j
//         }
//     }
//     if(min!=i){
//         [array[i],array[j]]=[array[j],array[i]]
//     }
// }



// let a=[6,1,8,7,9,2]
// for(let i=0;i<a.length; i++){
//     let min=i
//     for(let j=i+1;j<=a.length;j++){
//         if(a[j]<a[min]){
//             min=j
//         }
//     }
//     if(min!=i){
//         [a[i],a[min]]=[a[min],a[i]]
//     }
//     console.log(a)
// }



// for(let i=1;i<a.length;i++){
//  let temp = a[i]
//  let j= i-1
//  while(j>=0&& a[j]>temp){
//        a[j+1]=a[j]
//        j--
//  }
//  a[j+1]= temp
// }

// console.log(a)


// for (let i = 0; i < a.length - 1; i++) {
//     for (let j = 0; j < a.length - i - 1; j++) {
//         if (a[j] > a[j + 1]) {
//             [a[j], a[j + 1]] = [a[j + 1], a[j]];
//         }
//     }
// }


// console.log(a)