///<<<<<<<<<<<----  SINGLE LINKED LIST -------->>>>>>>>>>>>

//MAKE CLASS NODE 
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

//-- CLASS FOR LINKED LIST 
class linkedlist {
    constructor() {
        this.head = null
        this.tail = null
    }


     //-- ADD VALUE TO LINKED LIST ------
     add(value){
        const newNode= new Node(value)
        
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return
        }
        this.tail.next=newNode
        this.tail=newNode
     }

     addHead(value){
        const newNode=new Node(value)
        if(this.head){
         newNode.next=this.head
         this.head=newNode
        }
     }

    
      deleteHead() {
        if (!this.head) {
          return; // Empty list, nothing to delete
        }      
        this.head = this.head.next; 
      }


      //--- INSERT VALUE BEFORE ANY VALUE  ------
     insertBefore(value, newvalue) {
        const newNode = new Node(newvalue)
        let currentNode = this.head

        if (currentNode.value == value) {
            newNode.next = currentNode
            this.head = newNode
            return
        }
        while (currentNode.next) {
            if (currentNode.next.value == value) {
                newNode.next = currentNode.next
                currentNode.next = newNode
                return
            }
            currentNode = currentNode.next
        }
    }
 

     //INSERT VALUE AFTER USER ENTERED VALUE   ------
    insertAfter(value, newvalue) {
        const newNode = new Node(newvalue)
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value == value) {
                if (!currentNode.next) {
                    currentNode.next=newNode
                    this.tail = currentNode
                    return
                }
                newNode.next = currentNode.next
                currentNode.next = newNode              
                return
            }            
            currentNode = currentNode.next
        }
        console.log("not found")
    }

    middle() {
        let mid = this.head
        let temp = this.head
        while (temp && temp.next) {
            mid = mid.next
            temp = temp.next.next
        }
        console.log(mid.value)
    }


    total() {
        let currentNode = this.head
        let sum = 0;
        while (currentNode) {
            sum = sum + currentNode.value
            currentNode = currentNode.next
        }
        console.log(sum)
    }


     ///REMOVE VALUE FROM LINKED LIST --------
    remove(value){      
        if(!this.head)return;
    
        if(this.head.value==value){
            this.head=this.head.next
             return
        }
        
        let currentNode=this.head
    
        while(currentNode.next){
            if(currentNode.next.value==value){
                currentNode.next=currentNode.next.next
                if(!currentNode.next){
                   this.tail=currentNode
                }
                return
            }
            currentNode=currentNode.next
        } 
     }
  

     
     deleteEnd() {
        if (!this.head) {
          return; // Empty list, nothing to delete
        }
      
        if (!this.head.next) {
          this.head = null; // Only one node in the list, remove it
          return;
        }
      
        let curr = this.head;
        while (curr.next.next) {
          curr = curr.next;
        }
      
        curr.next = null; // Remove the last node
      }
  

    //REVERSE
     reverse() {
        let temp = this.head;
        let prev = null;
        let next = null;
        while (temp) {
          next = temp.next;
          temp.next = prev;
          prev = temp;
          temp = next;
        }
        this.tail = this.head;
        this.head = prev;
      }


      reverse1() {
        this.reverseRecursive(this.head);
      }

      reverseRecursive(node) {
        if (!node || !node.next) {
          this.head = node;
          return;
        }
        this.reverseRecursive(node.next); 
        node.next.next = node;
        node.next = null;
      }
    

     //find last with recursion 
    findEnd(){
        this.findLast(this.head)
    }
    findLast(curr){
        if(curr.next==null){
          console.log(curr)
          return
        }
        this.findLast(curr.next)
    }


    
    // PRINT LINKED LIST ------------------
    print(){
        let currentNode=this.head
        while(currentNode){
            console.log(currentNode.value);
            currentNode=currentNode.next
        }
    }
}

//array to linked list 
const array=[432,56,443,667,897,776]
function arrayToLinkedList(array){
    for(let i= 0; i< array.length; i++){
       list.add(array[i])
    }
}

function findSecondLargestEven(linkedList) {
    let largestEven = -Infinity;
    let secondLargestEven = -Infinity;

    let current = linkedList.head;

    while (current) {
        const data = current.data;

        if (data % 2 === 0) {
            if (data > largestEven) {
                secondLargestEven = largestEven;
                largestEven = data;
            } else if (data > secondLargestEven && data !== largestEven) {
                secondLargestEven = data;
            }
        }

        current = current.next;
    }

    return secondLargestEven;
}

const list=new linkedlist()
// arrayToLinkedList(array)
list.add(10)
list.add(20)
list.add(30)
// list.remove(30)
// list.addHead(5)
// list.insertAfter(10, 34)
// list.insertBefore(30, 34)
// list.total()

list.print()
list.reverse1()
console.log(list.reverse1(),"----------------------")
list.middle()
const secondLargestEven = findSecondLargestEven(list);
console.log("Second Largest Even Number:", secondLargestEven);












