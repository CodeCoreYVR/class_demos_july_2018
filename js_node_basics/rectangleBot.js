const readline = require("readline");
const createRectangle = require("./createRectangle");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// To continuously ask questions with
// `rl.question` you have to use recursion.

// Put questions in a function and call it whenever
// you want to restart. To exit, you may to a condition
// that'll call `rl.close()`.
function askDimensions() {
  rl.question("What's the width?\n> ", width => {
    if (width === "q") return rl.close();

    rl.question("What's the height?\n> ", height => {
      if (height === "q") return rl.close();

      console.log(createRectangle(width, height));

      askDimensions();
    });
  });
}

askDimensions();
