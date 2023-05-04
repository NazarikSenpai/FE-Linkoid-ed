"use strict";

console.log(oneSum(5));

function oneSum(num) {  
  let ones = [];
  for (let index = 1; index <= num; index++) {
    ones.push(+"1".repeat(index));
  }
 
  return ones.reduce((sum, num) => sum += num, 0);
}