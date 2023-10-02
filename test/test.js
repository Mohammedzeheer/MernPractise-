
///////-----------------------------   QUEUE  ---------------------------------------
// class node{
//     constructor(value){
//         this.value=value
//         this.next=null

//     }
// }

// class queue{
//      constructor(){
//         this.front=null
//         this.rear=null
//      }

//      enqueue(value){
//         let newNode=new node(value)
//         if(!this.rear){
//            this.front=newNode 
//            this.rear=newNode
//            return
//         }
//         this.rear.next=newNode
//         this.rear=newNode
//      }



//      dequeue(){
//         if(this.front==null){
//             console.log("empty");
//         }
//         else{
//             this.front=this.front.next
//             if(this.front==null){
//                 this.rear=null
//             }
//         }
//     }

//     display(){
//         let curr=this.front
//         while(curr){
//             console.log(curr.value)
//             curr=curr.next
//         }
//     }
// }

// const qList=new queue()
// qList.enqueue(23)
// qList.enqueue(24)
// qList.enqueue(25)
// qList.display()
// console.log(qList.dequeue())
// qList.display()


// //---------------------------  insertion sort ------------------------------------
// let a=[5,6,4,3,7,1,9]
// for(let i=1;i<a.length;i++){
//     let temp=a[i]
//     let j=i-1
//     while(j>=0&&a[j]>temp){
//         a[j+1]=a[j]
//         j--
//     }
//     a[j+1]=temp
// }

// console.log(a);


// ///------------------------------  selection sort   -------------------------------
// const a=[5,6,3,2,9,1,0,2]
// for(let i=0;i<a.length-1;i++){
//     let min=i
//     for(let j=i+1;j<a.length;j++){
//         if(a[j]<a[min]){
//             min=j
//         }
//     }
//     if (min!=i){
//         [a[i],a[min]]=[a[min],a[i]]
//         }
// }
// console.log(a)


// // ---------------------- quick sort ----------------------------------
// const arr=[4,5,2,1,9,12,11]
// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }

//     let pivot = arr[0]
//     let left=[]
//     let right=[]

//     for (let i=1;i<arr.length;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// // ---------------------- quick sort ----------------------------------


// function quicksort(a){
// if (a.length<2){
// return a
// }
// let pivot=a[0]
// let left =[]
// let right =[]

// for (let i=1;i<a.length;i++){
//     if(a[i]<pivot){
//      left.push(a[i])
//     }else{
// right.push(a[i])
//     }
// }
// return  [...quicksort(left),pivot,...quicksort(right)]
// }

// a=[3,1,7,5,4,2,8,6]
// console.log(quicksort(a));

// // ---------------------- insertion sort--------------------------------
// function insertionsort(a){
// for(let i=1;i<a.length;i++){
//   let temp=a[i]
//   let j=i-1
//   while(j>=0&&a[j]>=temp){
//     a[j+1]=a[j]
//     j--
//   }
//   a[j+1]=temp
// }
// return a
// }
// a=[3,1,7,5,4,2,8,6]
// console.log(insertionsort(a));


// // ---------------------- merge sort--------------------------------
// a=[3,1,7,5,4,2,8,6]
// console.log(mergesort(a,0,a.length-1));

//  function mergesort(a,lb,ub){
//   if(lb<ub){
//     let mid=Math.floor((lb+ub)/2)
//     mergesort(a,lb,mid)
//     mergesort(a,mid+1,ub)
//     merge(a,lb,mid,ub)

//   }
//   return a
//  }

// function merge(a, lb, mid, ub) {
//     let i = lb
//     let j = mid + 1
//     let k = lb
//     let b = []

//     while (i <= mid && j <= ub) {
//         if (a[i] < a[j]) {
//             b[k] = a[i]
//             i++
//         }
//         else {
//             b[k] = a[j]
//             j++
//         }
//         k++
//     }

//     while(i<=mid){
//         b[k]=a[i]
//         i++
//         k++
//     }
//     while(j<=ub){
//         b[k]=a[j]
//          j++
// k++
//     }
//     for(let c=lb;c<=ub;c++){
//        a[c]=b[c]
//     }
// }

//// ---------------------- selction sort--------------------------------
// const a=[3,4,1,7,2,6,9,2]
//  function slectionsort(a){
//    for (let i=0; i<a.length-1;i++)
//    {
//     let min= i
//     for (let j=i+1;j<a.length;j++){
//         if(a[j]<a[min]){
//             min=j
//         }     
//     }
//     if(min!=i){
//         [a[i],a[min]]=[a[min],a[i]]
//     }
//    } 
//   return a
//  }


// console.log(slectionsort(a));

// class stack{
//     constructor(){
//         this.arr=[]
//         this.arr2=[]
//     }

//     isempty(){
//         return this.arr.length===0
//     }
//     push(value){
//         this.arr.push(value)
//     }

//     pop(){
//         this.arr.pop
//     }
//     print(){
//         console.log(this.arr);
//     }
//     undo(){
//        this.arr2.push(this.arr.pop())
//     }
//     redo(){
//         this.arr.push(this.arr2.pop())
//     }
// }

// const l=new stack()
// l.push(34)
// l.print()


//insertion
// const a=[7,5,4,8,1,9,3]
// for(i=0;i<a.length;i++){
//     temp=a[i]
//     j=i-1
//     while(j>=0&&a[j]>=temp){
//         a[j+1]=a[j]
//         j--
//     }
//     a[j+1]=temp
// }

// console.log(a)


//selection
// const a=[7,5,4,8,1,9,3]
// for(let i=0;i<a.length-1;i++){
//     let min=i
//     for (let j=i+1;j<a.length;j++){
//         if(a[j]<a[min]){
//             min=j
//         }
//     }
//     if(min!=i){
//         [a[i],a[min]]=[a[min],a[i]]
//     }
// }
// console.log(a);

//quick
// const a=[7,5,4,8,1,9,3]
//  function quicksort(a){
//     if(a.length<2){
//         return a
//     }
//     let pivot=a[0]
//     let left=[]
//     let right=[]
//    for(let i=0;i<a.length-1;i++){
//       if(a[i]<pivot){
//         left.push(a[i])
//       }
//       else{
//         right.push(a[i])
//       }
//    }
//    return [...quicksort(left),pivot,...quicksort(right)]
//  }

//  console.log(quicksort(a));


//bubblesort
// const a=[7,5,4,8,9,3]
//  for (let i=0;i<a.length-1;i++){
//     for(let j=0;j<a.length-1-i;j++){
//         if(a[j]>a[j+1]){
//             let temp= a[j]
//             a[j]=a[j+1]
//             a[j+1]=temp
//         }     
//     }
//  }

//  console.log(a);

// class queue{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }

//     enqueue(value){
//         const newqueue=new queue(value)
//         if(this.rear==null){
//             this.front=newqueue
//             this.rear=newqueue
//         }
//         else{
//             this.rear.next=newqueue
//             this.rear=newqueue
//         }  
//     }


//     dequeue(){
//         if(this.front==null){
//             console.log("empty");
//         }
//         else{
//             this.front=this.front.next
//             if(this.front==null){
//                 this.rear=null
//             }
//         }
//     }

//     display() {
//         let curr = this.front
//         while (curr) {
//           console.log(curr.value);
//           curr=curr.next   
//         }
//     }
// }

// const l =new queue()
// l.enqueue(34)
// l.enqueue(35)
// l.enqueue(36)
// l.display()
// console.log("-----------------------");
// l.dequeue()
// l.display

// //hashtable 
//  class hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let hashvalue=0
//        for(let i=0;i<key.length;i++){
//         hashvalue+=key.CharCodeAt(i)
//        }    
//        return hashvalue%this.size
//     }

//     set(key,value){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[key,value]
//         }
//          else{
//             let sameKey=bucket.find((item)=>item[0]==key)
//                if (sameKey){
//                 sameKey[1]=value
//                }
//                else{
//                 bucket.push([key,value])
//                }
//          }
//     }

//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let sameKey=bucket.find((item)=>item[0]===key)
//             if(sameKey){
//                 return sameKey[1]
//             }
//         }
//         return undefined
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }        
//         }
//     }
//  }

//  let mm=new hashtable(20)

//  mm.set("name","zeheer")
//  mm.print()



//sorting practice
// const a = [2, 3, 4, 5, 1, 2, 74, 23]

// function quicksort(a) {
//     if (a.length < 2) {
//         return a
//     }

//     let pivot = a[0]
//     let left = []
//     let right = []
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] < pivot) {
//             left.push(a[i])
//         } else {
//             right.push(a[i])
//         }
//     }
//    return [...quicksort(left),pivot,...quicksort(right)]
// }

// function mergesort(a,lb,ub){
//  if(lb<ub){
//     let mid=Math.floor((lb+ub)/2)
//     mergesort(a,lb,mid)
//     mergesort(a,mid+1,ub)
//     merge(a,lb,mid,ub)
//  }
//  return a
// }

// function merge(a, lb, mid, ub) {
//     let i = lb
//     let j = mid + 1
//     let k = lb
//     let b = []

//     while (i <= mid && j <= ub) {
//         if (a[i] < a[j]) {
//             b[k] = a[i]
//             i++
//         } else {
//             b[k] = a[j]
//             j++
//         }
//         k++
//     }
//     while(i<=mid){
// b[k]=a[i]
// i++ 
// k++
//     }
//     while(j<=ub){

// b[k]=a[j]
// j++
// k++
//     }

//     for(let c=lb;c<=ub;c++){
//         a[c]=b[c]
//     }
// }
// console.log(mergesort(a,0,a.length-1));

class stack {
    constructor() {
        this.stack = []
        this.arr=[]
        this.str=[]
        this.str1=[]
    }

    push(value) {
      this.stack.push(value)
    }

    print() {
        console.log(this.stack);
    }

    undo(){
       this.arr.push(this.stack.pop()) 
    }

    redo(){
        this.stack.push(this.arr.pop())
    }

    addstring(data){
      this.str.push(data)
    }

printstring(){
console.log(this.str);
}

reverse(){
  while (this.str.length>0){
      this.str1.push(this.str.pop()) 
  }
  let rverse=this.str1.join('')
  console.log(rverse);
}

    
}

let s=new stack()
let strdsv=new stack()
let se="zeheer"
 
for(let i in se){
  strdsv.push(se[i])
}
let rvrs=""
 while(strdsv.length>0){
    rvrs+=strdsv.pop()
 }
console.log("hsddsf" ,rvrs);

s.push(34)
s.push(23)
s.print()
s.undo()
s.print()
s.redo()
s.print()
s.addstring("m")
s.addstring("o")
s.printstring()
s.reverse()


