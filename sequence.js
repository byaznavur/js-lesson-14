class Sequence {
  #start;
  #end;
  #interval;
  constructor(start, end, interval) {
    this.#start = start;
    this.#end = end;
    this.#interval = interval;
  }
  [Symbol.iterator]() {
    let start = this.#start;
    return {
      next: () => {
        let res;
        if (start <= this.#end) {
          res = { value: start, done: false };
        } else {
          res = { value: undefined, done: true };
        }
        start += this.#interval;
        return res;
      },
    };
  }
}

let arr = new Sequence(3, 20, 2);

// let iterator = arr[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (let el of arr) {
  console.log(el);
}
