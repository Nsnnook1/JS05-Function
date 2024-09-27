//การเขียน functions มี 2 แบบ
// 1. Function Declaration(Fd) or Name Function
// 2. Function Expression(Fn) / มักเขียนในรูป Anonymous Function

// การใช้งาน function
// - ประกาศ function : กำหนด ชื่อ/input
// - เรียกใช้

// 1. define
function sayHi(name, lastname) {
  console.log(`hello ${name} ${lastname}`);
}

//2. call
sayHi("john", "Deee");
sayHi("nook", "Srmtk");

// -----------------------------------------------------------------------------------//

//Return Value ผลลัพธ์ที่ได้จากการ run function(result) จนเสร็จ
// add(5,6) == return value, Fucntion result
function add(x, y) {
  let result = x + y;
  return result;
}
add(5, 6);
console.log(11 === add(5, 6));

let r = add(5, 6); //reusable result
console.log(r);
console.log(add(5, 6)); //one time use  (on the fly เรียกใช้ค่าตรงนี้เลย ไม่ส่งไปที่อื่น)

// ----------------------------------------------------------------------------------//

function ifEven(n) {
  //   if (n % 2 == 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  //   if (n % 2 == 0) {
  //     return true;
  //   }

  //   return false;

  return n % 2 == 0;
}

console.log(ifEven(5));
console.log(ifEven(6));

//checkPoint
// Declare : ประกาศเป็น
// Params : รับ Input
//call : รับ function
//return : เข้าใจเรื่อง return

//### FFN Expression

let a = 5 * 2 + 7;
//variable = expression

/* Expression
- single value : 7 
-conbine expression : 7+2
- Function result : add(7,2) */

let myFunc = add;
let z = console.log;
//variable = Function( Fn express)

// Fn expression คือ การ assign ค่า Fn ให้ variable

console.log(myFunc(5, 2));
z("Hello"); //z = console.log

//Anonymous Fn (หนูไม่มีชื่อค้าบบบ!)

//syntax : Fn express
//กำลัง assign Anony Fn ให้ตัวแปร sayHello
const sayHello = function (name) {
  console.log("hi " + name);
};

sayHello("Expression");

//1. function add() {}
//1.1 lat add = function(){}
//1.2 let add = () => {}

// const minus = (a, b) => {
//   return a - b;
// };
const minus = (a, b) => a - b;

// const minusTwo = (a) => a - 2;
const minusTwo = (a) => a - 2;

const two = 2;
console.log(two);

console.log(minusTwo(5));
