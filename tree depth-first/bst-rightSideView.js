import TreeNode from "../TreeNode.js";
// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

function rightSideView(root) {
  if (!root) return [];
  let results = [];
  results = rightSideHelper(root, results, 0);
  return results;
}

function rightSideHelper(node, results, level) {
  if (level === results.length) {
    results.push(node.data);
  }
  if (node.right) rightSideHelper(node.right, results, level + 1);
  if (node.left) rightSideHelper(node.left, results, level + 1);
  return results;
}

export { rightSideView };
