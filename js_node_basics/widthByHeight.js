const fs = require("fs");

const args = process.argv.slice(2);
const [width, height] = args;
// const width = args[0];
// const height = args[1];

// > new Array(4)
// [ <4 empty items> ]
// > [ ...new Array(4) ]
// [ undefined, undefined, undefined, undefined ]
// > Array.from({ length: 4 })
// [ undefined, undefined, undefined, undefined ]
// > Array.from({ length: 4 }).map(() => "*".repeat(4))
// [ '****', '****', '****', '****' ]
// > Array.from({ length: 4 }).map(() => "*".repeat(4)).join("\n")
// '****\n****\n****\n****'
// > console.log(Array.from({ length: 4 }).map(() => "*".repeat(4)).join("\n"))
// ****
// ****
// ****
// ****

const createRectangle = (width, height) => {
  return Array.from({ length: height })
    .map(() => "*".repeat(width))
    .join("\n");
};

const filename = `${width}_by_${height}`;

fs.writeFile(filename, createRectangle(width, height), err => {
  if (err) throw err;

  console.log(`Wrote ${filename} to disk...`);
});
