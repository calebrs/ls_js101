/*
input: a digit
output: an array with each of the digits as an element

examples:
SEE CODE

data structures:
numbers arrays

describe the following code and what it logs to the console when line 20 is invoked
line 15 declares a new function digitList that takes one argument 'integer'. 
line 16 returns an array that is created by 1) explicitly coercing the 'integer' variable
into a string. 2) spliting the string into an array, making each character its own element
and 3) callingn the map array method, which iterates through each element of the array
its called on, and explicitly coresces it into a number value ,then puts it into a new 
array.
Overall, this code will take an integer argument and return an array with element being a digit
of that integer.

*/
function digitList(integer) {
  return String(integer).split('').map(int => Number(int));
}



console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]