[1, 2, 3, 4, 5]
['a', 'b', 'c', 'd']
[1, 'b', 'c', 2]
[1, 'b', 'c', [5, 6, 7]]
[1, 'b', 'c', [5, 6, 7]].length
[1, 'b', 'c', [5, 6, 7], repeat('ab', 10)]
[1, 'b', 'c', [5, 6, 7], repeat('ab', 10), repeat]
const items = [1, 'b', 'c', [5, 6, 7], repeat('ab', 10), repeat];
items[0]
items[5]
items[5]('hello', 10);

const numbers1 = [1,2,3];
const numbers2 = [4,5,6];

console.log(numbers1.concat(numbers2));

const myArray = [1,2,3,4,5];
// undefined
myArray.shift()
// 1
myArray
// [ 2, 3, 4, 5 ]
myArray.pop()
// 5
myArray
// [ 2, 3, 4 ]
myArray.unshift(100);
// 4
myArray
// [ 100, 2, 3, 4 ]
myArray.push(200);
// 5
myArray
// [ 100, 2, 3, 4, 200 ]