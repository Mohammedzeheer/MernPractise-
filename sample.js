// var comment = "Greetings from Medium!";
// var displayComment = () => console.log(comment);
// window.displayComment();

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



 

