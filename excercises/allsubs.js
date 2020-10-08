/*
**Understandt the problem**
Input: string
Output: an array with all the possible substrings of the input ordered from the first index to the last
explicit: all substrings are returned in the order specified
implicit: account for all characters, output elements are strings

**examples**
see examples below

**data structures**
loops
leading substring function
arrays and strings
input is string
output is array
leading substrings will be an array

**algorithm**
create empty result array
iterate through input string
at the first index of the input string use the leading substrings function to get all the substrings in that string
concat the result to the empty string
at the next index run it on the next protion of the string
return the result array
*/

function leadingSubstrings(string) {
  let resultArray = [];
  
  for (let i = 1; i <= string.length; i += 1) {
    let substring = string.slice(0, i);
    resultArray.push(substring);
  }
  
  return resultArray;
}

function allSubstrings(string) {
  let allSubs = [];
  
  for (let i = 0; i < string.length; i += 1) {
    let leadingSub = leadingSubstrings(string.slice(i));
    allSubs.push(...leadingSub);
  }
  console.log(allSubs);
}

console.log(allSubstrings('abcde'));