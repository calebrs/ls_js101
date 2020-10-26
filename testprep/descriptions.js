/*
let nums = [1, 2, 3];
let reversedNums = nums.slice().reverse();

reversedNums; // => [3, 2, 1]
nums;         // => [1, 2, 3]

On line we declare a new variable 'nums' and assign it to an array which contains three numbers that are elements.
on line two we call the built-in array funtion 'slice' on the nums array with no arguments, which returns a shallow copy of the 'nums' array.
On the return value of the slice fucntion, we invoke the reverse function with no argumnents, which returns the array it was called on but in reverse order.
Line four calls the reversed?Nums variable, who's return value is an array which contains [3,2,1]
while on line 5 the nums variable is called and returns the original array that was declared on line 1 which is [1,2,3]. This demonstrates how the array.prototype.slice() functiuon can be used 
to create a copy of an array. Changes made to the copy do not effect the original array.

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

On line 15 we declare a new function called union that has two parameters, arr1, and arr2. 
on line 16 we create a new variable called 'newArray' and assign it to an empty array. 
line 17 the code calls the concat function on the variable arr1 with the argument arr2 and sets the return value of that function call to another variable called arrayConcat.
line 18 creates a new variable arraySort and assigns it to the value of arrayConcat sorted in ascending order.

line 20 starts a for loop that will loop as many times as the length of the arraySort array. Each iteration the code on lines 21 and 23 will execute. 
if the current index value on arraySort does not equal the previous value of arraySort then the current value will be pushed to the newArray variable.
After all iterations, newArray is returned to the function invocation. So in effect, this code takes two arrays, combines them, sorts them in ascending order and them removes any values that are duplicated.







*/