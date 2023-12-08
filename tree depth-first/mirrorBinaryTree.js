// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

import TreeNode from "../TreeNode.js";

function mirrorBinaryTree(root) {
  if (root === null) return null;
  // let tempL = mirrorBinaryTree(root.left);
  // let tempR = mirrorBinaryTree(root.right);
  // (root.right = tempL), (root.left = tempR)
  if (root.left !== null) mirrorBinaryTree(root.left);
  if (root.right !== null) mirrorBinaryTree(root.right);
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
}

export { mirrorBinaryTree };
