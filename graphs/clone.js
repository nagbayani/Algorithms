function helper(root, map) {
  //If graph is empty, return NULL.
  if (root === null) return null;
  //If the current node is not NULL, create a new Node with the same data as the current node, and add the current node as key and its clone as value to the hash map.
  let node = new Node(root.data);
  map.set(root, node);
  // Iterate through all the neighbors of the current node. For each neighbor, check if the neighbor is already cloned by looking up the neighbor in the hash map:
  for (let neighbor of root.neighbors) {
    console.log(neighbor);
    let foundX = map.get(neighbor);
    // If the neighbor is not cloned yet, recursively call the function with the neighbor as the current node.
    if (!foundX) {
      node.neighbors.push(helper(neighbor, map));
    } else {
      // If the neighbor is already cloned, add the cloned neighbor to the new node’s neighbors.
      node.neighbors.push(foundX);
    }
  }
  return node;
}

function clone(root) {
  // create root node
  const map = new Map();
  return helper(root, map);
}

class Node {
  constructor(d) {
    this.data = d;
    this.neighbors = [];
  }
}

export { clone };
