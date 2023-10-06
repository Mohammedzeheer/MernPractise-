Bubble Sort 
___________

  Time Complexity : O(n²)
  Space Complexity : O(1)


function bubbleSort(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-1-i;j++){
            if(array[j]>array[j+1]){
                let temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp
            }
        }    
    }
    return array
}
const array=[2,5,1,7,2,8]
console.log(bubbleSort(array))

______________________________________________________________________________________________


insertion sort 
_______________

Time Complexity : O(n²) in worst case & O(n) in Best case
Space Complexity : O(1)

let a = [4, 7, 3, 1, 9, 5, 6]
function insertionsort(a) {
    for (i = 1; i < a.length; i++) {
        temp = a[i]
        j = i - 1
        while (j >= 0 && a[j] > temp) {
            a[j + 1] = a[j]
            j--
        }
        a[j + 1] = temp
    }
    return a
}

let result=insertionsort(a)
console.log(result)

______________________________________________________________________________________________


selection sort 
______________

Time Complexity : O(n²)
Space Complexity : O(1)


let a=[6,1,8,7,9,2]
let i;
 function selectionSort(){
    for (i=0;i<a.length-1;i++){
        let min=i
        for(let j=i+1;j<a.length;j++){
            if(a[j]<a[min]){
                min=j
            }          
        }
        if(min!=i){
            [a[i] ,a[min]] =[a[min],a[i]]
          }
    }
    return a
 }

 console.log(selectionSort());

______________________________________________________________________________________________

quickSort
_________

Time Complexity : O(n log( n)) in best
Space Complexity : O(log(n))


function quickSort(arr){
  if(arr.length<2){
      return arr
  }

  let pivot=arr[arr.length-1]
  let left=[]
  let right=[]

  for(let i=0;i<arr.length-1;i++){
      if(arr[i]<pivot){
          left.push(arr[i])
      }else{
          right.push(arr[i])
      }
  }

  return [...quickSort(left),pivot,...quickSort(right)]
}

const arr=[789,4,6,-1,-3]
const sorted=quickSort(arr)
console.log(sorted)

______________________________________________________________________________________________

MERGESORT
_________

function mergesort(a,lb,ub){
    if(lb<ub){
        let mid= Math.floor((lb+ub)/2)
        mergesort(a,lb,mid)
        mergesort(a,mid+1,ub)
        merge(a,lb,mid,ub)
    }
    return a
}

 function merge(a,lb,mid,ub){
     let i=lb
     let j=mid+1
     let k=lb
     let b=[]

     while(i<=mid&&j<=ub){
        if(a[i]<a[j]){
            b[k]=a[i]
            i++;
        }
        else{
            b[k]=a[j]
            j++
        }
        k++
     }

     while(i<=mid){
        b[k]=a[i]
        i++
        k++
     }
     while(j<=ub){
        b[k]=a[j]
        j++
        k++
     }
     for(let c=lb;c<=ub;c++){
        a[c]=b[c]
     } 
 }

 const a=[54,5,1,67,32,98,12,34]
 console.log(mergesort(a,0,a.length-1))




---------------------------------     HASH TABLE   --------------------------------------------

class hashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        const bucket = this.table[index]

        if (!bucket) {
            this.table[index] = [[key, value]]
        }
        else {
            const sameKey = bucket.find((item) => item[0] === key)

            if (sameKey) {
                sameKey[1] = value
            }
            else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key)

        const bucket = this.table[index]
        if (bucket) {
            const sameKey = bucket.find((item) => item[0] === key)

            if (sameKey) {
                return sameKey[1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)

        const bucket = this.table[index]

        if (bucket) {
            const sameKey = bucket.find((item) => item[0] === key)
            if (sameKey) {
                bucket.splice(bucket.indexOf(sameKey), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new hashTable(50)

table.set("name", "ridin")
table.set("mane", "mizhi")
table.set("district", "kannur")
table.set("age", 20)

// table.display()
console.log("------------------------");
// console.log(table.get("age"));
table.remove("age")
table.display()
// console.log(table.get("age"));



-----------------------------------   STACK   ------------------------------------------


class Stack {
  constructor() {
    this.stack = [];
    this.array = [];
    this.str1 = []
    this.str2 = []
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(item) {
    this.stack.push(item); 
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.stack.length - 1];
  }

  display() {
    console.log(this.stack)
  }

  undo() {
    this.array.push(this.stack.pop())
  }

  redo() {
    this.stack.push(this.array.pop())
  }

  addString(data) {
    this.str1.push(data)
  }

  printString() {
    console.log(this.str1);
  }

  reverseString() {
    while (this.str1.length > 0) {
      this.str2.push(this.str1.pop())
    }
    let str = this.str2.join('')
    console.log(str);
  }


}
// Example usage
const stackl = new Stack();

stackl.push(10);
stackl.push(20);
stackl.push(30);
stackl.display();
// console.log(stackl.peek());  // Output: 30

console.log(stackl.pop());
stackl.display();   // Output: 30
stackl.undo()
stackl.display();
stackl.redo()
stackl.display();
//   console.log(stackl.pop());   // Output: 20
//   console.log(stackl.pop());   // Output: 10
//   console.log(stackl.pop());   // Output: Stack is empty

stackl.addString("m")
stackl.addString("o")
stackl.addString("h")
stackl.printString()
stackl.reverseString()

//-----------------------------STACK IN ARRAY--------------------------------------------------------

class stack {
    constructor(){

    this.array=[]
    this.array2=[]
    }
    push(data){
      this.array.push(data)
    }
    pop(){
      if(this.array.length !=0)
     this.array.pop()
     else
     console.log('stack underflow');
    
    }
    undo(){
      this.array2.push(this.array.pop())
    }
    redo(){
      if(this.array2.length<0)
      this.array.push(this.array2.pop())
      else
      console.log('stack underflow');
    }
  
    secondlarge(){
      let big=-Infinity
      let second=-Infinity
      for(let i=0;i<this.array.length;i++){
        if(this.array[i]>big){
          second=big
          big=this.array[i]
        }
        else if(second<this.array[i] && second<big){
          second=this.array[i]
        }
      }
      console.log('second large is ',second);
    }
  
    display(){
      console.log(this.array);
    }
  }
  let newstack=new stack()
  newstack.push(10)
  newstack.push(20)
  newstack.push(30)
  newstack.push(40)
  // newstack.pop()
  // newstack.redo()
  newstack.secondlarge()
  newstack.display()



----------------------------- QUEUE -------------------------------------------------------

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    isEmpty() {
      return this.front === null;
    }
  
    enqueue(data) {
      const newNode = new Node(data);
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
  
      const removedNode = this.front;
      this.front = this.front.next;
  
      if (this.front === null) {
        this.rear = null;
      }
  
      return removedNode.data;
    }
  }
  

  const myQueue = new Queue();
  
  myQueue.enqueue(10);
  myQueue.enqueue(20);
  myQueue.enqueue(30);
  
  console.log(myQueue.dequeue()); // Output: 10
  console.log(myQueue.dequeue()); // Output: 20
  
  console.log(myQueue.isEmpty()); // Output: false
  
  console.log(myQueue.dequeue()); // Output: 30
  console.log(myQueue.isEmpty()); // Output: true
  console.log(myQueue.dequeue()); // Output: null
  

  __________________________________ Notes ____________________________________________________


  _Bubble Sort_ - repeatedly compare adjecent elements and swap them if they are in wrong order until they are completely sorted. - O(n^2)T, O(1)S
- _Adv_ 
  - Easy to understand and impelement
	- it does not require additional space
	- it is stable
- _Di 
  - quadratic time complexity
  - inefficient for large data sets_
--------------------------------------------------------------------------------------------------

_Insertion Sort_ - it work by dividing the input into sorted and unsorted portion, 
initially sort position only consist of first element rest of array is considered unsorted, the algorithm iterate through unsorted portion, take element from unsorted portion and place it in correct positon in sorted part. - O(n^2)T, O(1)S
- _Adv_ - Easy to impelement and understand
	- constant space
- _Dis_ - Quadratic time complexity
	- not suitable for large data set
	- not stable
- _Appl_ - used in JS Sort()
--------------------------------------------------------------------------------------------------

- _Selection Sort_ - Repeatedly select smallest element from unsorted part and swap it with element in current positon. - O(n^2)T, O(1)S
- _Adv_ 
  - Easy to understand and impelement
	- it does not require additional space
	- Perform well on small data set
- _Dis_ 
  - Quadratic time complexity
	- not suitable for large data set
	- not stable
--------------------------------------------------------------------------------------------------

_Quick Sort_ - find pivot element, partion array into subarray around pivot and recursivley sort sub array 
- _Adv_ - complexity O(n logn)
	- it does not require additional space
	- it can take advantage of multiple cores
- _Dis_ - not stable
	-  worst case complexity quadratic(pivot is either large or smallest element of array)
	-  perfomance depand on choice of pivot
--------------------------------------------------------------------------------------------------


_Merge Sort_ - repeatedly divide array into single elements and merge them in sorted order
               divide and conqure method 

- _Adv_ - it is stable
	- worst case complexity is O(n log n)
	- prallizable
- _Dis_ - it require additional space
	- recusive fuction call need stack usage
	- not suitable for small data set

--------------------------------------------------------------------------------------------------

_Stack_ - 
- _Adv_ - Efficient insertion and deletion
- _Dis_ - Does not allow access to middle element
	- Stack has fixed size which lead to overflow and underflow
- _Appl_ - Fuction call mangement
	- DFS
--------------------------------------------------------------------------------------------------

    
_Queue_
- _Adv_ - Efficient insertion and deletion
- _Dis_ - Does not allow access to middle element
	- Queue has fixed size unless implemented using dynamic data structures.
- _Appl_ - Task scheduling
	- manage print jobs in printer
	- BFS

--------------------------------------------------------------------------------------------------

_Hash table_ - in hashtable data stored as key value pairs in array. hashing function is used to find index to insert data.

The time complexity of search and insert operations in a hash table is O(1) on average, and O(n) in the worst case.

_Rehashing_ - increasing size of hashmap and redsistributing elements based on new hash value.
_Hashing methods_
- Division method - Simple, key divided by size of hash table
- mid square method - sqaure the key and take middle digit as hash value
- folding method - break key into pices and combine to get hash value

- multiplication method - multiply key with constant and take remainder as hash value.
_collision_ - If multiple pairs map to the same index (known as a collision),
To avoid collision - _Seperate Chaining_ (linked list) and _open addressing_
_Open addressing_ - find next free space in case of collision, it can be done in multiple ways, they are
	- _Linear probing_ - if location is taken, we look for next available location by adding one
	- _Quadratic probing_ - finding new location by using quadratic function.
	- _Double hashing_ - Use second hash function to find avaailable slot.
- _Adv_ - Fast Lookup
	- Efficient insertion and deletion
- _Dis_ - inefficient if there are lots of collision
	- do not mantain oreder
	- in large data set collision is not avoidable
	- does not allow null value
- _Appl_ - Db indexing
	- Caching
	- in hash based algoritm
	- cryptographic algorithm
- _Load Factor_ - load factor is used to measure the fullness of  hash table
`Load Factor = (Number of Stored Elements) / (Total Number of Buckets or Slots)`
--------------------------------------------------------------------------------------------------