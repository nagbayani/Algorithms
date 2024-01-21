// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

import { TreeNode } from "./ds_v1/BinaryTree.js";

class Solution {
  constructor() {
    this.lca = null;
  }
  lowestCommonAncestor(root, p, q) {
    this.lcaHelper(root, p, q);
    return this.lca;
  }

  lcaHelper(node, p, q) {
    if (!node) return false;

    // tracking variables
    let mid = false;
    let left = false;
    let right = false;

    // if current node is p or q, change tracking variable to true
    if (node === p || node === q) mid = true;

    // check if left subtree has p / q
    left = this.lcaHelper(node.left, p, q);

    // if left tree still doesn't have lca, traverse right
    if (!this.lca) right = this.lcaHelper(node.right, p, q);

    // 2 of 3 should evaluate to 2 (True = 1, False = 0)
    // lca is found
    if (mid + left + right >= 2) this.lca = node;

    return mid || left || right;
  }
}

export default Solution;
