"use strict";

console.log(fivePrimesSum());

function fivePrimesSum() {
  let num = 1;
  let primes = [];

  while (primes.length < 5) {

    if (isPrime(num)) {
      primes.push(num);
    }

    num++;
  }

  return primes.reduce((sum, num) => sum += num, 0);
}

function isPrime(num) {
  for (let divider = 2; divider <= Math.sqrt(num); divider++) {
    if (num % divider == 0) {
      return false;
    }
  }

  return num >= 2;
}