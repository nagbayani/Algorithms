// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

import TreeNode  from "../TreeNode.js"
import Queue from "../Queue.js"

export function verticalOrder(root) {
  let nodeQ = new Queue(); // queue for processing nodes
  let mapcolumn = {}; // hashmap for holding nodes and their column numbers
  let maxCol = 0; // maximum column = most right column
  let minCol = 0; // minimum column = most left column
  let results = [];

  // traverse level by level, starting at root
  nodeQ.enqueue([root, 0]);
  while (nodeQ.length !== 0) {
    let [node, column] = nodeQ.dequeue();
    if (node !== null) {
      if (!mapcolumn[column]) mapcolumn[column] = [];
      mapcolumn[column].push(node.data);
      // keep track of maximum and minimum columns
      maxCol = Math.max(maxCol, column);
      minCol = Math.min(minCol, column);

      // if node has children, add them to queue with column number
      nodeQ.enqueue([node.left, column - 1]);
      nodeQ.enqueue([node.right, column + 1]);
    }
  }

  console.log(mapcolumn);
  // iterate through hash map and push each column to results array
  for (let i = minCol; i <= maxCol; i++) {
    results.push(mapcolumn[i]);
  }

  return results;
}
