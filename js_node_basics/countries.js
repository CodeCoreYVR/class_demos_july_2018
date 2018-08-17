const countries = [
  "Canada",
  "United-States",
  "Mexico",
  "Argentina",
  "France",
  "Germany",
  "Morroco",
  "New-Zealand"
];

// Assign values to `module.exports` that you want to make
// available to another file loads this one with
// the `require` function.

// We call this file a "module".

// To use the exported countries in another file,
// do the following:
// `const countries =  require("./path/to/countries");`
module.exports = countries;
