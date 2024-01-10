// LIFO Data Structure
// - Stores data "vertically"
class Stack {
  constructor(...elements) {
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
    return this.stack.length === 0;
  }

  search(searchItem) {
    // is the item in the stack?
    let stackIndex = this.stack.length - 1;

    while (stackIndex >= 0) {
      if (this.stack[stackIndex] === searchItem) return true;
      stackIndex--;
    }

    // if search fails, return falsey
    return false;
  }
}

// Instantiation
const stack = new Stack("a", "b", "c");
console.log({ init: stack });

// Push
stack.push(1, 2, 3);
console.log({ push: stack });

// Pop
stack.pop(1);
console.log({ pop: stack });

// Peek
console.log({ peek: stack.peek() });

// Empty
console.log({ empty: stack.empty() });

// Search
console.log({ searchResult: stack.search("d") });
