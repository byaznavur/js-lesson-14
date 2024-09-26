let obj = { a: 1 };

let arr = [obj, obj];

let arrWeakSet = new WeakSet(arr);

console.log(arrWeakSet);
console.log(arrWeakSet.size);
