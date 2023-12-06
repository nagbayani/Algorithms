function populateNextPointers(root) {
  // If root is null, return null
  if (!root) {
    return root;
  }

  // Initialize the mostleft node as the root
  let mostleft = root;

  // Loop until there are no more levels below
  while (mostleft.left) {
    // Initialize the current node as the mostleft node of the current level
    let current = mostleft;

    // Loop through the current level
    while (current) {
      // Connect the current node's left child to its right child
      current.left.next = current.right;

      // If there is a next node on the same level
      if (current.next) {
        // Connect the current node's right child to the left child of its next node
        current.right.next = current.next.left;
      }

      // Move to the next node on the same level
      current = current.next;
    }

    // Move down to the next level
    mostleft = mostleft.left;
  }

  // Return the modified root node with the connections between nodes
  return root;
}
