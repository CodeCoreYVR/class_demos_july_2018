// function mapMult(arr) {
//   if (arr.length <= 1) return arr;

//   return [arr[0] ** 2].concat(mapMult(arr.slice(1)));
// }

function mapMult(arr) {
  let [first, ...rest] = arr;
  if (first === undefined) return [];

  return [first ** 2, ...mapMult(rest)];
}
