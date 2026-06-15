const arr = ["45555", "356834", "876497", "38468"];

const colnum = arr.map((item) => {
  return parseInt(item);
});
console.log(colnum);

const greater = colnum.filter((item) => {
  return item > 300000;
});
console.log(greater);

const findd = greater.find((item) => {
  return item > 300000;
});
console.log(findd);
