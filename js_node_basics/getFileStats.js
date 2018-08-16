const fs = require("fs");

fs.stat("getFileStats.js", (err, stat) => {
  console.log(stat);
  console.log(stat.__proto__);

  console.log(`Is it a file?`, stat.isFile());
  console.log(`Is it a directory?`, stat.isDirectory());
});
