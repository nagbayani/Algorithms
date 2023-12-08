// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

import TreeNode from "../TreeNode.js";

function buildStream(node, stream) {
  if (node == null) {
    stream.push("null");
    return stream;
  }
  // preorder traversal
  stream.push(node.data);
  stream = buildStream(node.left, stream);
  return buildStream(node.right, stream);
}

// Function to serialize tree into list of integers.
export function serialize(root) {
  if (!root) return null;
  let stream = [];
  stream = buildStream(root, stream);
  return stream;
}

function buildTree(stream) {
  let val = stream.pop();
  if (typeof val == "string" && val == "null") {
    return null;
  }
  let node = new TreeNode(val);
  node.left = buildTree(stream);
  node.right = buildTree(stream);
  return node;
}
// Function to deserialize integer list into a binary tree.
export function deserialize(stream) {
  if (!stream) return null;
  stream.reverse();
  let node = buildTree(stream);
  return node;
}
