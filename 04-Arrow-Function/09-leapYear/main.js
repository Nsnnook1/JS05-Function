//หาร 4 ลงตัว เป็น leap year
// eq
// 1800 => false
// 2000 => false

// มาทุกๆ4 ปี แต่เมื่อครบ 100 ปี อีกสามปีหลังจากนั้นจะไม่มีวัน leap year และ leap year จะกลับมาอีกครั้งในปีที่ 4 (400)
//หาร 100 ลงตัวไม่เป็น leap year
//หาร 400 ลงตัวเป็น leap year

const isLeapYear = (year) => {
//   if (year % 400 == 0) {
//     return true;
//   } else if (year % 100 == 0) {
//     return false;
//   } else if (year % 4 == 0) {
//     return true;
//   } else return false;

  if (year % 100 === 0) {
    return year % 400 == 0;
  }
  return year % 4 === 0;
};

console.log(isLeapYear(400)); //true
console.log(isLeapYear(100)); //false
console.log(isLeapYear(2020)); //true

//วิธีที่สอง
const isLeapYear2 = (year) => {
    return year % 100 === 0 ? year % 400 == 0 : year % 4 === 0;
}

console.log(isLeapYear2(300)); //false
console.log(isLeapYear2(2023)); //false
console.log(isLeapYear2(2000)); //true