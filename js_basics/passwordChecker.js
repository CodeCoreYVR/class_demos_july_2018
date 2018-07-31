const args = process.argv.slice(2);
const password = args[0];

if (!password) {
  console.log("Password required");
} else if (password.length > 12) {
  console.log("Password too long!");
} else if (password.length < 8) {
  console.log("Password is too short!");
} else {
  console.log("Just right.");
}
