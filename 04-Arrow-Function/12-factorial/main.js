const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const number = prompt("Enter number");
const result = factorial(number);

console.log(`Factorial ของ ${number} คือ ${result}`);
