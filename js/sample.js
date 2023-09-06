// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//       continue;
//     }
//     console.log(i);
//   }
  
// let user = null;
// console.log(user);  // Output: null


// const a={
//     fname:'mohammed',
//     name:'zeheer',
// }

// const b={
//     fname:'Abdul',
//     name:'khader',
// }

// function fullname(){
//     console.log(`${this.fname} ${this.name}`)
// }
// fullname.call(b)

// const a= [2,3,4,2,1,1,4,5,6,3,3,3,3]
// for(let i =0;i<a.length-1;i++){
//     let count=1
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]==a[j]){
//             count++
//             a[j]=-1
//         }
//     }
//     if(a[i]!=-1){
//         console.log(` ${a[i]} is ${count} times`)
//     }
// }

// class node {
//     constructor(data){
//         this.data= data
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor(){

//     }
// }


// let n=6
// let temp=[]
// function climbStairs(n){
//     if(n<=2)
//     return n;
//     if(temp[n]!=undefined) 
//     return temp[n]
//     temp[n]=climbStairs(n-1)+climbStairs(n-2)
//     return temp[n]
// };

// console.log(climbStairs(n))


// const a = {
//     name: 'zeheer',
//     details: {
//       place: 'ksd'
//     }
//   };
  

//   const b=a
//   b.details.place='kannur'
//   console.log(a)


// const a= [3,4,2,1,4,5,6]
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length-i;j++){
//         if(a[j]>a[j+1]){
//             [a[j],a[j+1]]=[a[j+1],a[j]]
//         }
//     }
// }

// console.log(a)

// const a= [3,4,2,1,4,5,6]
// for(let i=1;i<a.length;i++){
//     let temp=a[i]
//     let j=i-1
//     while(j>=0&&a[j]>temp){
//         a[j+1]=a[j]
//         j--
//     }
//     a[j+1]=temp
// }

// console.log(a)

// const a= [3,4,2,1,4,5,6]
// for(let i=0;i<a.length;i++){
//     let min=i
//     for(let j=i+1;j<a.length;j++){
//         if(a[j]<a[min]){
//          min=j
//         }
//     }
//  if(min!==i){
//     [a[i],a[min]] =[a[min],a[i]]
//  }
// }

// console.log(a)


// function Quicksort(a){
//     if(a.length<2){
//        return a
//     }

//     let pivot= a[a.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<a.length-1;i++){
//       if(a[i]<pivot){
//         left.push(a[i])
//       }else{
//         right.push(a[i])
//       } 
//     }
//     return [...Quicksort(left),pivot,...Quicksort(right)]
// }
// const a= [3,4,2,1,4,5,6]
// let result= Quicksort(a)
// console.log(result)

function MergeSort(a, lb, ub) {
    if (lb < ub) {
      let mid = Math.floor((lb + ub) / 2);
      MergeSort(a, lb, mid);
      MergeSort(a, mid + 1, ub);
      Merge(a, lb, mid, ub);
    }
    return a;
  }
  
  function Merge(a, lb, mid, ub) {
    let i = lb;
    let j = mid + 1;
    let k = lb;
    let b = [];
  
    while (i <= mid && j <= ub) {
      if (a[i] < a[j]) {
        b[k] = a[i];
        i++;
      } else {
        b[k] = a[j];
        j++;
      }
      k++;
    }
  
    while (i <= mid) {
      b[k] = a[i];
      i++;
      k++;
    }
  
    while (j <= ub) {
      b[k] = a[j];
      j++;
      k++;
    }
  
    for (let c = lb; c <= ub; c++) {
      a[c] = b[c];
    }
  }
  
  const a = [3, 4, 2, 1, 5, 6];
  let result = MergeSort(a, 0, a.length - 1);
  console.log(result);
  