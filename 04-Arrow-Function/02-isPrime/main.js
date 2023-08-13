const checkPrime = (n) => {
  let isPrime = true;
  for (let d = 2; d < n; d++) {
    if (n % d == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(n);
};

console.log(checkPrime(1));
console.log(checkPrime(3));
console.log(checkPrime(5));
