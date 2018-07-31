let count = 100;

while (count >= 0) {
  console.log(count);

  // count = count - 1;
  // The line below is a shortcut for the line above.
  count -= 1;

  // It's best practice to avoid using the
  // decrement (--) and increment (++) operaters.
  // Instead, use the operator-assignment version.
  // --count -> count -= 1;
  // ++count -> count += 1;

  // count = 10
  // let a = --count;
  // let b = count--;

  // count = count * 10;
  // count *= 10;
  // count %= 10;
}
