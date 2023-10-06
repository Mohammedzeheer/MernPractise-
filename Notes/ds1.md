 ---------------DS 1 Mohammed -------------------------------


Datastructure : 
_________________
Organized way of storing and manipulating data for efficient operations


 Algorithm :
_____________ 
Step-by-step procedure(instruction) for solving a problem or accomplishing tasks.


 Memory allocation :
_____________________
 Process of assigning and managing memory resources for storing data dynamically.


 Static memory allocation : 
____________________________
 Memory assigned at compile-time and remains fixed throughout program execution.


Dynamic memory allocation :
___________________________
 Memory allocated during runtime and can be resized or deallocated as needed.


 Memory leak :
_____________
 Situation where allocated memory is not released properly, resulting in wastage or depletion of memory resources.


 complixity analysis :
______________________ 
Its a process evaluating the performance of algorithm and datastructure interms space and time


 Time complexity :
__________________
 Measure of the amount of time required to run an algorithm.


Space complexity :
__________________
Measure of the amount of memory required by an algorithm to solve a problem.

Asymptotic notation 
___________________
is a mathematical notation to describe the growth rate of an algorithm's time or space complexity.


 Big O notation :
___________________
 Mathematical notation used to describe the upper bound of algorithm's time or space complexity.


String :
___________
 A sequence of characters, typically used to represent and manipulate textual data in programming.


Linear search :  : O(n)
______________
A simple searching algorithm that sequentially checks each element in a list or array.


 Binary search :   O(log n) 
_________________
An efficient searching algorithm that divides a sorted list or array into halves, 
repeatedly narrowing down the search space.


Recursion : 
___________
A programming technique where a function calls itself to solve a problem 
by breaking it into smaller instances. 
 
function fact(num){
    if (num==0){
        return 1
    }else{
        return  num * fact(num-1)
    }  
}


BINARY SEARCH
_____________

function BinarySearch(array,target,start,end){
    let mid= Math.floor((start+end)/2)
    if(target==array[mid]){
        return mid
    }else if(target<array[mid]){
        return BinarySearch(array,target,start,mid-1)
    }else if (target>array[mid]) {
        return BinarySearch(array,target,mid+1,end)
    }
    return -1
  }
  
  const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  const target = 8;
  const result = BinarySearch(array,10,0,array.length-1);
  console.log(result);


LINEAR SEARCH
_____________

function linearSearch(array){
   let find=2;
  for(let i=0;i<array.length-1;i++){
    if(find===array[i]){
       console.log(i);
    }
  }
}



different types of data structures:
___________________________________

Arrays
Linked Lists
Stacks
Queues
Trees
Graphs
Hash Tables
Heaps
Sets


 Array :
_________
 An array is an ordered collection of elements with a fixed size, 
 accessed by index, and of the same data type.

 Array Advantages:-

    Random Access
    Cache Locality
    Efficiency in Traversal
    Efficient for Fixed Size

 Array disadvantages:

    Fixed size
    Inefficient insertion and deletion
    Contiguous memory requirement
    Limited flexibility
    Inefficient search (for unsorted arrays)
    Inefficient sorting
    Difficulty in inserting or deleting elements
    Lack of dynamic resizing
    Lack of heterogeneous elements.
    Memory Wastage
    Overflow and Underflow


__________________________________________________________________________________________________________


LINKED LIST 
____________

Advantages of Linked Lists:

  Dynamic Size
  Efficient Insertion and Deletion
  Memory Efficiency
  Flexibility in Implementation

Disadvantages of Linked Lists:

  Lack of Random Access
  Extra Memory Overhead
  Inefficient Memory Cache Usage
  Inefficient for Reversal or Backward Traversal
  Required Memory Allocation



LINKED LIST 
___________

class node {
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
    }

    add(value){
        const newnode= new node(value)
     if(!this.head){
        this.head= newnode
        this.tail=newnode 
        return
     }
     this.tail.next=newnode 
     this.tail=newnode
    }


    delete(value){
        if(!this.head){
            return
        }

        if(value==this.head.value){
            this.head=this.head.next
            return
        }

        current= this.head 
        while(current.next){
            if(current.next.value==value){
                current.next=current.next.next    
                if(!current.next){
                    this.tail=current 
                }  
                return  
            }
            current = current.next
            
        }
    }
  
      
      insertafter(value,newvalue){
        const newnode=new node(newvalue)
        let currentNode=this.head;
        while(currentNode){
           if(currentNode.value==value){
            newnode.next=currentNode.next
            currentNode.next=newnode
            if(!newnode.next)
            {
                this.tail=newnode
            }
            return
           }
            currentNode=currentNode.next
        }
      }



      insertbefore(value,newvalue){
        const newnode=new node(newvalue)
        let currentNode=this.head;
        if(currentNode.value==value){
            newnode.next=currentNode
            this.head=newnode 
          return
         }
        while(currentNode.next){   
            if(currentNode.next.value==value) {
                newnode.next=currentNode.next
                currentNode.next=newnode 
            }         
            currentNode=currentNode.next
        }
      }


      middle()
      {
        let temp=this.head
        let mid=this.head
        while(temp&&temp.next){
            mid=mid.next
            temp=temp.next.next
        }
        return mid.value
      }


      print(){
        let current=this.head
          console.log(`Linked List:`)
           while (current){
            console.log(`${current.value}`)
             current = current.next
           }
      }
}


const li=new linkedlist()

li.add(2)
li.add(4)
li.add(5)
li.add(6)
li.add(6)
li.add(8)
// li.insertafter(2,7)
console.log(li.middle());


li.print()



_____________________________________Notes___________________________________________________________________





_Algorithm_ - Set of instructions to solve a problem or perform computation

_Data Structure_ - way of organising and storing data in computer for easy and efficient access and manipulation

_Data type_ - represent catagory of data like, integer string booloean.

_Complexity analysis_ - Analysis of time and space required for algorithm to execute
_Asymptotic analysis_ - Analysis of time and space required for algorithm to execute

_Big O notation_ - it is mathematical notation used to analyse efficency and complexity of algorithm 
it represent worst case
_Omega notation_ - it represent best case
_Theta notation_ - it represent best and worst case

_Time Complexity_ - refers to amount of time or number operation required by algorithm to solve problem
_Space Complexity_ - amount of memmory space required by algorithm to solve problem

_Linear Complexity_ -  complexity grows linearly with size of input
_Constant complexity_ - Complexity remain constant regardless of size of input
_Quadratic complexity_ - complexity grows propotional to square of size of input (O(n^2))
_Exponential Complexity_ - complexity grows exponentaily with input size (O(2^n))

_Array_ - Collection of elements stored in contigous memmory location
- _Adv_ - We can store similar data in single variable
	- Traversing is easy
	- Easy to get and set value
- _Dis Adv_ - Inefficient insertain and deletion
	- Static array size cannot be altered
	- Array is homogenous
	- memmory wastage by inserting element less than allocated size
- _Appl_ - Store data, Store matrix and multidimensional data, it is used to implement Stack and queue

_Linear data Structure_ - elements are organised in sequential manner
_Hirarchical data structure_ - elements are organised in tree like manner, it represent parent child relationship

_Linked list_ - Linear data structure, Sequence of nodes, each node consist of data and reference to next node
- _Adv_ - Dynamic Size
	- contigous memmory location not needed
- _Dis Adv_ - more memmory needed because of pointer
	- Direct access to element not possible
	- Reverse traversing is not possible
-_Appl_ - Linked allocation of files
	- represent directory structure
	- implement stack and queue
	_ Dynamic memmory allocation
_Double linked list_
- _Adv_ - reverse travesing is possible
	- easy inserion and deletion
	- contigous memmory not needed
	- Dynamic size
- _Dis Adv_ - more memmory needed because of pointer
	- Direct access to element not possible
- _Appl_ - Undo redo
	- Forward and backward in browser
	- Graph algorithm can be implemented using DLL
_Circular linked list_ 
	Last node connected to first node
- _Applications_ - Media Player
		- Round Robin algorithm
		- Task scheduling
		- Games, simulations
_Multi linked list_ - node has multiple pointer to other nodes
		
_Stack_ - Linear data structure, in which operations are performed in LIFO order
 - _Advantages_ 
        - Easy to implement
 		- Efficient memmory utlisation
 		- Fast acces and removal
- _Disadvantages_ - Random acces not possible
		- Limited capcity / Not dynamic
_Stack Underflow_ - When we try to pop item from empty stack.
_Stack Overflow_ - When we try to push item to completely filled stack.
_Queue_ - Linear dats structure, in which operations are performed in FIFO order
- _Advantages_ - Easy to implement
		- Easy ot handle large data
- _Disadvantage_ - Random access not allowed
		- Searching is slow O(n)
		
_String_ - Sequence of characteres
_Recursion_ - funtion call itself until it reaches its termiantion condition is met
if a function calls itself two times, its time complexity is _O(2^N)_. If it calls three times, its time complexity is _O(3^N)_.
- _Advantages_ - It reduce time complexity
		- for tree traversal it is better
- _Disadvantage_ - It take more stack memmory
		- if not implemented correctly, it will be slow
_Tail Recursion_ - recursive call is the last operation performed by the function
_Tree_ - Non linear data structure consist of collection of nodes which are connected by edges
_Linear Search_ - sequentialy searching each element in data structure until match is found
_Jump search_ - it work in sorted array by jumping fixed block, then check item is which block then do linear search on that block. 
_Binary search_ - it is searching in sorted collection by reapetedly dividing serach space in half,  O(log n)
_Memmory_ - Space to store data and instructions
_Memmory allocation_ - process of assigning parts of memmory to different programs
_Static memmory allocation_ - compile time
_Dynamic memmory allocation_ - Run time 
_Memmory Leak_ - program fail to realese memmory that no longer needed.
_Adv recursion_ - simplify comcplex problem by breaking to smaller problems, it can save time and space by reducing code. it is used in quick sort and merge sort.


