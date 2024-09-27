// const functions = (score) => {
//   if (score >= 3) {
//     return (result = "win");
//   } else if (score === 1) {
//     return (result = "draw");
//   } else return (result = "lost");
// };

// console.log(functions(3));
// console.log(functions(1));
// console.log(functions(0));



//หา Totle
const calMatchPoint = (win, draw) => win * 3 + draw;
console.log(calMatchPoint(28,5));
