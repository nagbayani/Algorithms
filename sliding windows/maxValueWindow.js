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

export function bestFindMaxSlidingWindow(nums, w) {
  const deque = new Deque();
  const output = [];

  // Function to remove elements from the deque that are out of the current window range
  const cleanDeque = (index) => {
    while (!deque.isEmpty() && deque.peekFront() <= index - w) {
      deque.shift();
    }
  };

  for (let i = 0; i < nums.length; i++) {
    cleanDeque(i);

    // Add current index to the deque while maintaining decreasing order of values
    while (!deque.isEmpty() && nums[i] >= nums[deque.peekBack()]) {
      deque.pop();
    }
    deque.push(i);

    // Add maximum value of current window to the output array
    if (i >= w - 1) {
      output.push(nums[deque.peekFront()]);
    }
  }

  return output;
}
