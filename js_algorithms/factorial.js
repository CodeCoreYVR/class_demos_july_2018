function factorial(n) {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
}

// factorial(4)
// 4 * factorial(4 - 1)
// 4 * (3 * factorial(3 - 1))
// 4 * (3 * (2 * factorial(2 - 1)))
// 4 * (3 * (2 * (1)))

function factorialIter(n) {
  let total = 1;
  for (let i = n; i >= 1; i -= 1) {
    total *= i;
  }
  return total;
}

// Benchmark Factorial Implementations

console.time("Factorial Recursive");
for (let i = 0; i < 1000; i += 1) {
  factorial(5000);
}
console.timeEnd("Factorial Recursive");

console.time("Factorial Iterative");
for (let i = 0; i < 1000; i += 1) {
  factorialIter(5000);
}
console.timeEnd("Factorial Iterative");
