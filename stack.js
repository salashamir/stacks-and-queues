const Node = require("./node");

// Stack data structure:
// remove from top and add to top
// LIFO
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push value: add new value onto stack, returns undefined
  push(val) {
    let node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }

    this.size++;
  }

  // pop(): remove node from the top, return value; throw error if stack empty
  pop() {
    if (!this.first) throw new Error("Stack is empty! Cannot pop.");

    let temp = this.first;

    if (this.first == this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  // peek() returns value of the last node
  peek() {
    return this.first.val;
  }

  // isEmpty() checks is tack is empty
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
