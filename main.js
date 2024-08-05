// my Objects

const User1 = {
  name: "hadi",
  lastName: "bahadori",
  age: 22,
};
const User2 = {
  name: "alireza",
  lastName: "noshad",
  age: 22,
};
const User3 = {
  name: "negar",
  lastName: "tamimi",
  age: 20,
};
const User4 = {
  name: "mohammad",
  lastName: "kohan",
  age: 21,
};
const User5 = {
  name: "amirhossein",
  lastName: "azad",
  age: 21,
};

// the below function get a Object name as a parameter and return a text

function getUser(user) {
  if (user == undefined) {
    throw new Error("your parameter can not be empty");
  }
  return `${user.name} ${user.lastName} is ${user.age}`;
}

// now we log the function

console.log(getUser(User1));
console.log(getUser(User2));
console.log(getUser(User3));
console.log(getUser(User4));
console.log(getUser(User5));
