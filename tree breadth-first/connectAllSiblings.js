import Queue from "../0DataStructures/Queue";

/**
 * Given the root of a perfect binary tree, where each node is equipped with an additional pointer, next, connect all nodes from left to right. Do so in such a way that the next pointer of each node points to its immediate right sibling except for the rightmost node, which points to the first node of the next level.

The next pointer of the last node of the binary tree (i.e., the rightmost node of the last level) should be set to NULL.
 */
export default function connectAllSiblings(root) {
  let queue = new Queue(root);

  // while queue is not empty - look at nodes in queue
  while (queue.length > 0) {
    let levelSize = queue.length;
    let prevNode = null;

    for (let i = 0; i < levelSize; i++) {
      // pop off head node from queue
      let currentNode = queue.dequeue();
      if (prevNode !== null) {
        prevNode.next = currentNode;
      }
      // need to update prevNode to current node
      prevNode = currentNode;

      // need to add currentNode's children to queue
      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }
      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }

      // end of each level, set prevNode.next to the next element in queue
      if (queue.length > 0) {
        prevNode.next = queue.peek();
      }
    }
  }
  return root;
}

/**  TIME COMPLEXITY  O(n)
 *  We're using a level order traversal to connect all the siblings.
 *  In this traversal, we visit each node once, and because we are    setting the next pointer once and in constant time O(1) in each visit, then we can say that the overall time complexity is O(n), where n is the total number of nodes in the binary tree.
 */

/** SPACE COMPLEXITY O(n)
 * The space complexity is O(n).  I used a queue, which at most holds the amount of nodes at the widest level of the binary tree.
 * Typically the most amount of nodes at the widest level is n/2. In Big O Notation, this simplifies to O(n).
 *
 */

/**
 *  queue = [10]
 *  prev = null  curr = 10
 *  prev = 10  queue = [5,20]   queueSize = 2
 *  output = 10 -> 5
 *
 *  queue = [5,20] prev = 10
 *  curr = 5, queue=[20], prev-10 points to 5,  prev now = 5
 *  queue = [20, 25, 75],  prev-5 points to 20
 *
 *  prev = 10, queueSize = 3
 *  curr = 20, queue = [25,75], prev-5 points to 20, prev now = 20
 *  queue = [25, 75, 300, 10]  prev-20 points to 25
 *
 *  prev = 20, queueSize = 4
 * curr = 25, queue = [75, 300, 10], prev-20 points to 25, prev now=25
 * curr has no children
 *
 * prev=25 queueSize = 3
 * curr = 75, queue = [300, 10], prev-25 points to 75, prev now=75
 *
 */

// [10,5,20,25,75,300,10]
/**
 *      10
 *   5      20
 * 25 75  300 10
 */
