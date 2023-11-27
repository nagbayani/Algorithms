function removeNthLastNode(head, n) {
  let left = head;
  let right = head;
  let count = 0;
  while (count < n) {
    right = right.next;
    count++;
  }

  while (right !== null && right.next !== null) {
    left = left.next;
    right = right.next;
  }
  if (left === head) {
    head = head.next;
  } else {
    left.next = left.next.next;
  }

  // Replace this placeholder return statement with your code
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
