/*
A maze consists of n rooms numbered from 1-n and some rooms are connected by corridors. You are given a 2D integer array, corridors, where corridors[i]= [room1, room2], allowing a person in the maze to go from room1to room2 and vice versa.
*/

function numberOfPaths(n, corridors) {
  // neighbors matrix holds adjacency lists
  // each room will have a Set assigned
  const neighbours = new Map();

  // create counter for storing number of cycles
  let cycles = 0;

  // iterate over corridors, store neighbors of room1 and room2 in the matrix
  for (const [room1, room2] of corridors) {
    // if room1 not in matrix map, initialize empty set
    if (!neighbours.has(room1)) {
      neighbours.set(room1, new Set());
    }
    // add the room2 as a neighbor
    neighbours.get(room1).add(room2);

    // if room2 not in matrix map, initialize empty set
    if (!neighbours.has(room2)) {
      neighbours.set(room2, new Set());
    }
    // add the room1 as a neighbor to room2
    neighbours.get(room2).add(room1);

    // take intersection of neighbors of room1 and room2, add the length of the result to the counter
    const intersection = new Set(
      [...neighbours.get(room1)].filter((x) => neighbours.get(room2).has(x))
    );
    cycles += intersection.size;
  }

  return cycles;
}

export { numberOfPaths };
// Depth First Search, using a stack (Last in, First out)
