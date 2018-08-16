// Use the `require` function to load
// an exported value from another file (module)
// by `module.exports`.
// In this case, we get the countries array from the
// "./countries.js" that was exported.
const countries = require("./countries");

console.log("I wanted to visit:");

for (let country of countries) {
  console.log(`  - ${country}`);
}
