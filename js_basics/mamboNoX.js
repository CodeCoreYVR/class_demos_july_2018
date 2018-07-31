// In the first part of a `for` loop,
// we write variable declarations and assignments.

// In the second part seperated by semi-colon (;),
// we write the condition. This would be the same
// we'd write in a `while` loop's ().
// When condition evaluates to `false`, the for-loop
// will exit.

// In the third part also seperated by ;,
// we write code that will eventually to exiting
// the loop. Very often we decrement or increment
// the variable decalred in the first part.

for (let i = 0; i < 10; i += 1) {
  console.log(`Mambo No. ${i}`);
  // Code from third part executes here. Always
  // at the end of the for-loop.
}
