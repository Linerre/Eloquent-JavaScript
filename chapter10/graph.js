// graph module
// method one

exports.buildGraph = function (edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];//[from] refers to property but [to], an array containing 'to'
      } else {
        graph[from].push(to);//if not empty, add other 'to's
      }
    }
    // this for-loop is indeed first executed
    // [from, to] is an array
    for (let [from, to] of edges.map(r => r.split("-"))) {//r is each str in roads
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }