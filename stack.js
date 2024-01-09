class Stack {
  // can accept any number of args
  constructor(...elements) {
    // instantiate stack as an array of the elements
    this.stack = [...elements];
  }

  push(...items) {
    // add item to the top of the stack
    this.stack.push(...items);
  }

  pop(count = 1) {
    // remove n items off the top of the stack
    let countdown = count;

    while (countdown > 0) {
      this.stack.pop();
      countdown--;
    }
  }

  peek() {
    // what is the item at the top of the stack?
    return this.stack[this.stack.length - 1];
  }

  empty() {
    // is the stack empty
    return this.stack.legth === 0;
  }

  search() {
    // search stack for an item
  }
}

let stack = new Stack("a", "b", "c");
console.log({ init: stack });

stack.push(1, 2, 3);
console.log({ push: stack });

stack.pop(1);
console.log({ pop: stack });

const peekStack = stack.peek();
console.log({ peek: peekStack });

// How to execute: `node stack.js`
