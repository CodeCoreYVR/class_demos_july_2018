// JS: Higher-Order Functions

// Exercise: To Arrow Function

// function add(a, b) {
//   return a + b;
// }

const add = (a, b) => a + b;

// function flip(fn) {
//   return function(a, b) {
//     return fn(b, a);
//   };
// }

// const flip = fn =>
//   function(a, b) {
//     return fn(b, a);
//   };

const flip = fn => (a, b) => fn(b, a);

// function V(x) {
//   return function(y) {
//     return function(z) {
//       return z(x)(y);
//     };
//   };
// }

const V = x => y => z => z(x)(y);

// V(10)(20)(fn);

// `this` in Arrow Functions

const myArrow = () => this;
const myFunc = function() {
  return this;
};

const myObject = {
  myProp: "A property value",
  myArrow: myArrow,
  myFunc: myFunc,
  // `this` for the following is actually the `window`.
  // This is because () => this is being inside the block
  // of the script file. Braces to create an object ({})
  // do not count as a code block therefore they do not
  // get their scope and variables.
  myInlineArrow: () => this,
  myMethod() {
    const myArrow = () => this;
    const myFunc = function() {
      return this;
    };
    console.log("--- Inside myObject.myMethod() ---");
    console.log("myArrow:", myArrow()); // myObject
    console.log("myFunc:", myFunc()); // Window (or undefined)
  }
};

// console.log("myArrow:", myArrow()); // Window (or undefined)
// console.log("myFunc:", myFunc()); // Window (or undefined)
// console.log("myObject.myArrow:", myObject.myArrow()); // Window (or undefined)
// console.log("myObject.myFunc:", myObject.myFunc()); // myObject
// console.log("myObject.myInlineArrow:", myObject.myInlineArrow()); // ???
// myObject.myMethod();

// Higher-Order Functions

// Demo: A Loud Function
// Exercise: A Custom Logger

const five = () => 5;

const loud = (logFn, fn, ...args) => {
  logFn(`Calling ${fn.name}...`);
  const returnValue = fn(...args);
  logFn(`Called ${fn.name} and returned ${returnValue}...`);

  return returnValue;
};

// usage:

if (false) {
  loud(console.warn, add, 90, 40);
  // demo.js:79 Calling add...
  // demo.js:81 Called add and returned 130...
  // 130
  loud(console.error, add, 90, 40);
  // demo.js:79 Calling add...
  // demo.js:81 Called add and returned 130...
  // 130
  loud(console.info, add, 90, 40);
  // demo.js:79 Calling add...
  // demo.js:81 Called add and returned 130...
  // 130
}

// Demo: Implement Higher-Order Function: each

const each = (fn, arr) => {
  // for (let val of arr) {
  //   fn(val);
  // }
  for (let i = 0; i < arr.length; i += 1) {
    fn(arr[i], i);
  }
};

// usage:

// each(val => console.log("The value is", val), ["a", "b", "c", "d"]);
// each(
//   (val, index) => console.log("The value is", val, "and the index is", index),
//   ["a", "b", "c", "d"]
// );

// Exercise: Implement Higher-Order Function: map

const map = (fn, arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(fn(arr[i], i));
  }

  return newArr;
};

// usage:

map(val => val * 2, [1, 2, 3, 4, 5]); // (5) [2, 4, 6, 8, 10]
map(five, [1, 2, 3, 4, 5]); // (5) [5, 5, 5, 5, 5]
map(add, [1, 2, 3, 4, 5]); // (5) [1, 3, 5, 7, 9]
[1, 2, 3, 4, 5].map(val => val * 2);

// Demo: setTimeout

function setTimeoutDemo() {
  let count = 0;
  console.log("Before setTimeout:", count);

  // `setTimeout` is one of many asynchronous functions in
  // JavaScript. It's asynchronous because the JavaScript will
  // not wait until its callback called to execute the next
  // line of code.

  // This means that if any of your code depends on something
  // that happens inside of setTimeout's callback, then you must
  // use that code in the callback.
  setTimeout(() => {
    count += 2;
    console.log("Waited 2s!");
    console.log("Inside setTimeout's callback:", count);
  }, 2000);

  console.log("After setTimeout:", count);
}

// Demo: clearTimeout & clearInterval

const clearTimeoutIntervalDemo = () => {
  let count = 0;

  const intervalId = setInterval(() => {
    console.log(`Count at ${(count += 1)}`);
  }, 500);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 500 * 10);
};

// Demo: Higher-Order Function: reduce
// reduce is also called "fold" in other languages

const reduce = (fn, arr) => {
  let accumulator = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    accumulator = fn(accumulator, arr[i], i);
  }

  return accumulator;
};

// usage:

reduce(add, [1, 2, 3, 4, 5]); // 15;
reduce(add, [1, 2, 3, 4, 5, 6, 7]); // 28;
reduce((acc, v) => "" + acc + v, [1, 2, 3, 4, 5, 6, 7]); // ("1234567");
reduce((acc, v) => acc * v, [1, 2, 3, 4, 5, 6, 7]); // 5040;
reduce(five, [1, 2, 3, 4, 5, 6, 7]); // 5;
[1, 2, 3, 4, 5].reduce(add); // 15
[1, 2, 3, 4, 5].reduce((acc, v) => acc * v); // 120;
