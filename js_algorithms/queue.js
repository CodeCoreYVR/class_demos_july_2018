if (false) {
  class Queue {
    constructor() {
      this.data = [];
    }

    enqueue(val) {
      this.data.push(val);
      return this;
    }

    dequeue() {
      return this.data.shift();
    }
  }
}

class Queue {
  constructor() {
    this.beginCursor = 0;
    this.endCursor = -1;
  }

  enqueue(val) {
    this.endCursor += 1;
    this[this.endCursor] = val;

    return this;
  }

  dequeue() {
    const tmp = this[this.beginCursor];

    if (tmp) {
      delete this[this.beginCursor];
      this.beginCursor += 1;
      return tmp;
    }
  }

  get length() {
    return this.endCursor - this.beginCursor + 1;
  }
}

// usage:
const q = new Queue();
q.enqueue(10)
  .enqueue(11)
  .enqueue(14)
  .enqueue(25)
  .enqueue(12);
