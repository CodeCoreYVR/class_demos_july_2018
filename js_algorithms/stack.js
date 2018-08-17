class Stack {
  constructor() {
    this.cursor = -1;
  }

  // You define special methods called "getters"
  // by prefixing the `get` keyword. These methods
  // do not need to be called to return its value, but
  // can't accept any arguments.
  get length() {
    return this.cursor + 1;
  }

  push(val) {
    this.cursor += 1;
    this[this.cursor] = val;

    // When it makes, you can return `this` to allow
    // method chaining.
    // (i.e. plate.push(10).push(9).push(8))
    return this;
  }

  pop() {
    if (this.cursor < 0) return undefined;

    const tmp = this[this.cursor];
    // The `delete` keyword is used to delete properties
    // from objects by dot notation or square bracket notation.
    delete this[this.cursor];
    this.cursor -= 1;

    return tmp;
  }
}

// usage:
const plate = new Stack();
plate.push(10);
plate.push(5);
plate.push(1);
// plate.pop(); // 1
// plate.pop(); // 5
// plate.pop(); // 10
// plate.pop(); // undefined
