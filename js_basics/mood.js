const args = process.argv.slice(2);
const mood = args[0];

// An if-block is a statement. Unlike an express,
// it doesn't evaluate to value.

// In a if-statement, the first if-block whose condition
// evaluates to `true` will be executed and the remaining
// blocks are ignored.

if (!mood) {
  console.log("Please tell me your mood!");
} else if (mood === "happy") {
  console.log("Yay! 😃");
} else if (mood === "angry") {
  console.log("About what? 💢");
} else {
  // Use a else block in a if-statement to provide
  // a default condition. This one will only execute
  // if none the blocks before were executed.
  console.log("Ok. 😶");
}

// When using a conditional or anything that expects
// a boolean, you do not to need to provide a boolean
// value. If the condition is given another type, JavaScript
// will convert into a boolean. This is called "type coercion".
// To verify how JavaScript convert's a value that way,
// use the not operator twice (!!).

// Values that convert to `true` are considered
// "truthy" and values that convert to `false`
// are considered "falsy".

// For example:
!!0; // returns false
!!"False"; // returns true
!!""; // returns false
!!5; // returns true
!!NaN; // returns false
!!undefined; // returns false`
!![]; // returns true
