/*
A maze consists of n rooms numbered from 1-n and some rooms are connected by corridors. You are given a 2D integer array, corridors, where corridors[i]= [room1, room2], allowing a person in the maze to go from room1to room2 and vice versa.
*/

function numberOfPaths(n, corridors) {
  // create adjacency matrix
  // for each node, create n arrays
  let adjMatrix = Array.from({ length: n }, () => Array(n).fill(0));

  // create counter for storing number of cycles
  let counter = 0;

  // iterate over corridors, store neighbors of room1 and room2 in the matrix
  for (const pair of corridors) {
    const [room1, room2] = pair;
    adjMatrix[room1 - 1][room2 - 1] = 1;
    adjMatrix[room2 - 1 ][room1 - 1] = 1;
  }

  // Depth First Search, using a stack (Last in, First out)
  // take intersection of neighbors of room1 and room2, add the length of the result to the counter

  // Replace this placeholder return statement with your code
  return -1;
}

export { numberOfPaths };
