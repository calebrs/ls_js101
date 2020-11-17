/*
Problem:
input: a positive integer
output: the next highest number using the same digits as the input number

Examples: SEE CODE


Data Structures:
Number as input
convert number to string
iteration mechanism
conditional to check whether or not the new number is bigger than the input

if the current n
Algorithm:
declare int as an array
declare count set to integer

start iterating upwards from the integer
  at each iteration. if the intarray includes every digit in the current number 
    return that number
  increment count
  
  


*/

function nextBiggerNum(integer) {
  let intAsArray = String(integer).split('');
  let count = integer + 1;

  while (true) {
    let countAsArray = String(count).split('');
    if (countAsArray.every(elem => intAsArray.includes(elem) && !hasDuplicates(countAsArray))) {
      return count;
    } else if (countAsArray.length > intAsArray.length) {
      return -1;
    }
    count += 1;
  }
}

function hasDuplicates(array) {
  for (let indx = 0; indx < array.length; indx += 1) {
    let slicedArray = array.slice(indx + 1);
    if (slicedArray.includes(array[indx])) {
      return true; 
    }
  }
  return false;
}



console.log(nextBiggerNum(9) === -1);
console.log(nextBiggerNum(12) === 21);
console.log(nextBiggerNum(513) === 531);
console.log(nextBiggerNum(2017) === 2071);
console.log(nextBiggerNum(111) === -1);
console.log(nextBiggerNum(531) === -1);
console.log(nextBiggerNum(123456789) === 123456798);
console.log(nextBiggerNum(1432) === 2134);