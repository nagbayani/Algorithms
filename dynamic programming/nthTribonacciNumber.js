/*
Given a number n, calculate the corresponding Tribonacci number. The Tribonacci sequence Tn is defined as:

T0 = 0
T1 = 1
T2 = 1
Tn+3 = Tn + Tn+1 + Tn+2

for n > 0

Example: n=7 -> find the 7th index whose value is X 
  [T0, T1, T2, T3, T4, T5, T6, T7]
= [ 0,  1, 1,  2,  4,  7,  13,  x]
n=7, T7=== x=24, output should be 24

*/

//RECURSIVE
function nthTribonacciNumber(n) {
  if (n < 3) return n == 0 ? 0 : 1;
  return (
    nthTribonacciNumber(n - 1) +
    nthTribonacciNumber(n - 2) +
    nthTribonacciNumber(n - 3)
  );
}


function dynamicTribonacci(n) {
  if (n < 3) return n == 0 ? 0 : 1;
  let firstNum = 0;
  let secondNum = 1;
  let thirdNum = 1;

  for (let i = 0; i < n - 2; i++) {
    temp = firstNum + secondNum + thirdNum;
    firstNum = secondNum;
    secondNum = thirdNum;
    thirdNum = temp;
  }
  return thirdNum;
}
