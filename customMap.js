class CustomMap {
  #arr;
  constructor(arr) {
    this.#arr = arr;
  }
  [Symbol.iterator]() {
    let counter = 0;
    return {
      next: () => {
        let res;
        if (counter < this.#arr.length) {
          res = { value: this.#arr[counter], done: false };
          counter++;
        } else {
          res = { value: undefined, done: true };
        }
        return res;
      },
    };
  }
  get(pr) {
    let res = this.#arr.find((el) => el[0] === pr);
    return res[1];
  }
  get size() {
    return this.#arr.length;
  }
}

let roleAdmin = { role: "admin" };

let objMap = new CustomMap([
  ["a", 1],
  ["b", 2],
  ["c", 3],
  [roleAdmin, false],
]);

console.log(objMap.get(roleAdmin));

console.log(objMap.size);

// for (let el of objMap) {
//   console.log(el);
// }
