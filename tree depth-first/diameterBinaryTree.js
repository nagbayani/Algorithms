import TreeNode from "../TreeNode.js";
// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

function diameterCalc(node, diameter) {
  if (node === null) return [0, diameter];
  // for each node calculate height of left and right subtree
  else {
    let leftHeight, rightHeight;
    [leftHeight, diameter] = diameterCalc(node.left, diameter);
    [rightHeight, diameter] = diameterCalc(node.right, diameter);
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // calculate max height between left and right, +1 to account for current height level of node
    return [Math.max(leftHeight, rightHeight) + 1, diameter];
  }
}

function diameterOfBinaryTree(root) {
  if (!root) return 0;
  // traverse from root node
  let diameter = 0;
  let track = null;

  [track, diameter] = diameterCalc(root, diameter);

  return diameter;
}

export { diameterOfBinaryTree };
