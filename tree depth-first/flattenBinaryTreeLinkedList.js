import TreeNode from "../TreeNode.js";

export function flattenTree(root) {
  if (root == null) return;
  let current = root;
  while (current != null) {
    // check if current has left child
    if (current.left !== null) {
      let visited = current.left;
      // find node on rightmost branch of left subtree that doesn't have a right child
      while (visited.right !== null) {
        visited = visited.right;
      }
      // once found rightmost of left subtree connect it with right child of current node
      visited.right = current.right;
      // set right child of current node to left child of current node
      current.right = current.left;
      // set left to null
      current.left = null;
    }
    current = current.right;
  }
  // Replace this placeholder return statement with your code
  return root;
}
