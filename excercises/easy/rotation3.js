/*
input: an integer
output: get the maximum rotation from the integer
rules:
rotate the number
rotate the digits after the first digit
rotate the digits after the second digit
until you've rotated the last two digits (length - 1

test cases
see bottom

data structures
number in
number out
use the previous funcitons


algorithm
iterate through the numbers digits
rotate the number at index 0 first incrementing up...
return the number

*/

function rotateRightmostDigits(number, count) {
  let numberArray = String(number).split('');
  let rightPortion = rotateArray(numberArray.slice(numberArray.length - count));
  let leftPortion = numberArray.slice(0, numberArray.length - count);

  return Number(leftPortion.concat(rightPortion).join(''));
}

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (!array.length) return [];
  
  return array.slice(1).concat(array[0]);
}

function maxRotation(number) {
  let newNumber = number;
  for (let index = String(number).length; index >= 0; index -= 1) {
    newNumber = rotateRightmostDigits(newNumber, index);
  }
  
  return newNumber;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845)