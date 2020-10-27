/*
input: two arrays of numbers of any length
output: one array that combines the two arrays but removes the duplicate values
concat the two arrays
sort the two arrays
loop through the arrays and if the current index does not match the previous index push to a new array.
return new array




*/

function union(arr1, arr2) {
  let newArray = [];
  let arrayConcat = arr1.concat(arr2);
  let arraySort = arrayConcat.sort();
  
  for (let i = 0; i < arraySort.length; i += 1) {
    if (arraySort[i] !== arraySort[i - 1]) {
      newArray.push(arraySort[i]);
    }
  }
  
  return newArray;
}


//test cases
console.log(union([1,3,5], [3,6,9])); //[1, 3, 6, 9, 5]
console.log(union([12, 34, 5, 7], [3, 6, 9, 34])); // [12, 5, 7, 3, 6, 9, 34]
console.log(union([1, 3, 5, 9, 10], [3, 6, 9, 1])); // [5, 10, 6, 1, 3, 9]