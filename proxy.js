let user = {
  firstName: 12,
  lastName: "Programmer",
};

let handler = {
  get(target, property) {
    if (property === "firstName" && typeof target[property] !== "string") {
      throw "Firstname must be string !";
    }
    return target[property];
  },
  set(target, property, value) {
    if (property === "lastName" && typeof value !== "string") {
      throw "Lastname must be string";
    }
  },
};

let proxyUser = new Proxy(user, handler);

try {
  console.log(proxyUser);
  proxyUser.lastName = null;
  console.log(proxyUser.firstName);
} catch (err) {
  console.log("Error:", err);
}
