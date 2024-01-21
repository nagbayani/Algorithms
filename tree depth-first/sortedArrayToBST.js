// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

import { TreeNode } from "./ds_v1/BinaryTree.js";

function sortedArrayToBST(nums) {
  let low = 0;
  let high = nums.length - 1;

  return buildTree(nums, low, high);
}

function buildTree(nums, low, high) {
  let mid = Math.floor((low + high) / 2);
  if (low > high) return null;
  let node = new TreeNode(nums[mid]);
  node.left = buildTree(nums, low, mid - 1);
  node.right = buildTree(nums, mid + 1, high);
  return node;
}

export { sortedArrayToBST };
