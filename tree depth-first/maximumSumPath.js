// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

import TreeNode from "../TreeNode.js";

let maxSum = Infinity * -1;

function maxPathSum(root) {
  helper(root);
  let result = maxSum;
  maxSum = Infinity * -1;

  return result;
}

function helper(node) {
  if (node == null) return 0;
  let left = 0,
    right = 0;
  let maxLeft = helper(node.left);
  let maxRight = helper(node.right);
  if (maxLeft > 0) left = maxLeft;
  if (maxRight > 0) right = maxRight;

  let pathSum = node.data + left + right;
  maxSum = Math.max(maxSum, pathSum);

  return node.data + Math.max(left, right);
}

export { maxPathSum };
