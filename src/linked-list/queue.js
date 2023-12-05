const LinkedList = require("./linkedList");

/**
 * Implement a Queue using nothing more than a LinkedList.
 */

class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    this.linkedList.insert(value)
  }

  dequeue() {
    let temp = this.linkedList.head.value;
    this.linkedList.remove((node)=>node==this.linkedList.head)
    return temp;
  }

  peek() {
    return this.linkedList.head.value;
  }

  isEmpty() {
    if(this.linkedList.length > 0){
      return false;
    }
    else{
      return true;
    }
  }
}

module.exports = Queue;
