// const users = [
//   { firstName: 'Haseeb', lastName: 'Khan', age: 21 },
//   { firstName: 'zia', lastName: 'Doe', age: 41 },
//   { firstName: 'Khan', lastName: 'yaa', age: 11 },
// ];

// const output = users.reduce((acc, user) => {
//   if (user.age < 30) {
//     acc.push(user.firstName);
//   }
//   return acc;
// }, []);

// console.log(output);

//..................................................................
// const result = payment(4);

// result
//   .then(function (id) {
//     console.log(id);
//   })
//   .catch(function (err) {
//     console.log('The id is not valid');
//   });

// // promise producer.
// function payment(id) {
//   return new Promise((resolve, reject) => {
//     if (id !== 5) {
//       reject(new Error('Invalid payment id'));
//     }
//     resolve('Success');
//   });
// }

//.....................................................................
// let a = 5;
// let b = a;

// console.log(b === a);

// .....................................................................
// function a() {
//   var g;
// }

// function b() {
//   var g = true;
//   a();
// }

// var g = false;
// b();

// console.log(g);

//...................................................................
// function Fun(val) {
//   this.val = val;
//   console.log(val);
// }

// const obj = new Fun(5);

// console.log(obj.Fun());

//...................................................................
// const one = () => {
//   console.log(this);
// };

// function two() {
//   console.log(this);
// }

// one();
// two();

//.....................................................................
// function one() {
//   const age = 20;
//   return function (height) {
//     return age * height;
//   };
// }

// console.log(one()(5));

//.......................................................................
// let array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//   (function (clouserI) {
//     setTimeout(() => {
//       console.log(clouserI);
//     }, 2000);
//   })(i);
// }

//........................................................................
// function a() {}

// console.log(a.__proto__.__proto__);

//.........................................................................
// Array.prototype.map = function () {
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(`${this[i]} mapView`);
//   }
//   return newArray;
// };

// console.log([1, 2, 5, 4].map());

//.........................................................................
// function Fun(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const inst = new Fun('Haseeb', 24);

// Fun.prototype.modify = function () {
//   return (this.age = this.age + 1);
// };

// console.log(inst.modify());

//............................................................................
// var name = 'Window Name';

// const Person = {
//   name: 'Object Name',

//   regular: function () {
//     console.log('Regular single: ' + this.name);
//   },

//   arrow: () => {
//     console.log('Arrow single: ' + this.name);
//   },

//   innerRegular: function () {
//     let inner = function () {
//       console.log('inner Regular: ' + this.name);
//     };
//     return inner();
//   },

//   innerArrow: function () {
//     var inner = () => {
//       console.log('inner Arrow: ' + this.name);
//     };
//     return inner();
//   },
// };

// Person.regular();
// Person.arrow();

// Person.innerRegular();
// Person.innerArrow();

//.......................................................................
// Toptal task solution.
// function timer(t) {
//   let w = 604800;
//   let d = 86400;
//   let h = 3600;
//   let m = 60;

//   let remainder = t;

//   if (remainder >= w) {
//     remainder = t % w;
//     var weeks = t - remainder;
//     weeks = weeks / w + 'w';
//   }

//   if (remainder >= d) {
//     let remain = remainder % d;
//     var days = remainder - remain;
//     days = days / d + 'd';
//     remainder = remain;
//   }

//   if (remainder >= h) {
//     let remain = remainder % h;
//     var hours = remainder - remain;
//     hours = hours / h + 'h';
//     remainder = remain;
//   }

//   if (remainder >= m) {
//     let remain = remainder % m;
//     var minutes = remainder - remain;
//     minutes = minutes / m + 'm';
//     remainder = remain;
//   }

//   var seconds = remainder + 's';
//   let res = `${weeks ?? ''}${days ?? ''}${hours ?? ''}${minutes ?? ''}${
//     seconds ?? ''
//   }`;

//   console.log(res);
// }

// timer(100);

//..............................................................................
// currying
// const add = (a) => (b) => a + b;
// const addWith10 = add(10);
// const res = addWith10(4);

// console.log(res);

//................................................................................
// memoization and caching

// let cache = {};
// function memoizeAddition(n) {
//   if (n in cache) {
//     return cache[n];
//   }
//   console.log('Calculation is done');
//   cache[n] = n + 5;
//   return cache[n];
// }

// console.log(memoizeAddition(5));
// console.log(memoizeAddition(5));

//.................................................................................
// const multiplyBy3 = (num) => num * 3;
// const makePositive = (num) => Math.abs(num);

// const compose = (fn1, fn2) => {
//   return function compose(num) {
//     return fn1(fn2(num));
//   };
// };

// const mulBy3AndPositive = compose(multiplyBy3, makePositive);

// console.log(mulBy3AndPositive(-3));

//.................................................................................
// split ( a string method )
// splice ( an array method )
// slice ( a string and an array method )

// let array = [1, 2, 3, 4, 5, 6, 7];
// let string = 'Haseeb has great javascript knowledge';

// // let result = array.splice(0, 2);
// // let result = string.split(' ', 3);

// // let result = string.slice(0, 13);
// // let result = array.slice(3, 5);

// console.log(result);
//...........................................................

// let array = [2, 1, 3];

// const verGraph = (arr) => {
//   for (num of arr) {
//     for (let i = 1; i <= num; i++) {
//       document.write(' | ');
//     }

//     document.write('</br>');
//   }
// };

// verGraph(array);

//.........................................................

// function testString(s) {
//   for (var i = 0; i < s.length; i++) {
//     console.log(s[i]);

//     if (s[i] !== '') {
//       console.log('here it comes');
//       console.log('Invalid');
//       return;
//     }
//   }

//   console.log('Valid');
// }

// const res = testString(' ');

// console.log(res);

//................................................................
// Testing if two strings have equal numbers of same characters.

// let str1 = 'cat';
// let str2 = 'act';

// function canRearrangeBoth(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   let frequency1 = {};

//   for (let char of str1) {
//     frequency1[char] = (frequency1[char] || 0) + 1;
//   }

//   for (let char of str2) {
//     if (!char in frequency1) return false;
//     else frequency1[char] -= 1;
//   }

//   return true;
// }

// console.time('Frequency approach');
// console.log(canRearrangeBoth(str1, str2));
// console.timeEnd('Frequency approach');

// function canRearrangeBoth2(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   for (let i = 0; i < str1.length; i++) {
//     let found = false;
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] === str2[j]) {
//         found = true;
//         str2 = str2.slice(0, j) + str2.slice(j + 1);
//         break;
//       }
//     }

//     if (!found) return false;
//   }
//   return true;
// }

// console.time('Nested loop approach');
// console.log(canRearrangeBoth2(str1, str2));
// console.timeEnd('Nested loop approach');

//................................................................

// let arr = [-7, -6, -3, 4, 5, 6];

// function sumZero(array) {
//   for (let num1 of array) {
//     for (let num2 of array) {
//       if (num1 + num2 === 0) {
//         return [num1, num2];
//       }
//     }
//   }
// }

// console.log(sumZero(arr));

// function sumZero(array) {
//   let first = 0;
//   let last = array.length - 1;
//   while (first < last) {
//     let sum;
//     if ((sum = array[first] + array[last]) === 0) {
//       return [array[first], array[last]];
//     }
//     if (sum > 0) {
//       last--;
//     } else {
//       first++;
//     }
//   }
// }

// console.log(sumZero(arr));

// function sumZero(array) {
//   let processed = new Set();
//   for (let num1 of array) {
//     if (processed.has(-num1)) {
//       return [-num1, num1];
//     }
//     processed.add(num1);
//   }
// }

// console.log(sumZero(arr));

//................................................................

let arr = [4, 5, 6, 7, 8, 9, 10];

function divideAndConquer(arr, number) {
  for (let num of arr) {
    if (num === number) {
      return num;
    }
  }
  return 'number not found';
}

console.log(divideAndConquer(arr, 3));

// second method of doing

/**
 * The binarySearch function takes an array and a number as arguments.
 * It uses a binary search algorithm to search for the number in the array.
 * If the number is found, it returns true.
 * If the number is not found, it returns false.
 */
function binarySearch(arr, number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === number) {
      return true;
    }

    if (arr[mid] < number) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}

console.log(binarySearch(arr, 7));
