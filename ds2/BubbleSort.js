 let array=[2,3,7,6,1,5]
 
//  for(let i=0;i<array.length;i++){
//     for(let j=i+1;j<=array.length;j++){
//         if(array[i]>array[j]){
//           [array[i],array[j]]= [array[j],array[i]]
//         }
//     }
//  }
//  console.log(array)

let i=0
 while(i<array.length){
    let j=i+1
    while(j<=array.length){
        if(array[i]<array[j]){
            [array[i],array[j]]= [array[j],array[i]]
          }
        j++
    }     
    i++
 }
 console.log(array)