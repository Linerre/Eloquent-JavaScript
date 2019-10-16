const roads = [// the village roadpath
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];

  function buildGraph(edges) {
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
  
  const roadGraph = buildGraph(roads);
  // console.log(roadGraph)

  class VillageState {
    constructor(place, parcels) {//parcel_example = { place: swh, address: destination }
      this.place = place;
      this.parcels = parcels; 
    }

    move(destination) {
      if(!roadGraph[this.place].includes(destination)) {//check if from-to path is valid
        return this; //if not, return the old state
      } else {//if yes, start moving
        let parcels = this.parcels.map(p => {//create a new state for moving
          if (p.place != this.place) return p;//move!
          return {place: destination, address: p.address}; //out of if-loop, still need return sth
        }).filter(p => {p.place != p.address});// those with '!=' will be kept & get rid of those delivered
        return new VillageState(destination, parcels); //keep delivering
      } 
    }
  }

  let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
  );
  let next = first.move("Alice's House");//destination included; begin moving
  
  console.log(next.place);
  // → Alice's House
  console.log(next.parcels);
  // → []
  console.log(first.place);
  // → Post Office