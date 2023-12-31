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

// class minheap {
//   constructor() {
//     this.heap = [];
//   }

//   parent(i) {
//     return Math.floor(i - 1) / 2;
//   }

//   leftChild(i) {
//     return 2 * i + 1;
//   }

//   rightchild(i) {
//     return 2 * i + 2;
//   }

//   size(){
//    return this.heap.length-1
//   }

//   insert(value){
//     this.heap.push(value)
//     this.heapup(this.size())
//  }

//   swap(i, j) {
//     [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//   }

//   heapup(i) {
//     let parents = this.parent(i);
//     while (i >= 0 && this.heap[i] < this.heap[parents]) {
//       this.swap(i, parents);
//       i = parents;
//       parents = this.parent(i);
//     }
//   }

 

//   delete(){
//     this.swap(0,this.size())
//     this.heap.pop()
//     this.shiftdown(0)
//   }

//   shiftdown(i){
//     const size= this.size()
//     const left= this.leftChild(i)
//     const right= this.rightchild(i)
//     let smallest

//     while(left<=size){
//       if(right<=size && this.heap[right]<this.heap[left]){
//          smallest = right
//       }else{
//          smallest=left 
//       }
//       if(this.heap[i]>this.heap[smallest]){
//         this.swap(i,smallest)
//         i=smallest
//         left=this.leftChild(i)
//       }
//     }
//     return

//   }
// }


// const h= new minheap()
// h.insert(32)
// h.insert(34)
// h.insert(21)
// h.insert(15)
// console.log(h);

// class node{
//   constructor(value){
//     this.value=value
//     this.left=null
//     this.right=null
//   }
// }

// class bst{
//   constructor(){
//     this.root=null
//   }

//   insert(value){
//     const newnode=new node(value)
//     if(!this.root){
//       this.root=node
//     }
//     else{
//       this.insertnode(this.root,newnode)
//     }
//   }

//   insertnode(root,newnode){
//     if(newnode.value<root.value){
//       if(root.left==null){
//         root.left=newnode
//       }else{
//          this.insertnode(root.left,newnode)
//       }
//     }else{
//       if(root.right==null){
//         root.right=newnode
//       }else{
//        this.insertnode(root.right,newnode)
//       }
//     }
//   }
 
//    pre(){
//     return this.preNode(this.root)
//    }

//   preNode(root) {
//     if (root == null) {
//       return false;
//     }

//     this.preNode(root.left);
//     this.preNode(root.right);
//     console.log(root.value);
//   }
// }

// const b=new bst()

// b.insert(23)
// b.insert(24)
// b.insert(12)
// b.insert(34)
// b.insert(3)
// b.pre()
// console.log(b);


// class node{
//   constructor(value){
//     this.value=value
//     this.left=null
//     this.right=null
//   }
// }

// class bst{
//   constructor(){
//     this.root=null
//   }

//   insert(value){
//   let newnode = new node(value)
//     if(!this.root){
//       this.root= newnode 
//     }else{
//       this.insertnode(this.root,newnode)
//     }
//   }
 
//   insertnode(root,newnode){
//   if(newnode.value<root.value){
//     if(root.left==null){
//       root.left=newnode
//     }else{
//       this.insertnode(root.left,newnode)
//     }
//   }else{
//     if(root.right==null){
//       root.right=newnode
//     }else{
//       this.insertnode(root.rigth,newnode)
//     }
//  } 
//   }

//   delete(value){
//      this.deletenode(this.root,value)
//   }

//   deletenode(root,value){
//     if(!root.value){
//       return false
//     }

//     if(value<root.value){
//       root=this.deletenode(root.left,value)
//     }else{
//       root=this.deletenode(root.right,value)
//     }
//     if(!root.left && !root.right){
//       root=null
//     }else if(!root.left){
//       root=root.right
//     }else if(!root.left){
//       root=root.right
//     }else{
//       let minimum = this.minimumValue(root.right)
//       root.value=minimum
//       root.right=this.deletenode(root.right,minimum.value)
//       }
//     }


//   minimumValue(root){
//     if(!root.left)
//      {
//      return root.value
//      }else{
//       this.minimumValue(root.left)
//      }
//     }

//     _findMin(node) {
//       while (node.left) {
//           node = node.left;
//       }
//       return node;
//   }
// }

// const b=new bst()
// b.insert(34)
// b.insert(12)
// b.insert(4)
// b.insert(14)

// console.log(b);

// class minheap{
//   constructor(){
//     this.heap=[]
//   }
  
//   parents(i){
//     return Math.floor((i-2)/2)
//   }

//   leftChild(i){
//     return 2*i+1
//   }

//   rightChild(i){
//     return 2*i+2
//   }

//   size(){
//    return this.heap.length-1
//   }

//   swap(i,j){
//   [this.heap[i],this.heap[j]=this.heap[j],this.heap[i]]
//   }

//   insert(value){
//     this.heap.push(value)
//     this.heapup(this.size())
//   }

//   heapup(i){
//     let parents=this.parents(i)
//     while(i>0&& this.heap[i]<this.heap[parents]){
//       this.swap(i,parents)
//       i=parents
//       parents=this.parents(i)
//     }
//   }

//   heapyfy(array){
//    for(let i=array.length;i>0;i--){
//      this.heap=array[i]
//      this.shiftdown()
//    }
//   }

// }

// class node{
//  constructor(value){
//   this.value=value
//   this.left=null
//   this.right=null;
//  }
// }

// class bst{
//   constructor(){
//     this.root=null
//   }

//   insert(value){
//     const newnode= new node(value)
//     if(!this.root){
//       this.root=newnode
//     }else{
//       this.insertnode(this.root,newnode)
//     }
//   }

//   insertnode(root,newnode){
//     if(root.value>newnode.value){
//       if(root.left==null){
//         root.left=newnode 
//       }else{
//         this.insertnode(root.left,newnode)
//       }
//     }else{
//       if(root.right == null){
//          root.right=newnode
//       }else{
//           this.insertnode(root.right,newnode)
//       }  
//     }
//   }

// }

// const bs=new bst()

// bs.insert(23)
// bs.insert(5)
// bs.insert(6)
// bs.insert(32)
// console.log(bs);

// class Graph {
//   constructor() {
//     this.adjlist = {}
//   }

//   addVertex(vertex) {
//     this.adjlist[vertex] = [];
//   }

//   addEdge(vertex1, vertex2) {
//     this.adjlist[vertex1].push(vertex2);
//     this.adjlist[vertex2].push(vertex1);
//   }
  

//   bfs(value) {
//     let visited = new Set();
//     let queue = [];

//     visited(value);
//     queue.push(value);

//     while (queue.length > 0) {
//       const currentVertex = queue.shift();
//       console.log(currentVertex);
//     }

//     const adjacentVertices = this.adjlist.get(currentVertex);
//     for (const neighbor of adjacentVertices) {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         queue.push(neighbor);
//       }
//     }
//   }

//   print(){
//     for(const [vertex, adjacentVertices] of this.adjlist){
//       console.log(vertex, '->', adjacentVertices.join(', '));
//     }
// }

 
// }

// const g = new Graph();
// g.addVertex(2);
// g.addVertex(4); 
// g.addVertex(3);
// g.addVertex(5); 
// g.addVertex(6);
// g.addVertex(8); 
// g.addEdge(2, 4); 
// g.addEdge(2, 5); 
// g.addEdge(3, 5); 
// g.addEdge(6, 8); 
// console.log(g);
// // g.print()


class graph {
  constructor(){
    this.adjList={}
  }
  addVertex(vertex){
    this.adjList[vertex]=[]
  }

  addEdge(vertex1,vertex2){
    this.adjList[vertex1].push(vertex2)
    this.adjList[vertex2].push(vertex1)
  }
}

const g = new graph();
g.addVertex(2);
g.addVertex(4); 
g.addVertex(3);
g.addEdge(2,4); 
g.addEdge(4,3); 

console.log(g);