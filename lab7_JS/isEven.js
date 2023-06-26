"use strict";

console.log(isEven("32"));
console.log(isEven(32));
console.log(isEven(11));

function isEven(num) {
  return Number.isFinite(num) && num % 2 == 0;
}
