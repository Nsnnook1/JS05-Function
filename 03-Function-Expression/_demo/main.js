console.log("annonymous");

// 1# Name Fn, Fn Declaration
// function add(){}

// 2# : Anonymous

// 2a# IIFE : Intermediate Invoke Function Expression

// (function (x,y) {
//   console.log(x+y);
// })(10,5);

// console.log(
//   (function (x, y) {
//     return x + y;
//   })(10, 5)
// );

// let a = (function (x, y) {
//   return x + y;
// })(10, 7);
// console.log(a);

//2b#

//VARIABLE = Expression
// let myVar = ((5 * 2 * 20) / 2) % 7;

// //Variable = Fn (Fn == Expression)
// const myFunc = function (x, y) {
//   return x + y;
// };
// console.log(myFunc(5, 10));

// const a = console.log;
// a("hi");

// ### Anonym
let z = function (x) {
  return x ** 2;
};

let a = function (x) {
  return x ** 2;
};

//A:Shortest
let b = (x) => x ** 2; //arrow function
// console.log(a(3));
// console.log(b(3));

//B:Bracket
let c = (x, y) => {
  let result = x + y;
  return result;
};

console.log(z(5));

console.log(a(3));
console.log(b(3, 5));
console.log(c(3, 5));