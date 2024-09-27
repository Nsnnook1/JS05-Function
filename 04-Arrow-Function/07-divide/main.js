const checkNumber = (n) => {
  let divide = n % 7 === 0;
  return divide;
};

console.log(checkNumber(7))
console.log(checkNumber(3))
