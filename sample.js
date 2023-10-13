// var comment = "Greetings from Medium!";
// var displayComment = () => console.log(comment);
// window.displayComment();

const { json } = require("stream/consumers")

// const a='hello' + 10 + 10
// console.log(a)

// const b=10 + 10 + 'hello' + 10 - 10
// console.log(b)


// class node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     add(value){
//     let newnode=new node(value)
//     if(!this.head){
//         this.head=newnode
//         this.tail=newnode
//         return
//     }
//     this.tail.next=newnode
//     this.tail=newnode
//     }

//   print(){
//     let curr=this.head
//     while(curr){
//       console.log(curr.value)
//       curr=curr.next
//     }
//   }

//    addBefore(value, newvalue) {
//     const newnode = new node(newvalue);
//     let curr = this.head;
//       if (value === curr.value) {
//         newnode.next = curr;
//         this.head = newnode;
//         return
//       }

//     while (curr.next) {
//         if (value === curr.next.value) {
//           newnode.next = curr.next;
//           curr.next = newnode;
//           return;
//         }
//         curr = curr.next;
//       }
//   }


//   deleteEnd() {
//     if (!this.head) {
//       return; // Empty list, nothing to delete
//     }

//     if (!this.head.next) {
//       this.head = null; // Only one node in the list, remove it
//       return;
//     }

//     let curr = this.head;
//     while (curr.next.next) {
//       curr = curr.next;
//     }

//     curr.next = null; // Remove the last node
//   }

//   deleteHead() {
//     if (!this.head) {
//       return; // Empty list, nothing to delete
//     }

//     this.head = this.head.next; // Update head to the next node
//   }


// }


// const ls=new linkedList()

// ls.add(23)
// ls.add(45)
// ls.add(32)
// ls.add(67)
// ls.add(56)

// // ls.addBefore(67,34)
// ls.deleteEnd()
// ls.print()


// let fruit = 'apple';

// switch(fruit) {
//   case 'apple':
//     console.log('This is an apple.');
//     break;
//   case 'banana':
//     console.log('This is a banana.');
//     break;
//   case 'cherry':
//     console.log('This is a cherry.');
//     break;
//   default:
//     console.log('Unknown fruit.');
// }

// let array = []
// console.log(typeof(array));

// let a =[3,5,6,1,21,6]

// for(let i=1;i<a.length;i++){
//    let j= i-1
//    let temp= a[i]
//   while(j>=0 && a[j]>=temp){
//     a[j+1]=a[j]
//     j--
//   }
//  a[j+1]=temp
//  console.log(a);
//   }

// const a= ((b)=>{
//   setTimeout(()=>{
//     console.log('hello ')
//   },3000)
//    b()
// })

// const b=(()=>{
//   console.log(1+5)
// })
// a(b)

// const a=(()=>{
//   let ineterval=setInterval(()=>{
//     console.log('hello')
//   },2000)

//   return () => {
//     clearInterval(ineterval);
//     console.log('Interval cleared');
//   };
// })

// const array = [2, 3, 4, 5, 1, 9]

// for (let i = 0; i < array.length - 1; i = i + 2) {
//     for (let j = 0; j < array[i]; j++) {
//         console.log(array[i + 1])
//     }
//     for (let j = 0; j < array[i + 1]; j++) {
//         console.log(array[i])
//     }
// }


// class node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class bst{
//     constructor(){
//         this.root=null
//     }

//     add(value){
//          let newnode=new node(value)
//         if(!this.root){
//             this.root=newnode 
//         }else{
//             this.addnode(this.root,newnode)
//         }
//     }

//     addnode(root,newnode){
//         if(newnode.value<root.value){
//             if(root.left==null){
//                 root.left=newnode
//             }else{
//                 this.addnode(root.left,newnode)
//             }
//         }else{
//             if(root.right==null){
//                 root.right=newnode
//             }else{
//             this.addnode(root.right,newnode)
//             }
//         }
//     }

//     pretraversal(){
//         this.pretraversalnode(this.root)
//     }

//     pretraversalnode(root){
//         if(!root){
//             return 
//         }
//         console.log(root.value);
//        this.pretraversalnode(root.left)
//        this.pretraversalnode(root.right)
//     }

//     seconlargest(){
//         let curr= this.root
//         let st
//         while(curr.right){
//             st=curr
//             curr=curr.right
//         }
//         console.log(`second Largest : `, st.value)
//     }

//     secondSmallest(){
//         let curr=this.root
//         let sm
//         while(curr.left){
//             sm=curr
//             curr=curr.left
//         }
//         console.log(`second Smallest: `, sm.value)
//     }
   
// }

// let bs=new bst()
// bs.add(23)
// bs.add(56)
// bs.add(12)
// bs.add(61)
// bs.add(9)
// bs.pretraversal()
// bs.seconlargest()
// bs.secondSmallest()

// class graph{
//     constructor(){
//     this.adjlist=new Map()
//     }

//     addVertext(value){
//     this.adjlist.set(value,new Set())
//     }

//     addEdges(vertex1,vertex2){
//         this.adjlist.get(vertex1).add(vertex2)
//         this.adjlist.get(vertex2).add(vertex1)
//     }

//     bfs(value){
//         let queue = []
//         let visted = new Set()

//         visted.add(value)
//         queue.push(value)

//         while(queue>0){
//             let currentvertex=queue.shift()
//             console.log(currentvertex) 
       
//          const adjsvertex= this.adjlist.get(currentvertex)
//           for(let neigbor of adjsvertex){
//              if(!visted.has(neigbor)){
//                 visted.add(neigbor)
//                 queue.push(neigbor)
//              }

//           }  
//         }
//     }
// }


// class node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class linkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }

//     add(value){
//         let newnode = new node(value);
//         if(!this.head){
//             this.head = newnode;
//             this.tail = newnode;
//             return;
//         }
//         this.tail.next = newnode;
//         this.tail = newnode;
//     }

//     reverse(){
//         let prev = null;
//         let current = this.head;
//         let next = null;

//         while (current != null) {
//             next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }

//         this.head = prev;
//     }

//     getTail(){
//         return this.tail;
//     }
  
//     findEnd(){
//         this.findLast(this.head)
//      }
//     findLast(curr){
//         if(curr.next==null){
//           console.log(curr)
//           return
//         }
//         this.findLast(curr.next)
//     }

//      size(){
//         let curr=this.head
//         let size=1
//         while(curr.next){
//             size++
//           curr=curr.next
//         }
//         console.log(`size: ${size}`) 
//      }

// }

// let l1 = new linkedList();
// let l2 = new linkedList();

// l1.add(34);
// l1.add(35);
// l1.add(38);
// l1.add(54);
// l1.add(84);

// l2.add(74);
// l2.add(38);
// l2.add(54);
// l2.add(84);

// let lastNodeL1 = l1.getTail();
// let lastNodeL2 = l2.getTail();

// let sum = lastNodeL1.value + lastNodeL2.value;

// // let reve= sum.toString()
// // let reversed=reve.split('').reverse().join('')
// // console.log(`reversed: ${reversed}`)

// // Convert the sum to a linked list
// let sumList = new linkedList();
// while (sum > 0) {
//     sumList.add(sum % 10);
//     sum = Math.floor(sum / 10);
// }

// // Reverse the sumList to get the correct order
// sumList.reverse();

// console.log('Reversed Sum Linked List:');
// console.log(sumList);

// l1.findEnd()
// l1.size()

// let str= ['apple', 'orange']

// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  

//   console.log(reverseString(str));

//   let reversedStr = str.map(reverseString);
  
//   console.log(reversedStr);
  
// let str = ['apple', 'orange'];

// function reverseString(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let reversed = '';
//         for (let j = arr[i].length - 1; j >= 0; j--) {
//             reversed += arr[i][j];
//         }
//         arr[i] = reversed;
//     }
//     return arr; 
// }

// console.log(reverseString(str));

// const a=12345

// function findSum(a){

//     if(a<6){
//         return a
//     }
//     return (a%10) + findSum(Math.floor(a/10))
// }

// console.log(findSum(a));

// const arr= [1,3,5]
// var canMakeArithmeticProgression = function(arr) {
//     arr.sort((a,b) => a-b)
//     let diff = Math.abs(arr[0] - arr[1])
//     for (let i = 0; i < arr.length - 1;i ++) {
//         if (diff !== Math.abs(arr[i] - arr[i+1])) {
//             return false
//         }
//     }
//     return true
     
// };

// console.log(canMakeArithmeticProgression(arr))

// class heap {
//     constructor(){
//         this.heap=[]
//     }

//     parents(i){
//      return  Math.floor((i-1)/2)
//     }

//     leftChild(i){
//         return 2 * i + 1
//     }

//     rightChild(i){
//         return 2 * i + 2
//     }
    
//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }

//     size(){
//         return this.heap.length
//     }

//     add(value){
//       this.heap.push(value)
//       this.heapup(this.size())
//     }

//     heapup(i){
//       let parent= this.parents(i)
//       while(i>=0 && this.heap[i]<this.heap[parent]){
//            this.swap(i,parent)
//            i= parent
//            parent=this.parents(i)
//       }
//     }

// }

// const a={name:'abdul',place:{native:'ksd',work:'kannur'}}
// const b=JSON.parse(JSON.stringify(a))


// b.name='abdullah'
// b.place.native='kannur'
// console.log(a)
// console.log(b)


const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 2000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 2 rejected'), 1000));

Promise.all([promise1, promise2])
  .then(result => {
      console.log('Result:', result); // Output: Result: Promise 2 rejected
  })
  .catch(error => {
      console.error('Error:', error); // Output: Error: Promise 2 rejected
  });