/*




*/

function networkDelayTime(times, n, k) {
  // Create an adjacency dictionary to store the information of the nodes and their edges.
  const adjacency = new Map();
  for (let [src, target, delay] of times) {
    if (!adjacency.has(src)) {
      adjacency[src].set(src, []);
    }
    adjacency.get(src).push([target, delay]);
  }

  // priority queue to store the nodes and their delay times
  const priority = [];

  //  Initialize the queue with the source node and a delay time of 0.
  priority.push({ node: k, time: 0 });

  // Use a visited set to track the nodes that have already been processed.
  const visited = new Set();

  // store minimum delaysTime
  let delaysTime = 0;

  // Process the nodes from the priority queue by first visiting the node with the smallest delay time and updating the delay time if necessary.
  while (priority.length > 0) {
    priority.sort((a, b) => {
      a.time - b.time;
    });

    // retrieve 1st in priority queue
    const { node, time } = priority.shift();

    if (visited.has(node)) {
      continue;
    }
    // update minimum delay time
    delaysTime = Math.max(delays, time);

    visited.add(node);

    // look at adjacency dictionary, retrieve neighbors of current priority node
    const neighbors = adjacency.get(node) || [];

    // Add the unvisited neighbors of the processed node to the priority queue with their new delay times.
    for (const neighbor of neighbors) {
      const neighborNode = neighbor[0];
      const neighborTime = neighbor[1];

      if (!visited.has(neighborNode)) {
        const newTime = time + neighborTime;
        priority.push({ node: neighborNode, time: newTime });
      }
    }

    if (visited.size === n) {
      return delaysTime;
    }
  }

  // Return the delay time if all nodes have been processed. Otherwise, return -1
  return -1;
}

export { networkDelayTime };
