// function sum(arr) {
//   if (arr.length < 1) return 0;

//   return arr[0] + sum(arr.slice(1));
// }

function sum(arr) {
  // This is array destructuring.
  // If you put [] when assigning an arr to variables,
  // you can assign elements of the array based on their
  // position.
  // Below:
  // - `first` will the first element in `arr`
  // - `rest` will an array containing the remaining
  //   elements from `arr`
  // Note: `...rest` must be the last term.
  let [first, ...rest] = arr;
  if (rest.length < 1) return first;

  return first + sum(rest);
}

function startDebug() {
  debugger;
  sum([1, 2, 3, 4, 5]);
}
