const Node = require("./node");

// Queue data structure:
// remove from front add to end
// FIFO
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // enqueue() add new value to the end of queue, returns undefined
  enqueue(val) {
    let node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.size++;
  }

  // dequeue() remove the node from start of the queue and return value; should throw error if queue empty
  dequeue() {
    if (!this.first) throw new Error("Can't remove from empty queue");

    let temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  //   peek() returns val of rist node in queue
  peek() {
    return this.first.val();
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
