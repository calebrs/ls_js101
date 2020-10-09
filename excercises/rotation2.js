/*
**problem**
input:  a number/digit, and a count integer
output: the input number but the last count of digits is rotated. the first becomes the last number
rules: output must be a number,
rotate only the last 'count' of digits.
leave the first numbers as they are.
join the rotated digits with the first digits

**examples**
see code below
what happens if there's invalid input?
should a higher count that the number of digits be invalid input?

**Data Structures**
input: digit
input2: digit to string, sting to array
leave the same: string
convert all back to string then back to number
conditionals for error tracking?

**Algorithm**
convert number to an array
get protioan of the array that will be rotated
get the portion of the array that will stay the same
rotate left portion
join two sides back together
convert the entire array back to a number

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


console.log(rotateRightmostDigits(735291, 1)) //735291
console.log(rotateRightmostDigits(735291, 2)) //735219
console.log(rotateRightmostDigits(735291, 3)) //735912
console.log(rotateRightmostDigits(735291, 4)) //732915 
console.log(rotateRightmostDigits(735291, 5)) //752913 
console.log(rotateRightmostDigits(735291, 6)) //352917

//console.log(rotateRightmostDigits(735, 6)) //ERROR MESSAGE 
//console.log(rotateRightmostDigits(735291, -1)) //invalid input
//console.log(rotateRightmostDigits(735291, 6)) //352917 