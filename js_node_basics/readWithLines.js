// Demo: Line Numbers
const fs = require("fs");

const args = process.argv.slice(2);
const filePath = args[0];

fs.readFile(filePath, "utf8", (err, contents) => {
  if (err) throw err;

  console.log(
    contents
      .split("\n")
      .map((line, i) => i.toString().padEnd(5, " ") + "| " + line)
      .join("\n")
  );
});
