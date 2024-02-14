// FIFO Data Structure
// - Holds elements prior to processing
export default class Queue {
  constructor(...items) {
    this.queue = [...items];
  }

  enqueue(...items) {
    // add item at the end of the queue
    // this item becomes the new Tail
    this.queue.push(...items);
  }

  dequeue(count = 1) {
    // remove first item in the queue
    // The new first item then becomes the new Head
    let countdown = count;

    while (countdown > 0) {
      this.queue.shift();
      countdown--;
    }
  }

  peek() {
    // what is at the front of the queue?
    return this.queue[0];
  }

  empty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  contains(searchItem) {
    for (let idx = 0; idx < this.queue.length; idx++) {
      if (this.queue[idx] === searchItem) return true;
    }

    return false;
  }
}

// // Instantiation
// const queue = new Queue(1, 2, 3);
// console.log({ queue: queue });

// // Enqueue
// queue.enqueue(4);
// console.log({ enqueue: queue });

// // Dequeue
// queue.dequeue(2);
// console.log({ dequeue: queue });

// // Peek
// console.log({ peek: queue.peek() });

// // Empty
// console.log({ empty: queue.empty() });

// // Size
// console.log({ size: queue.size() });

// // Contains
// console.log({ contains: queue.contains(5) });
