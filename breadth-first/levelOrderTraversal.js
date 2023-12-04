// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

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

