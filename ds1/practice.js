// class node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

const { link } = require("fs")

// class linkedlist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   add(data) {
//     const newnode = new node(data);
//     if (!this.head) {
//       this.head = newnode;
//       this.tail = newnode;
//       return;
//     }
//     this.tail.next = newnode;
//     this.tail = newnode;
//   }

//   addHead(data) {
//     const newnode = new node(data);
//     if (!this.head) {
//       this.head = newnode;
//       this.tail = newnode;
//       return;
//     }
//     newnode.next = this.head;
//     this.head = newnode;
//   }

//   addAfter(value, newvalue) {
//     const newnode = new node(newvalue);
//     let currentnode = this.head;
//     while (currentnode) {
//       if (currentnode.data == value) {
//         newnode.next = currentnode.next;
//         currentnode.next = newnode;
//         break;
//       }
//       currentnode = currentnode.next;
//     }
//   }

//   mid() {
//     let mid = this.head;
//     let temp = this.head;
//     while (temp && temp.next) {
//       mid = mid.next;
//       temp = temp.next.next;
//     }
//     console.log(`mid ${mid.data}`);
//   }

//   reverse1() {
//     let curr = this.head;
//     let prev = null;
//     let next = null;
//     while (curr) {
//       next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.tail = this.head;
//     this.head = prev;
//   }

//   reverse1() {
//     // 1 -> 2 -> 3 -> null  to  3 -> 2 -> 1 -> null  (null <- 1 <- 2 <- 3)
//     let prev = null;
//     let curr = this.head;
//     while (curr) {
//       // set next node for next itration
//       let next = curr.next;
//       // set previous node refernce to current node (in first node set null)
//       curr.next = prev;
//       // set current Node as previous node
//       prev = curr;
//       // set next Node as Current Node
//       curr = next;
//     }

//     // after while loop reversed first Node available on prev Variable
//     this.head = prev;

//     // In this
//     // First we need to set "null" on first Node next
//     // Then set a "Current value" from the Current Node
//     // when current Node is available set "next Node" from Current Node refernce
//     // Previous Node refernce to  "Current Node"
//     // Set Current Node as "Previous Node"
//     // Next Node as current Node
//   }

//   reverse() {
//     let prev = null;
//     let next = null;
//     let curr = this.head;
//     while (curr) {
//       next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
//   }

//   print() {
//     let curr = this.head;
//     while (curr) {
//       console.log(curr.data);
//       curr = curr.next;
//     }
//   }


//   middle(){
//     let curr= this.head 
//     let temp= this.head

//     while(temp&&temp.next)
// {
//    curr= curr.next
//    temp=temp.next.next
// }
//   console.log(`middle is : ${curr.data}`)
//   }

//     reverse2(){
//       let prev=null
//       let curr=this.head
//       let next=null
//       while(curr){
//         next=curr.next
//         curr.next=prev
//         prev=curr
//         curr=next
//       }
//       this.head= prev
//     }



//   insertBefore(value, newvalue) {
//     let newnode = new node(newvalue);
//     if (!this.head) {
//       return;
//     }
//     let curr = this.head;
//     if (curr.value == value) {
//       newnode.next = curr;
//       this.head = newnode;
//       return;
//     }

//     while (curr) {
//       if (curr.next.value == value) {
//         newnode.next = curr.next;
//         curr.next = newnode;
//       }
//       curr = curr.next;
//     }
//   }
// }

// const l=new linkedlist()
// l.add(5)
// l.add(6)
// l.add(7)
// l.middle()
// // l.addHead(4)
// // l.mid()
// // l.addAfter(5,9)

// l.print()
// console.log(`----------------------------`)
// l.reverse()
// // l.remove(6)
// l.print()


// class node{
//   constructor(value){
//     this.value=value
//     this.next = null
//   }
// }

// class linkedlist{

//   constructor(){
//     this.head=null
//     this.tail=null
//   }

//   add(data){
//     const newnode=new node(data)
//     if(!this.head){
//       this.head= newnode
//       this.tail=newnode
//       return
//     }
//     this.tail.next=newnode 
//     this.tail=newnode   
//   }

//   addhead(value){
//     const newnode= new node(value)
//     newnode.next=this.head
//     this.head = newnode 
//   }

//   addAfter(value,newvalue){
//     const newnode  = new node(newvalue)
//     let curr = this.head
//     while(curr){
//        if(curr.value==value){
//       newnode.next=curr.next
//       curr.next=newnode 
//     }
//     curr=curr.next
//     }
//   }


//   insertAfter(value,newValue){
//     const newnode = new node(newValue)
//     let curr= this.head 
//     while(curr){
//       if(curr.value===value){
//         if(!curr.next){
//           curr.next=newnode 
//           this.tail=newnode
//         }
//         newnode.next=curr.next
//         curr.next=newnode
//       }
//       curr=curr.next
//     }
//   }
  
//   print(){
//     let curr= this.head
//     while(curr){
//       console.log(curr.value)
//       curr=curr.next
//     }
//   }


//   reverse(){
//     if(!this.head)return 
//     let next= null
//     let prev= null
//     let curr= this.head
//  while(curr){
//     next=curr.next 
//     curr.next=prev
//     prev=curr
//     curr= next
//  }
//  this.head= prev
//   }

//   middle(){
//     let mid= this.head
//     let temp= this.head
//     while(temp && temp.next){
//       mid = mid.next
//       temp= temp.next.next
//     }
//   console.log(`mid value: ${mid.value}`) 
//   }

// }

// let l=new linkedlist()
// l.add(34)
// l.add(36)
// l.addhead(32)
// l.middle()
// l.print()
// l.reverse()
// l.print()
// // console.log(l)
// l.print()


// let array = [1, 2, 3, 4, 5, 6, 7];

// function BinarySearch(array,target,start,end){
//   let mid= Math.floor((start+end)/2)
//   if(target===array[mid]){
//     console.log(mid)
//   }
//   else if(array[mid]<target)
// {
//  return BinarySearch(array,target,start,mid)
// }else{
//   return BinarySearch(array,target,mid+1,end)
// }
// }
// BinarySearch(array,4,0,array.length)


// class node{
//  constructor(value){
//    this.value=value
//    this.next=null
//  }
// }

// class linkedList{
//    constructor(){
//     this.head=null
//     this.tail=null
//    }


//   insert(value){
//     let newnode=new node(value)
//     if(!this.head){
//       this.head=newnode
//       this.tail=newnode 
//       return
//     }
//     this.tail.next=newnode 
//     this.tail=newnode 
//   }

//   middle(){
//     let mid=this.head
//     let temp=this.head
//     while(temp && temp.next){
//      temp=temp.next.next
//      mid=mid.next
//   }
//   console.log(`middle : `,mid.value)
// }
//  remove(value){
//   if(!this.head)return

//   if(this.head.value==value){
//     this.head=this.head.next
//   }
  
//   let curr=this.head
//   while(curr){
//     if(curr.next.value==value){
//       curr.next=curr.next.next
//       if(!curr.next){
//          curr=this.tail
//       }
//       return
//     }
//     curr=curr.next
//   }

//  }
// reverse() {
//   let prev = null;
//   let curr = this.head;
//   let next = null;
//   while (curr) {
//     next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }
//   this.head = prev;
// }


// }

// let l= new linkedList()

// function secondLargest(l){
//   let large = -Infinity
//   let secLarge= -Infinity
//   let current = l.head;
//   while(current){
//     if(current.value>large){
//       secLarge = large;
//       large= current.value
//     }else if(current.value>secLarge && current.value!=large){
//       secLarge=current.value
//     }
//     current = current.next;
//   }
//   console.log(`second largest`,secLarge)
// }


// l.insert(3)
// l.insert(21)
// l.insert(78)
// l.insert(23)
// l.insert(89)
// l.insert(9)
// l.middle()
// console.log(l);
// secondLargest(l)
// console.log(`reverse`,l.reverse());


// class node {
// constructor(value){
//   this.value=value
//   this.left=null
//   this.right=null
// }
// }


// class bst {
//   constructor(){
//     this.root=null
//   }

//   add(value){
//     let newnode = new node(value)
//     if(!this.root){
//       this.root=newnode 
//     }else{
//       this.addRecursion(this.root,newnode)
//     }
//   }

//   addRecursion(root,newnode)
//   {  
//     if(root.value<newnode.value){
//       if(root.left==null){
//         root.left=newnode 
//       }else{
//         this.addRecursion(root.left,newnode)
//       }
//     }else{
//        if(root.right==null){
//         root.right=newnode
//        }else{
//         this.addRecursion(root.right,newnode)
//        }
//     }
//   }
  
  
//   inorder(){
//   this.inordertraversal(this.root)
// }


// preorder(){
//   this.preordertraversal(this.root)
// }

// preordertraversal(root){
//   if(!root){
//     return
//   }

//   this.preordertraversal(root.left)
//   this.preordertraversal(root.right)
//   console.log(root.value)
// }


// inordertraversal(root){ 
//   if(!root){
//     return 
//   }
//     this.inordertraversal(root.left)
//     console.log(root.value)
//     this.inordertraversal(root.right)
// }
// }





// let b=new bst()

// b.add(23)
// b.add(33)
// b.add(67)

// b.preorder()

// console.log(b)


// class node{
//   constructor(value){
//     this.value=value
//     this.right=null
//     this.left=null
//   }
// }

// class bst{
//   constructor(){
//     this.root=null
//   }

//   append(value){
//     let newnode=new node(value) 
//      if(!this.root){
//       this.root=newnode
//      }else{
//       this.addnode(this.root,newnode)
//      }
//   }

//   addnode(root,newnode)
// { 
//    if(newnode.value< root.value){
//     if(root.left==null){
//       root.left=newnode
//     }else{
//       this.addnode(root.left,newnode)
//     }
//    }else{
//     if(root.right==null) {
//       root.right=newnode
//     }else{
//       this.addnode(root.right,newnode)
//     }
//    }
// }

//    prenode(){
//     this.pretraversal(this.root)
//    }
//    pretraversal(root){
//     if(!root){
//       return
//     }
//       console.log(root.value)
//       this.pretraversal(root.left)
//       this.pretraversal(root.right)
//    }

// }
// let bs= new bst()
// bs.append(34)
// bs.append(14)
// bs.append(64)
// bs.append(24)
// bs.append(84)
// bs.prenode()
// console.log(bs);


// let a= 12345
// function addnum(a){
//   if(a<6){
//     return a
//   }
//  return (a%10 ) + addnum(Math.floor(a/10))
// }
// console.log(addnum(a));



// let a = 12345;
// let sum = 0;

// while(a > 0){
//   let digit = a % 10;
//   sum = sum + digit;
//   a = Math.floor(a / 10);
// }

// console.log(sum); 


// class node{
//   constructor(value){
//     this.value=value
//     this.next=null
//   }
// }

// class linkedList{
//   constructor(){
//     this.head=null
//     this.tail=null
//   }

//   add(value){
//     let newnode= new node(value)
//     if(!this.head){
//       this.head=newnode
//       this.tail=newnode
//       return 
//     }
//     this.tail.next=newnode
//     this.tail=newnode 
//   }

//   deleteEnd(){
//     if(!this.head){
//       return 
//     }
//     let curr=this.head
//     while(curr.next.next)
//     {
//       curr=curr.next
//     }
//     this.tail = curr;
//     this.tail.next = null;
//   }

//   middle(){
//     let temp=this.head
//     let mid=this.head
//     while(temp && temp.next){
//       mid=mid.next
//       temp=temp.next.next
//     }
//     console.log(`middle: `,mid.value);
//   }

//   reverse1() {
//     let prev = null;
//     let next = null;
//     let curr = this.head;

//     while (curr) {
//         next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }

//     this.tail = this.head;
//     this.head = prev; 
// }


//    reverse(){
//      return this.reverserecursive(this.head)
//    }

//    reverserecursive(node){
//     if(!node || !node.next){
//       this.head=node
//       return 
//     }
//     this.reverserecursive(node.next)
//     node.next.next= node
//     node.next=null
//    }

//  print(){
//   let cur=this.head
//   while(cur){
//     console.log(cur.value);
//     cur=cur.next
//   }
//  }


// }

// let l= new linkedList()
// l.add(34)
// l.add(84)
// l.add(24)
// l.add(94)
// l.add(14)
// l.middle()

// l.reverse();
// // l.deleteEnd()
// l.print()

let a='hello world'
let b=a.split(' ').reverse(' ').join()
console.log(b);