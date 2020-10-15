/*
**Problem**
input: A string sentance that contains words that represent numbers
output: the same sentance in string format, but the number words are numbers.
rules: output has o be string, all words that represent numbers should be changed to digits

**Examples**
fringe cases: when a word has a period/point by it.
see case below

**Data Structures**
input string
output string
arrays
array iteration
conditionals 
const for words

**Algorithm**
declare a lookup table object of the digits/words
iterate through the lookup table's key values
if the input string contains the current values
replace it with the current keys value in the lookup table
return the replaced vaule


*/

function wordToDigit(string) {
  
  const LOOKUP_TABLE = {
    zero: 0,
    one: 1,
    two: 2, 
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  } 
  
  Object.keys(LOOKUP_TABLE).forEach(key => {
    if (string.includes(key)) {
      string = string.split(key).join(LOOKUP_TABLE[key])
    }
  })
  
  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));