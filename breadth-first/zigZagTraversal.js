import TreeNode from "../TreeNode";
import Deque from "../Deque.js";

function zigzagLevelOrder(root) {
  // If the root is NULL, return an empty list
  if (root == null) return [];

  // Creating an empty list to store the results
  let results = [],
    // Creating a deque with the root node as the only element
    dq = new Deque(),
    // Creating a flag to indicate the direction of the traversal
    reverse = false;
  dq.push(root);

  // Traverse the tree
  while (dq.length > 0) {
    // Getting the size of the current level
    let size = dq.length;
    // Insert an empty list at the end of the 'results' list
    results.push([]);

    // Traverse the nodes in the current level
    for (let i = 0; i < size; i++) {
      // Check the direction of the traversal
      if (reverse == false) {
        // If the direction is left-to-right, pop a node from the
        // start (left) of the deque and add it to the current level
        let node = dq.shift();
        results[results.length - 1].push(node.data);
        // Add the left and right child nodes
        // of the current node to the deque
        if (node.left != null) {
          dq.push(node.left);
        }
        if (node.right != null) {
          dq.push(node.right);
        }
      } else {
        // If the direction is right-to-left, pop the a node from the
        // back (right) of the deque and add it to the current level
        let node = dq.pop();
        results[results.length - 1].push(node.data);
        // Add the right and left child nodes
        // of the current node to the deque
        if (node.right != null) dq.unshift(node.right);
        if (node.left != null) dq.unshift(node.left);
      }
    }
    // Reverse the direction of traversal for the next level
    reverse = !reverse;
  }
  // Return the results
  return results;
}
