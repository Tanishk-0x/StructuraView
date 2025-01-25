class UnweightedUndirectedGraph {
  constructor() {
    this.adjList = new Map();
  }


  addVertex(v) {
    this.adjList.set(v, []);
  }


  addEdge(v, w) {
    if (!this.edgeExists(v, w)) {
      this.adjList.get(v).push(w);
      this.adjList.get(w).push(v);
    }
  }

  edgeExists(v, w) {
    var array = this.adjList.get(v);
    if (!array) return false;
    return array.indexOf(w) != -1 ? true : false;
  }

  getNoOfVertices() {
    return this.adjList.size;
  }

  getNoOfEdges() {
    var numEdges = 0;
    
    for (let i in this.adjList) {
      numEdges += this.adjList.get(i).length;
    }

    return numEdges / 2;
  }
}
