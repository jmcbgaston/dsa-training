class Stack {
  constructor(...elements) {
    this.stack = [...elements];
  }

  push() {
    // add item to the top of the stack
  }

  pop() {
    // remove the item at the top of the stack
  }

  peek() {
    // what is the item at the top of the stack?
  }

  empty() {
    // is the stack empty
  }

  search() {
    // search stack for an item
  }
}

let stack = new Stack("a", "b", "c");
console.log(stack);

// stack.push(1);
// console.log(stack);

// stack.pop();
// console.log(stack);
