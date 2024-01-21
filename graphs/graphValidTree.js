function validTree(n, edges) {
  if (edges.length !== n - 1) return false;
  // adjacency array holding n nodes
  const adjacency = Array.from({ length: n }, () => []);
  // populate each node in adjacency array with their neighbors
  for (const [x, y] of edges) {
    adjacency[x].push(y);
    adjacency[y].push(x);
  }
  let nodeSet = new Set();
  let visited = [0];
  console.log(adjacency);

  // depth first search, pop node from visited stack
  while (visited.length > 0) {
    let current = visited.pop();
    // iterate through the neighbors of that adjacency array
    for (let neighbor of adjacency[current]) {
      // if neighbor is not in visited stack, add to set and visited stack
      if (nodeSet.has(neighbor)) continue;
      visited.push(neighbor);
      nodeSet.add(neighbor);
    }
  }
  // if length of set === n, return True
  if (nodeSet.size === n) return true;

  return false;
}

export { validTree };
