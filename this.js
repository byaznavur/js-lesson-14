// function Person (firstname) {

// }

function func(age) {
  this.age = age;
}

const arrowFunc = () => {
  console.log(this);
};

func(40);
arrowFunc();

console.log(this);
