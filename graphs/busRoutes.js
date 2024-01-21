import Queue from "../Queue.js";

function minimumBuses(matrix, s, d) {
  // adjacency list that maps each bus that passes through station
  let adjList = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let station of matrix[i]) {
      if (!adjList[station]) adjList[station] = [];
      adjList[station].push(i);
    }
  }
  // initialize queue with a source station and bus count
  let queue = new Queue();
  queue.enqueue([s, 0]);

  const visitedBuses = new Set();
  //iterate queue until empty or destination has arrived
  while (!queue.isEmpty()) {
    // visit connecting stations of dequed station, enqueue connecting stations
    const [deqStation, busCount] = queue.dequeue();
    if (deqStation === d) return busCount;
    // every iteration, increase bus count if a new bus is passing through same station
    if (adjList[deqStation]) {
      for (const bus of adjList[deqStation]) {
        if (!visitedBuses.has(bus)) {
          for (const station of matrix[bus]) {
            queue.enqueue([station, busCount + 1]);
          }
          visitedBuses.add(bus);
        }
      }
    }
  }

  return -1;
}

export { minimumBuses };
