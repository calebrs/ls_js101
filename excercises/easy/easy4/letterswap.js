/*
ProblemL
input: string of words repeated by spaces
output: a string that swaps the caps words with lower caps words

Examples:
see code

Data:


Algorithm:
split the string into an array
create new array

iterate through each character
  on each character, if it is not equal to itself but cappsed
    then capps the character and add it to the new array

return the new array

*/
function swap(string) {
  let words = string.split(' ');
  
 
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"