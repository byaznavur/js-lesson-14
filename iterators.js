let arr = [3, 2, 6, 8, 1];

// let obj = { a: 1, b: 2 };
// console.log(obj[Symbol.iterator]());

let arrIterator = arr[Symbol.iterator]();
// console.log(arrIterator);

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
