// const user = { name: "Alice", age: 25 };
// // const name = user.name;
// // const age = user.age;

// const { name, age } = user;
// console.log("🚀 ~ name:", name);
// console.log("🚀 ~ age:", age);


// const arr = [10, 20, 30];
// const [a, b, c] = arr;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30


// const arr = [1,2,3,4];
// const [head, ...rest] = arr;
// console.log("🚀 ~ head:", head);
// console.log("🚀 ~ rest:", rest);

const user = { id: 101, nickname: "ysy" };
const { id, nickname } = user;
// console.log(id);       // 101
// console.log(nickname); // "ysy"

const { id: userId } = user;
console.log(userId); // 101
