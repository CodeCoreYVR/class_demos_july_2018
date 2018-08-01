function sum(arr) {
  let count = 0;
  for(let element of arr) {
    if(typeof(element) === 'number') {
      count += element;
    }
  }
  return count;
}

console.log(sum([]));
console.log(sum([4,5,6,7,7,3]));
console.log(sum([4,5,6,7,7,3]));
console.log(sum([4,5,6,7,7,'a', null, undefined, true, [1, 2], {}]));