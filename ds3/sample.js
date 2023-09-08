// class minheap {
//   constructor() {
//     this.heap = [];
//   }

//   parent(i) {
//     return Math.floor((i - 1) / 2);
//   }

//   leftChild(i) {
//     return 2 * i + 1;
//   }

//   rightChild(i) {
//     return 2 * i + 2;
//   }

//   size() {
//     return this.heap.length - 1;
//   }

//   swap(i, j) {
//     [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//   }

//   insert(value) {
//     this.heap.push(value);
//     this.heapup(this.size());
//   }

//   heapup(i) {
//     let parents = this.parent(i);
//     while (i >= 0 && this.heap[i] < this.heap[parents]) {
//       this.swap(i, parents);
//       i = parents;
//       parents = this.parent(i);
//     }
//   }

//   heapBuild(array){
//     this.heap=[...array]
//     for(let i=this.parent(this.size());i>=0;i--){
//         this.shiftdown(i)
//     }
//   }

//   delete(value) {
//     this.swap(0, this.size());
//     this.heap.pop();
//     this.shiftdown(0);
//   }

//   shiftdown(i) {
//     let size = this.size();
//     let left = this.leftChild(i);
//     let right = this.rightChild(i);
//     let smallest;
//     while (left <= size) {
//       if (right <= size && this.heap[right] < this.heap[left]) {
//         smallest = right;
//       } else {
//         smallest = left;
//       }
//       if (this.heap[i] > this.heap[smallest]) {
//         this.swap(i, smallest);
//         i = smallest;
//         left = this.leftChild(i);
//       } else {
//         return;
//       }
//     }
//   }
// }

// const h = new minheap();
// // h.insert(23);
// // h.insert(43);
// // h.insert(12);
// // h.insert(3);
// const array=[32,12,34,23,43,16]
// h.heapBuild(array)
// console.log(h);

class minheap {
  constructor() {
    this.heap = [];
  }

  parent(i) {
    return Math.floor(i - 1) / 2;
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightchild(i) {
    return 2 * i + 2;
  }

  size(){
   return this.heap.length-1
  }

  insert(value){
    this.heap.push(value)
    this.heapup(this.size())
 }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapup(i) {
    let parents = this.parent(i);
    while (i >= 0 && this.heap[i] < this.heap[parents]) {
      this.swap(i, parents);
      i = parents;
      parents = this.parent(i);
    }
  }

 

  delete(){
    this.swap(0,this.size())
  }
}


const h= new minheap()
h.insert(32)
h.insert(34)
h.insert(21)
h.insert(15)
console.log(h);