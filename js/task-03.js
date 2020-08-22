const findBestEmployee = function (employees) {
  const employee = Object.keys(employees);
  let max = 0;
  let person;
  for (const key of employee) {
    // console.log(key, employees[key]);
    if (employees[key] > max) {
      max = employees[key];
      person = key;
    }
  }
  return `${person}:${max}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
