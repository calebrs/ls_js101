/*
**problem**
input: array of numbers
output: sum of the sum of leading subsequence arrays. one number
explicit: sum the sum of leading subsrings
implicit: can handle one number

**Examples**
see test cases

**data structures**
input => array
output => number
subsequent arrays => arrays
reduce for each sub
sum what each array was reduced to

**algorithm**
create empty total
create all subsequent arrays
  iterate through the array
  get subarray/slice at index
  reduce that array 
  add reduce to total

*/
function sumOfSums(numArray) {
  let total = 0;
  
  numArray.forEach((num, index) => {
    let sub = numArray.slice(0, index + 1)
    let currentTotal = sub.reduce((accum, elem) => accum + elem);
    total += currentTotal;
  })
  
  return total;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));