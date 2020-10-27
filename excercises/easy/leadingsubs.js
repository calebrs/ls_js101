/*
**Understand**
Input: string
Output: return an array where each element contains substrings of the input string starting at the first index
exmplicit: take a string and turn it into an array of substrings that start from the beginnin of the string. The must be ordered from shortest to longest

**Examples**
single letter stirng?
see test cases below

**Data Structures**
input string
string for each substring increasing in length by 1 (slice?/substring mechanism)
output array
looping through the string
.push mechanism

**algorithm**
create empty result array
iterate through the input string
at each position get a substring that starts from the beginning of the string then ends at the next position.
push that substring to the result array
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


function substring(string) {
  let stringArray = string.split('');
  return stringArray.map((letter, index) => stringArray.slice(0, index + 1).join(''))
  
}

console.log(substring('abc'));  // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));  // ["a"]
console.log(leadingSubstrings('xyzzy'));  // ["x", "xy", "xyz", "xyzz", "xyzzy"]