// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

import TreeNode from "../TreeNode.js";
import Queue from "../Queue.js";

function isSymmetric(root) {
  if (root === null) return false;
  let nodeQ = new Queue();
  // traverse from root, add left and right nodes to queue
  nodeQ.enqueue(root.left);
  nodeQ.enqueue(root.right);
  while (nodeQ.length !== 0) {
    // dequeue two elements, store in left and right
    let left = nodeQ.dequeue();
    let right = nodeQ.dequeue();

    // if left and right are null, continue traversal, dequeue next elems
    if (!left && !right) continue;

    // if any one from left or right is null return false
    if ((!left && right) || (left && !right)) return false;

    // if left !== right, return false
    if (left.data !== right.data) return false;
    // enqueue left node of left, right node of right
    nodeQ.enqueue(left.left);
    nodeQ.enqueue(right.right);

    // enqueue right node of left, left node of right
    nodeQ.enqueue(left.right);
    nodeQ.enqueue(right.left);
  }

  return true;
}

export { isSymmetric };
