// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

import TreeNode from "../TreeNode.js";

function buildTree(pOrder, iOrder) {
  // Map to hold inorder list and their indices
  let mapping = new Map();

  for (let i = 0; i < iOrder.length; i++) {
    mapping.set(iOrder[i], i);
  }

  // pass pIndex value by reference
  let pIndex = [0];

  return helper(pOrder, iOrder, 0, iOrder.length - 1, mapping, pIndex);
}

function helper(pOrder, iOrder, left, right, mapping, pIndex) {
  // no nodes left to construct
  if (left > right) return null;

  // pick current node from postorder list
  let curr = pOrder[pIndex[0]];
  pIndex[0]++;

  let root = new TreeNode(curr);

  // node has no children, return node
  if (left == right) return root;

  let inIndex = mapping.get(curr);
  root.left = helper(pOrder, iOrder, left, inIndex - 1, mapping, pIndex); // recursively build left subtree using inIndex
  root.right = helper(pOrder, iOrder, inIndex + 1, right, mapping, pIndex); // recursively build right subtree using inIndex

  return root;
}

export { buildTree };
