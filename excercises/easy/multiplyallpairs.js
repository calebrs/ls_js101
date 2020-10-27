/*
**Problem**
Input: two arrays of digits of any length
output: an array of digits in ascending order, of the prodeuct of each integer of the two arrays
multiply each number in array 1 by each number in array two. results go into an array.
explicit: two arrays, each element in each array is multiplied by each element in the other array. result must be sroted
implicit: return a new array.

**Test Cases**
See test cases at the bottom of the code---

**Data Structures**
Two arrays
  sort
  loop?
  
loops
multiplcation operators

**Algorithm**
create empty list for result
get element of the first array - loop
multiply that element by each number in the second array
  input: element from arr1 and arr2
  output: new elements in the newArray
  times element of arr1 by each element in arr2
  push product to newArray
repeat steps two and three
return newArray


*/

function multiplyAllPairs(arr1, arr2) {
  let productArray = [];
  
  arr1.forEach(num1 =>
    arr2.forEach(num2 =>
      productArray.push(num1 * num2)));
  
  return productArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])) // [2, 4, 4, 6, 8, 8, 12, 16])
console.log(multiplyAllPairs([4, 3, 1, 2], [2, 4])) // [2, 4, 4, 6, 8, 8, 12, 16])