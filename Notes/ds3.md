  TREE
 ------
 represented nodes connected by edges and stored heirarchical

 types of tree :
    Binary tree
    binary search tree
    avl tree
    heap
    trie
   
   Depth of tree:  No of edges in path from root to element 
  -----------------------------------------------------------------------------
   Height of the Tree: The height of a tree is the length of the longest path from the root of the tree 
                       to a leaf node of the tree. (count of edges)
   -----------------------------------------------------------------------------
   Degree of a Node: The total count of subtrees attached to that node is called the degree of the node.
  
   -----------------------------------------------------------------------------
   Height of a node: The height of a node can be defined as the length of the longest path from the node
                     to a leaf node of the tree.
   -----------------------------------------------------------------------------
   Edges: An edge can be defined as the connection between two nodes.
   -----------------------------------------------------------------------------
   


BINARY TREE
___________

  binary tree is a type of a tree data structure in which every node has at maximum two children 
  and minimum 0 child nodes that is it has either 2 child nodes or 1 child node or no child node at all. 


  Root: The topmost node in a binary tree, from which all other nodes descend.
  -----------------------------------------------------------------------------
  Parent: A node in a tree that has one or more child nodes.
  -----------------------------------------------------------------------------
  Child: A node directly connected to another node in the tree.
  -----------------------------------------------------------------------------
  Leaf: A node in a tree that has no children. It is also known as a terminal or external node.
  -----------------------------------------------------------------------------
  Internal Node: A node that has at least one child.
  -----------------------------------------------------------------------------

  A tree formed by a node and its descendants.
  -----------------------------------------------------------------------------

  Height: The length of the longest path from a node to a leaf. 
          The height of the entire tree is the length of the longest path from the root to a leaf.
  -----------------------------------------------------------------------------

  Depth:  The length of the path from a node to the root. The depth of the root is usually considered to be zero.

  -----------------------------------------------------------------------------

  Balanced Binary Tree: A binary tree is considered balanced if the height of the left and right 
                       subtrees of every node differ by at most one.
      

    -----------------------------------------------------------------------------

  Full Binary Tree:
     Every node has either 0 or 2 children. This means that every parent node has exactly two children.

        1
      /   \
     2     3
    / \   / \
   4   5 6   7


 Complete Binary Tree:
   Every level is fully filled except possibly for the last level, which is filled from left to right.
   In a complete binary tree, all nodes are as left as possible.


        1
      /   \
     2     3
    / \   / \
   4   5 6   7
  / \
 8   9


 Perfect Binary Tree:
  All interior nodes have two children and all leaf nodes are at the same level.
  This means that the tree is both full and complete.

        1
      /   \
     2     3
    / \   / \
   4   5 6   7

--------------------------------------------------------------------------------------------------------------
AVL TREE(Self balanced binary search tree)
 
 factor of balaced = height of left subtree - hight of right sub tree  is must be ( -1 or 0 or 1)

 convert to avl tree = RR rotation , RL rotation , LL rotation , LR Rotation
 
  RR rotation  : anti clock wise  rotate the node 
  LL rotation  : clock wise rotatate the node
  RL rotation  : convert to RR  then  anti clock wise  rotate the node 
  LR Rotation  : conver to LL then clock wise rotatate the node

--------------------------------------------------------------------------------------------------------------

binary Search Tree
-------------------

Binary Search Tree (BST): A specific type of binary tree where the left child contains nodes with values 
   less than the parent node, and the right child contains nodes with values greater than the parent node. 
   This property makes searching, insertion, and deletion operations efficient.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  contains(value) {
    return this.containsNode(this.root, value);
  }

  containsNode(node, value) {
    if (node === null) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    if (value < node.value) {
      return this.containsNode(node.left, value);
    } else {
      return this.containsNode(node.right, value);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
      } else if (node.left === null) {
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      } else {
        const minValue = this.findMinValue(node.right);
        node.value = minValue;
        node.right = this.deleteNode(node.right, minValue);
      }
    }
    return node;
  }

  findMinValue(node) {
    let minValue = node.value;
    while (node.left !== null) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }

  postOrderTraversal() {
    this.postOrder(this.root);
  }

  postOrder(node) {
    if (node === null) {
      return;
    }
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }

  preOrderTraversal() {
    this.preOrder(this.root);
  }

  preOrder(node) {
    if (node === null) {
      return;
    }
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  inOrderTraversal() {
    this.inOrder(this.root);
  }

  inOrder(node) {
    if (node === null) {
      return;
    }
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  findClosestValue(target) {
    let closest = this.root.value;
    let currentNode = this.root;

    while (currentNode !== null) {
      if (target === currentNode.value) {
        return target;
      }

      closest = Math.abs(target - currentNode.value) < Math.abs(target - closest)
        ? currentNode.value
        : closest;

      currentNode = target < currentNode.value ? currentNode.left : currentNode.right;
    }
    return closest;
  }


  isBst() {
    return this.isBstHelper(this.root, 0, Infinity)
  }
  isBstHelper(root, min, max) {
    if (root == null)
      return true

    if (root.value < min || root.value > max) {
      return false
    }
    return (this.isBstHelper(root.left, min, root.value - 1) &&
      this.isBstHelper(root.right, root.value + 1, max))
  }

   findMinimumValue(root) {
    if (root === null) {
      return null;
    }
  
    let current = root;
    while (current.left !== null) {
      current = current.left;
    }
  
    return current.value;
  }


  minimum(){
    let curr=this.root
    while(curr.left!=null){
      curr=curr.left
    }
    return curr.value
  }


    findSecondLargest() {
        let largest = -Infinity;
        let secondLargest = -Infinity;

        let current = this.root;

        while (current) {
            if (current.value > largest) {
                secondLargest = largest;
                largest = current.value;
            } else if (current.value < largest && current.value > secondLargest) {
                secondLargest = current.value;
            }

            if (current.right) {
                current = current.right;
            } else {
                break;
            }
        }
        return secondLargest;
    }
  }


}

// Workout 1 - Create a Binary Search Tree
const bst = new BinarySearchTree();
bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(14);
bst.insert(4);
bst.insert(7);
bst.insert(13);

// console.log(bst.isBst());
console.log(bst.minimum());
// Perform Traversals
console.log("Post-order Traversal:");
bst.postOrderTraversal(); // Output: 4, 7, 6, 1, 3, 13, 14, 10, 8

console.log("Pre-order Traversal:");
bst.preOrderTraversal(); // Output: 8, 3, 1, 6, 4, 7, 10, 14, 13

console.log("In-order Traversal:");
bst.inOrderTraversal(); // Output: 1, 3, 4, 6, 7, 8, 10, 13, 14

// Perform Deletion and check Contains
console.log("Contains 6:", bst.contains(6)); // Output: true
bst.delete(6);
console.log("Contains 6:", bst.contains(6)); // Output: false



_______________________________________________________________________________________________________________


MIN HEAP 
________



class minheap{
    constructor(){
        this.heap=[]
    }

    parents(i){
      return Math.floor((i-1)/2)
    }

    leftchild(i){
        return 2*i+1
    }

    rightchild(i){
        return 2*i+2
    }

    size(){
        return this.heap.length-1
    }

    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }

     insert(value){
        this.heap.push(value)
        this.heapup(this.size())
     }

     heapup(i){
        let parent=this.parents(i)
        while(i>=0&&this.heap[i]<this.heap[parent]){
            this.swap(i,parent)
            i=parent
            parent=this.parents(i)
        }
     }

     delete(){
        this.swap(0,this.size())
        this.heap.pop()
        this.shiftdown(0)
    }

    heapbuild(array){
        this.heap=[...array]
        for(let i=this.parents(this.size());i>0;i--){
           this.shiftdown(i)
        }
    }

     peek(){
        return this.heap[this.size()]
     }
     
    large(){
        let large=this.heap[0]
        for(let i=0;i<this.size();i++){
            if(this.heap[i]>large){
                large=this.heap[i]
            }
        }     
        return large
     }

    shiftdown(i){
        let  size=this.size()
        let left=this.leftchild(i)
        let right=this.rightchild(i)
        let smallest
        while(left<=size){
            if(right<=size&&this.heap[right]<this.heap[left]){
                smallest=right
            }else{
                smallest=left
            }if(this.heap[i]>this.heap[smallest]){
                this.swap(i,smallest)
                i=smallest
                left=this.leftchild(i)
            }else{
                return 
            }
        }
    }

}

let heap=new minheap()
// let array=[12,32,43,5,1,8]
// heap.heapbuild(array)
heap.insert(34)
heap.insert(78)
heap.insert(32)

// heap.delete(34)
console.log(heap.peek());
console.log(`large elements in heap  ${heap.large()}`);
console.log("large", heap.large())


_____________________________________________________________________________________________________________



 GRAPH 
 ____________

  Graph data structure is a collection of nodes (vertices) interconnected by edges. 
  It's used to represent relationships and connections between entities. 
  Graphs can be directed or undirected and have various applications, 
  including social networks, maps,FACEBOOK and recommendation systems.


    * Weighted graph is a type of graph where each edge or vertex has a numerical value called a "weight." 
      These weights represent some measure, like distance or cost. Weighted graphs are used in various fields 
      for tasks like finding shortest paths, optimizing flows, and more.


      
    * Adjacency Matrix:
                     Uses a 2D array to represent edges.
                     Consumes more memory, especially for large and sparse graphs.
                     Efficient for checking edge existence.
                     Suitable for dense graphs.

      Adjacency List:
                    Uses an array of lists to represent edges.
                    Memory-efficient for sparse graphs.
                    Efficient for finding neighbors.
                    Suitable for sparse graphs and dynamic graphs.

   

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, new Set());
  }

  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).add(vertex2);
    this.adjList.get(vertex2).add(vertex1);
  }

  delete(verte1,vertex2){
    this.adjList.get(verte1).delete(vertex2)
    this.adjList.get(vertex2).delete(verte1)
  }

  bfs(startVertex) {
    const visited = new Set();
    const queue = [];

    visited.add(startVertex);
    queue.push(startVertex);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);
      
      const adjacentVertices = this.adjList.get(currentVertex);
      for (const neighbor of adjacentVertices) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }


  dfs1(startVertex) {
    const visited = new Set();

    this.dfsRecursive(startVertex, visited);
  }

  dfsRecursive(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);

    const neighbors = this.adjList.get(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfsRecursive(neighbor, visited);
      }
    }
  }

  dfs(startVertex) {
    const visited = new Set();
    const stack = [];
  
    visited.add(startVertex);
    stack.push(startVertex);
  
    while (stack.length > 0) {
      const currentVertex = stack.pop();
      const adjacentVertices = this.adjList.get(currentVertex);
  
      console.log(currentVertex);
  
      for (const neighbor of adjacentVertices) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
  }

  //   print(){
//     for(const [vertex,edge] of this.adjlist){
//       console.log(vertex, '->', edge.join(', '));
//     }
//   }
  
}

// Example usage:
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'E');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
// graph.delete('A', 'E')

console.log('BFS traversal starting from vertex A:');
graph.bfs('A');
console.log('DFS traversal starting from vertex A:');
graph.dfs('A');






___________________________________________________________________________________________________________________



TRIE DATASTRUCTURE 
___________________

  A trie is a tree-like data structure used to store a dynamic set of strings, where the keys are usually strings. 
  Tries are particularly efficient for tasks that involve a large number of dynamic searches, 
  such as autocomplete features in text editors or search engines.

class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children.has(char)) {
          currentNode.children.set(char, new TrieNode());
        }
        currentNode = currentNode.children.get(char);
      }
  
      currentNode.isEndOfWord = true;
    }
  
    search(word) {
      let currentNode = this.root;
  
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!currentNode.children.has(char)) {
          return false;
        }
        currentNode = currentNode.children.get(char);
      }
  
      return currentNode.isEndOfWord;
    }
  
    startsWith(prefix) {
      let currentNode = this.root;
  
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!currentNode.children.has(char)) {
          return false;
        }
        currentNode = currentNode.children.get(char);
      }
  
      return true;
    }

   
  }
  
  // Example usage
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("orange");
  
  console.log(trie.search("apple")); // true
  console.log(trie.search("banana")); // true
  console.log(trie.search("orange")); // true
  console.log(trie.search("grape")); // false
  
  console.log(trie.startsWith("app")); // true
  console.log(trie.startsWith("ban")); // true
  console.log(trie.startsWith("ora")); // true
  console.log(trie.startsWith("gr")); // false



___________________________________ NOTES  _____________________________________________________________



_Tree_ - Hierarchichal data structure consist of nodes connected by edges.
It is easy to navigate and organize tree.
easy to traverse and manipulate
Efficient Searching
_Leaf node_ - node does not have children
_AVL Tree_ tree is a self-balancing binary search tree
_Disjoint tree_ -  is a tree in which no two nodes are connected by more than one path
_General tree_ is a tree in which each node can have either zero or many child nodes
_BST_ - In BST values in its left subtree are less than node value and values in right subtress are greater than nodes value.

- _Adv_ - Efficient insertion deletion and searching when balanced _(O(log n))_
	- dynamic
	- flexible
	- easy to implement
- _Disadv_ - we should implement balanced BST
	- unbalanced or degnerated trees are inefficient
	- not suited for random access
	- worst case complexity is _O(n)_
- _Appl_ - store hirarchical data
	- database indexing
	- used to implement priority queue
	- used in encryption alfgorithm
	- used in caching
	- used in Dictionary and spell chekers
- _InOrder_ [left, root, right]
- _PreOrder_ [root, left, right]
- _PostOrder_ [left, right, root]
- _Depth_ - depth of binary search tree is number of nodes from root to farthest leaf
- Depth of binary tree with single node is 0
_The time complexity of a recursive algorithm that traverses all nodes in a binary tree is O(d)_
- _Height_ - maximum depth of from leaf to root node.
- _Full Bst_ - All node have 0 or 2 children
- _Complete Tree_ - All levels are filled except possibly the last, and all child nodes are to the left.
- _Perfect Bst_ - all nodes have two children and all leaf node are at same level
- _Balance tree_ - Binary tree with height of left subtree and right subtree not differ than 1
- _Skewed Tree_ -  which all the nodes have only either one child or no child.
- _Degenerate tree_ - each parent node has only on child

_Heap_ - is special data structure in which tree is complete binary tree, root element is always min/max based on heap
_Heapify_ - process of creating heap.
Bottom-up heapify has a time complexity of _O(n)_, while top-down heapify has a time complexity of _O(log n)_.
- Complexity of _Heap sort_ - Time (O(n logn)), Space (O(1))
- _Adv_ - Efficient insertion and deletion(log n)
	- Easy to acces minimum or maximum element (O(1)
	- Can be efficiently implemented as array
- _Dis_ -  not ideal for searching elements other than min and max.
	- insertion and deletio worstcase (O(n log n))
	- dynamic sizing not possible
	- random acces not possible
- _Appl_ - priority queue
	- Heap sort
	- load balancing
	- stock market
	
- _Trie_ - Tree base data structure used to store and retrive stirng efficiently
- _Adv_ - fast search than BST
	- space efficient
	- fast insertion 
	- no collision
	- Trie allows us to input and finds strings in O(l) time.
	- Deletion complextiy O(l)
- _Dis_ - takes lots of memmory
	- slower than hash table
- _Appl_ - spell cheking
	- auto complete
	- used to create dictionary
	
_Graph_ - graph is non linear data structure consist of vertices and edges, edges connect vertices
- _Adv_ - used to represent relationship between object
	- analyze complex relation ship
	- it can be used to represent wide range of data
	- scalable
	- flexible
	- it is used to visualise data
- _Dis_ - Difficulty in interpretation
	- large graph are computaionaly expensive
	- limited representation(cannot represent attribute)
- _Appl_ - Social media analysis
	- Recommendation system
	- network monitoring 
	- data sciene 
	- Financial trading
- creation - O(V+E) 
- insertion - _O(1)_
- Deletion - O(V+E) 
- Search - O(1)
- DFS, BFS - O(V+E)
- traversal - O(V+E) 
- _DFS(stack) [ O(V+E)]_ - DFS is done by recusrively exploring along each brach as far as possible before backtracking
It traverses deeper into the graph before exploring the siblings of the current vertex
  It traverses deeper into the graph before exploring the siblings of the current verte
- _BFS(queue) [ O(V+E)]_ - BFS explores a graph by visiting all the neighbors of a vertex before moving on to the next level of neighbors.

_Spanning Tree_ - subgraph of an undirected connected graph. It includes all the vertices along with the least possible number of edge
_Minimum spanning tree_ is a spanning tree whose weight is the smallest among all possible spanning trees
_null graph_ - no edge
_trivial graph_ - single node
_Fnite graph_ - graph with finite nodes
_Inifinite graph_ -graph with infinite nodes
_connected graph_ - we can traverse to every node from single node
_complete graph_ - each and every node are inter connected 
_cycle graph_ - graph that form a closed loop, graph with cycle
_Forest_ - graph without cycle
_Undirected graph_ - edges have no direction
_Directed graph_
_Weighted graph_ - edges have weights
_Unweighted graph_ -
_Bipartate graph_ - graph which can be divided into disjoint sets.
_Tree_ - graph with no loop
_Sparse graph_ - graph with few edges than node
_Dense graph_
_Multi grpah_ - grpah whith parallel edges but no self loop
_Pseudo graph_ - graph with self-loop
_Graph indexing_ - Graph indexing refers to the process of organizing and structuring graph data in a way that allows for efficient and fast retrieval of information from the graph.

- (The distance between two vertices in a graph is the shortest length of any path between them)
_Dijsktra algorithm_ - used to find the shortest path.
_Prim's algorithm_  - is a greedy algorithm used to find the minimum spanning tree of a weighted undirected graph.

_adjacency matrix (connection matrix)_ is a square matrix used in graph theory and computer science to represent a finite graph. it represent pairs of nodes are adjacent or not.
_Topological Sorting_ - is used to linearly ordering acyclic graph
