class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicates(head) {
    if (!head || !head.next) {
      return head;
    }
  
    const set = new Set();
    let currentNode = head;
    let prevNode = null;
  
    while (currentNode) {
      if (set.has(currentNode.value)) {
        // Duplicate node found, skip it
        prevNode.next = currentNode.next;
      } else {
        set.add(currentNode.value);
        prevNode = currentNode;
      }
  
      currentNode = currentNode.next;
    }
  
    return head;
  }
  
  // Example usage
  const linkedList = new Node(1);
  linkedList.next = new Node(2);
  linkedList.next.next = new Node(2);
  linkedList.next.next.next = new Node(3);
  linkedList.next.next.next.next = new Node(4);
  linkedList.next.next.next.next.next = new Node(4);
  
  console.log('Original Linked List:');
  console.log(linkedList);
  
  const deduplicatedList = removeDuplicates(linkedList);
  
  console.log('Deduplicated Linked List:');
  console.log(deduplicatedList);
  