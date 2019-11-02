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
    constructor(place, parcels) {//parcel_example = [{ place: swh, address: destination }]
      this.place = place;
      this.parcels = parcels; // parcels are arrays containig objs!
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

  // Simulation

  function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {// i.e the parcels get delivered!
        console.log(`Done in ${turn} turns`);
        break;
      }
      let action = robot(state, memory); // what is this robot()???
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moved to ${action.direction}`);
    }
  }

  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }
  
  function randomRobot(state) {//the robot above?
    return {direction: randomPick(roadGraph[state.place])};
  }

  VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
  };

  runRobot(VillageState.random(), randomRobot);//yes!
// → Moved to Marketplace
// → Moved to Town Hall
// → …
// → Done in 63 turns



// robot with memory
const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
]; // it will follow this route

function routeRobot(state, memory) {// check its memory to get the next path
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return {direction: memory[0], memory: memory.slice(1)};
}

//robot with memory and could find the shortest path
function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}