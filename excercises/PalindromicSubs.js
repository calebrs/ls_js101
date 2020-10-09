/*
input: string
output: array of all the palindromes in the string



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
  return allSubs;
}

function palindromes(string) {
  let palindromeArray = [];
  let subStrings = allSubstrings(string);
  
  for (let i = 0; i < subStrings.length; i += 1) {
    let reverseString = subStrings[i].split('').reverse().join('');
    if (reverseString === subStrings[i] && subStrings[i].length !== 1) {
      palindromeArray.push(subStrings[i]);
    }
  }
  
  
  return palindromeArray;
}

console.log(palindromes('knitting cassettes'));