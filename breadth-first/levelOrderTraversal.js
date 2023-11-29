// Definition of a binary tree node
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

export let levelOrderTraversal = function (root) {
  let result = "";
  if (!root) {
    return "None";
  } else {
    const queues = [new Queue(), new Queue()];
    let currentQ = queues[0];
    let nextQ = queues[1];

    // push root node to current queue, set level to 0
    currentQ.enqueue(root);
    let levelNumber = 0;

    // repeat until current q is empty
    while (currentQ.length > 0) {
      // deq 1st elem from current queue, push its children to nextQueue
      let temp = currentQ.dequeue();
      result += String(temp.data);
      if (temp.left) {
        nextQ.enqueue(temp.left);
      }
      if (temp.right) {
        nextQ.enqueue(temp.right);
      }
      // if current q is empty increase level number, swap the two queues
      if (currentQ.length === 0) {
        levelNumber++;
        if (nextQ.length > 0) {
          result += " : ";
        }
        let tempQ = currentQ;
        currentQ = nextQ;
        nextQ = tempQ;
      } else {
        result += ", ";
      }
    }
    return result;
  }
};

// a node in a linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add element into a queue
  enqueue(element) {
    const node = new Node(element);

    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  // Remove element from a queue
  dequeue() {
    if (this.head === null) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.length--;
    return value;
  }

  // Get value of the first element
  peek() {
    if (this.head === null) {
      return undefined;
    }
    return this.head.value;
  }

  // Check if queue is empty or not
  isEmpty() {
    return this.length === 0;
  }

  // A helper function to convert the nodes' data to
  // array format string
  toString() {
    if (this.head === null) return "[]";

    let result = "[";
    let current = this.head;
    while (current.next !== null) {
      result += current.value.data + ",";
      current = current.next;
    }
    result += current.value.data + "]";
    return result;
  }
}

export { Node, Queue };
