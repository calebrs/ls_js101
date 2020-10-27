/*
**problem**
input: an array
output: the same as the input array but the first element is the at the end
explicit: take an array and move the first element to the end of the array. if the input is not an array return undefined. retursn an empty array if the input is an empty array. Do not modify the original array.
implicit:

**examples**
see code

**data structures**
input: array
output: new array that does not reference the original
slice/unshift mechanisms
conditionals for empty and non arrays

**algorithm**
get the first element of the array
attach the first element to the end of a copied array

*/
function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (!array.length) return [];
  
  return array.slice(1).concat(array[0]);
}



console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]