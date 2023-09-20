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
  
  // Example Usage:
  
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
  