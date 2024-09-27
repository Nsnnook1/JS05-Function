// let isPrime = true;

// for (let divider = 2; divider < n; divider++) {
//   if (n % divider == 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) console.log(n);

function checkPrime(num) {
  let isPrime = true;
  for (let d = 2; d < num; d++) {
    if (num % d == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(num);
}

checkPrime();

let n = 7;

function printPrime(limit) {
  for (let n = 2; n <= limit; n++) {
    checkPrime(n);
  }
}
// printPrime(7);
printPrime(13);

