function removeNthLastNode(head, n) {
  // Point two pointers, right and left, at head.
  let right = head;
  let left = head;

  // Move right pointer n elements away from the left pointer.
  for (let i = 0; i < n; i++) {
    right = right.next;
  }

  // Removal of the head node.
  if (!right) {
    return head.next;
  }

  // Move both pointers until right pointer reaches the last node.
  while (right.next != null) {
    right = right.next;
    left = left.next;
  }

  // At this point, left pointer points to (n-1)th element.
  // So link it to next to next element of left.
  left.next = left.next.next;

  return head;
}

export { removeNthLastNode };

// Template for the linked list
class LinkedList {
  constructor() {
    this.head = null;

    // insertNodeAtHead method will insert a LinkedListNode at head
    // of a linked list.
    this.insertNodeAtHead = function (node) {
      if (this.head != null) {
        node.next = this.head;
        this.head = node;
      } else this.head = node;
    };

    // createLinkedList method will create the linked list using the
    // given integer array with the help of InsertAthead method.
    this.createLinkedList = function (list) {
      list.reverse().forEach((element) => {
        let newNode = new LinkedListNode(element);
        this.insertNodeAtHead(newNode);
      });
    };

    // This method will display the elements of the linked list.
    this.display = function () {
      let result = "",
        temp = this.head;
      while (temp != null) {
        result += temp.data;
        temp = temp.next;
        if (temp != null) {
          result += ", ";
        }
      }
      result += "";
      return result;
    };
  }
}

export { LinkedList };

// Template for linked list node class
class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export { LinkedListNode };
