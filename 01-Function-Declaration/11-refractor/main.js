// function checkAge(age) {
//   age > 18 ? true
// return confirm("Did parents allow you?");
// }

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm("Did parents allow you?");
//     }
//   }

//   checkAge(20)

// ใช้ if แต่ห้ามใช้ else
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   return confirm("Did parents allow you?");
// }
// checkAge(20);

//  ใช้ ? แทน if
// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }
// checkAge(20);

// ใช้ || แทน if
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}
checkAge(20);
console.log(checkAge(15));
console.log(checkAge(20));
