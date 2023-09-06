// class node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }

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


class node{
  constructor(value){
    this.value=value
    this.next = null
  }
}

class linkedlist{

  constructor(){
    this.head=null
    this.tail=null
  }

  add(data){
    const newnode=new node(data)
    if(!this.head){
      this.head= newnode
      this.tail=newnode
      return
    }
    this.tail.next=newnode 
    this.tail=newnode   
  }

  addhead(value){
    const newnode= new node(value)
    newnode.next=this.head
    this.head = newnode 
  }

  addAfter(value,newvalue){
    const newnode  = new node(newvalue)
    let curr = this.head
    while(curr){
       if(curr.value==value){
      newnode.next=curr.next
      curr.next=newnode 
    }
    curr=curr.next
    }
  }


  insertAfter(value,newValue){
    const newnode = new node(newValue)
    let curr= this.head 
    while(curr){
      if(curr.value===value){
        if(!curr.next){
          curr.next=newnode 
          this.tail=newnode
        }
        newnode.next=curr.next
        curr.next=newnode
      }
      curr=curr.next
    }
  }
  
  print(){
    let curr= this.head
    while(curr){
      console.log(curr.value)
      curr=curr.next
    }
  }


  reverse(){
    if(!this.head)return 
    let next= null
    let prev= null
    let curr= this.head
 while(curr){
    next=curr.next 
    curr.next=prev
    prev=curr
    curr= next
 }
 this.head= prev
  }

  middle(){
    let mid= this.head
    let temp= this.head
    while(temp && temp.next){
      mid = mid.next
      temp= temp.next.next
    }
  console.log(`mid value: ${mid.value}`) 
  }

}

let l=new linkedlist()
l.add(34)
l.add(36)
l.addhead(32)
l.middle()
l.print()
l.reverse()
l.print()
// console.log(l)
l.print()


