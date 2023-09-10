class Graph {
  constructor() {
    this.adjlist = new Map();
  }

  addVertex(vertex) {
    this.adjlist.set(vertex, new Set());
  }

  addEdge(vertex1, vertex2) {
    this.adjlist.get(vertex1).add(vertex2);
    this.adjlist.get(vertex2).add(vertex1);
  }

  bfs(value) {
    let visited = new Set();
    let queue = [];

    visited(value);
    queue.push(value);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);
    }

    const adjacentVertices = this.adjlist.get(currentVertex);
    for (const neighbor of adjacentVertices) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  print(){
    for(const [vertex, adjacentVertices] of this.adjlist){
      console.log(vertex, '->', adjacentVertices.join(', '));
    }
}

 
}

const g = new Graph();
g.addVertex(2);
g.addVertex(4); 
g.addVertex(3);
g.addVertex(5); 
g.addVertex(6);
g.addVertex(8); 
g.addEdge(2, 4); 
g.addEdge(3, 5); 
g.addEdge(6, 8); 
console.log(g);
// g.print()
