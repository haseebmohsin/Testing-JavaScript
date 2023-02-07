//....................................................................
// array methods
// let array = [1, 2, 3, 4, 5, 6, 7, 7];
// let arrayObjs = [
//   {
//     name: 'laptop',
//     price: 3000,
//     version: 7,
//   },
//   {
//     name: 'MacBook',
//     price: 4000,
//     version: 8,
//   },
// ];

// for each............................................................
// array.forEach((item) => {
//   console.log(item);
// });

// map method...........................................................
// let sum = [];
// const result = array.map((item, index) => {
//   if (item % 2 === 1) sum.push(item);
// });

// const res = arrayObjs.map((item, index) => {
//   return item.price * item.version;
// });

// filter method........................................................
// let id = 3;
// const result = array.filter((item, index) => {
//   return item !== id;
// });

// const res = array.filter((item, index, arr) => {
//   return arr.indexOf(item) === index;
// });

// reduce method.........................................................
// const sum = array.reduce((prev, curr) => prev + curr);

// const max = array.reduce((prev, curr) => {
//   if (prev > curr) {
//     return prev;
//   } else {
//     return curr;
//   }
// });

// sort method............................................................
// const sort = array.sort((a, b) => (a > b ? -1 : 1));

// const sortObj = arrayObjs.sort((a, b) => {
//   return b.price - a.price;
// });

// const fill = new Array(4).fill(0);

// console.log(fill);
