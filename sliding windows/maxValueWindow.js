import Deque from "./deque.js";

export function findMaxSlidingWindow(nums, w) {
  // initialize deque
  let deque = new Deque();
  let output = [];
  // If the window size is greater than the array size, we consider the entire array as a single window.
  let left = 0;
  let right = w;
  for (let i = 0; i < nums.length; i++) {
    let windowGroup = [...nums];
    windowGroup = windowGroup.slice(left, right);
    if (windowGroup.length === w) {
      deque.push(windowGroup);
    }
    left++, right++;
  }

  while (deque.length > 0) {
    let current = deque.shift();
    let maximum = current.reduce((a, b) => Math.max(a, b));
    output.push(maximum);
  }
  return output;
}
