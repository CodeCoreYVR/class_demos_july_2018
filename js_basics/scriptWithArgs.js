// `process` is global variable in Node programs
// that contains information about the running
// JavaScript code.
// console.log(process.argv);

// `process.argv` returns an array where
// the first value is the full path to your
// node program and the second value is the full
// path to the script file.

// All later values are arguments that are passed to the
// script.
// Example:
// node scripWithArgs.js firstArg secondArg
//                          👆         👆
//                      3rd value of   4th value of
//                      array          array

const args = process.argv.slice(2);
// We're using `slice` on the array of arguments
// to cut off the first 2 values which we do not
// want. This will leave us with array that only
// the arguments.

console.log(args);

console.log("First argument:", args[0]);
console.log("Second argument:", args[1]);
console.log("Third argument:", args[2]);
