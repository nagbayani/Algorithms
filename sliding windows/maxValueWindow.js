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

    // check if current num is greater than last value in deque
    while (!deque.isEmpty() && nums[i] >= nums[deque.peekBack()]) {
      console.log("nums i value", nums[i]);
      console.log(
        "peek index",
        deque.peekBack(),
        "peek value",
        nums[deque.peekBack()]
      );
      deque.pop();
    }
    deque.push(i);

    // Add maximum value of current window to the output array
    if (i >= w - 1) {
      output.push(nums[deque.peekFront()]);
      // console.log('i', i);
      // console.log('output', output)
    }
  }

  return output;
}

// [2,4,3,6,5,4,1,10], w = 3
// i(0), d: 0
// i(1), d: 1
// i(2), d: 1,2,          output: [4]
// i(3), pop 1,2 = d: 3,  output: [4,6]
// i(4), d: 3,4           output: [4,6,6]
// i(5), d: 3,4,5         output: [4,6,6,6]
// i(6), clean until >3 = d: 4,5 , push 6 d:4,5,6
//                        output: [4,6,6,6,5]
// i(7), clean until >4 = d: 5,6, pop 5,6. push 7 d: 7
//                        output: [4,6,6,6,5,10]
