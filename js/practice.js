// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

// //Write code under this line
// user.mood = 'happy';
// user['full time'] = true;
// user.hobby = 'skydiving';
// user.premium = false;
// // console.log(user);
// const keys = Object.keys(user);
// // Write code under this line
// for (const key of keys) {
//   message = `${key}:${user[key]}\n`;
// }

// console.log(message);

// const countProps = function (obj) {
//   'use strict';
//   // Write code under this line
//   let message = Object.values(obj).length;
//   console.log(message);
//   return message;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  let total = 0;
  const values = Object.values(employees);
  for (const value of values) {
    total += value;
  }

  return total;
};

const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
