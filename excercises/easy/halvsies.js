/*
input: one array with an even or add number of elements
output: an array with two array elements. the first element contains the first half and the second contains the second half.
unless it's odd, then the first element contains the middle element.
Data structures:
arrays for input, an array of two arrays for output
array length
half of the array length ceiling (to inlcude middle value)
newarray = [[], []]
loop through input array
if index is less than or euqal to half the push to the first array else push to the second

5
3


*/

function halvsies(array) {
  let newArray = [[], []];
  let arrayHalfLength = Math.ceil(array.length / 2) - 1;
  
  for (let i = 0; i < array.length; i += 1) {
    if (i <= arrayHalfLength) {
      newArray[0].push(array[i]);
    } else {
      newArray[1].push(array[i]);
    }
  }
  
  return newArray;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]