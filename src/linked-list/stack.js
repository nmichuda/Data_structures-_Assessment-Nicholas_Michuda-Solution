/**
 * Implement a Stack using nothing more than a LinkedList.
 */

const LinkedList = require("../linked-list/linkedList");

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.insertAtHead(value);
    
    
  }

  pop() {
    let temp = this.linkedList.head.value;
    this.linkedList.remove((node)=>node==this.linkedList.head);
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

module.exports = Stack;
