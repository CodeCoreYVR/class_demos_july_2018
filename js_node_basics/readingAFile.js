const fs = require("fs");

// Unicode Transformation Format
// Supports a total 1 112 064 characters
fs.readFile("./countrie.js", "utf8", (err, data) => {
  // In JavaScript when a programming crashes
  // with a visible error, we say that an error was thrown.

  // You can cause code to crash yourself by using the
  // keyword `throw` with any value. This halt the program
  // and show an error message.

  // We're doing it here, because if we don't the `err` will
  // go unnoticed.
  if (err) throw err;

  console.log(data);
});
