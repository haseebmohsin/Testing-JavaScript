// let array = [2, 3, 5, 6, 3, 7, 8, 3, 9, 11];

// const fun = (arr) => {
//   let prime = arr[0];

//   for (num of arr) {
//     var numApp = num;
//     var count = 0;

//     if (num === numApp) {
//       count++;
//     }

//     for (let i = 2; i < num; i++) {
//       // console.log(i);
//       if (num % i != 0) {
//         console.log(num);
//         prime = num;
//       }
//     }
//     // console.log(prime);
//   }

//   if (count > 0) {
//     return numApp;
//   } else {
//     return prime;
//   }
// };

// const res = fun(array);

// console.log(res);

//................................................................

// let i,
//   j,
//   n = 5;

// increasing triangle......................................................
// document.write('Increasing triangle');
// document.write('<br/><br/>');

// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     document.write('*');
//   }
//   document.write('<br/>');
// }

// document.write('<br/><br/>');

// decreasing triangle.......................................................
// document.write('Decreasing triangle');
// document.write('<br/><br/>');

// for (i = 1; i <= n; i++) {
//   for (j = i; j <= n; j++) {
//     document.write('*');
//   }
//   document.write('<br/>');
// }

// document.write('<br/><br/>');
// testing different patterns..................................................
// hollow diamond program.
// for (i = 1; i <= n - 1; i++) {
//   for (j = i; j <= n; j++) {
//     if (j === n - 1) {
//       document.write('*');
//     } else {
//       document.write('&nbsp;&nbsp;');
//     }
//   }

//   for (j = 1; j <= i - 1; j++) {
//     document.write('&nbsp;&nbsp;');
//   }

//   for (j = 1; j <= i - 1; j++) {
//     document.write('&nbsp;&nbsp;');
//   }

//   for (j = i; j <= n; j++) {
//     if (j === i) {
//       document.write('*');
//     } else {
//       document.write('&nbsp;&nbsp;');
//     }
//   }

//   document.write('<br/>');
// }

// for (i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     if (j === i) {
//       document.write('*');
//     } else {
//       document.write('&nbsp;&nbsp;');
//     }
//   }

//   for (j = i; j <= n - 1; j++) {
//     document.write('&nbsp;&nbsp;');
//   }
//   for (j = i; j <= n - 1; j++) {
//     document.write('&nbsp;&nbsp;');
//   }

//   for (j = 1; j <= i; j++) {
//     if (j === 1) {
//       document.write('*');
//     } else {
//       document.write('&nbsp;&nbsp;');
//     }
//   }

//   document.write('<br/>');
// }

// end of hallow diamond program.
//.......................................................................
