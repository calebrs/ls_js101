/*
Problem:
input: an array of strings 
output: the longest common prefix amongst the input strings
rules:
if there is no common prefix return empty string
all letters are lowercase and a - z

Exmaples: 
['flower', 'flow', flight] ==> "fl"


Data Strucutreus:
iteration mechanism to grab prefixes
conditional to check all strings in the array


algorithm:
create result string
get the first element of the array
create slice of the rest of the array
iterate through the first string
  on each iteration (iterate backwards through the string): create a prefix starting from the beginning at 0 and ending at index + 1
  iterate through the rest of the array: IF EVERY string starts with the current prefix return the current prefix

at the end of all iterations return empty string




*/
function longestCommonPrefix(arr) {
  let result = '';
  let firstString = arr[0];
  let arrSlice = arr.slice(1);

  for (let indx = firstString.length - 1; indx >= 0; indx -= 1) {
    result = firstString.slice(0, indx + 1);
    if (arrSlice.every(word => word.startsWith(result))) {   
      return result;
    }
  }
  
  return '';
}


console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); //"fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); //""
console.log(longestCommonPrefix(['interspecies', 'interstellar', 'interstate'])); //"fl"
console.log(longestCommonPrefix(['throne', 'dungeon'])); //""
console.log(longestCommonPrefix(['throne', 'throne'])); //""