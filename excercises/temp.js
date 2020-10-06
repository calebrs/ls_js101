/*
**Problem**
input: array of integers between 0 and 19
output: array of integers sorted by their english word for those numbers
explicit requirements: sorts the numbers according to english word fro that number
implicit requirments: digits can be aranged in any way in the array

**Examples**
input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

**Data structures**
input array
an array of words that corresponds to the english words of the array
return array

**Algorithm**
have a list of words from zero to nineteen
create new array
convert the integers to english words
    - push to the new array the word that corresponds with the integer
    - repeat 1 until you've looped done all the values in the array
    - return the new array
sort the new array alphabetically using a method
convert the english words back to digits
    - create new array
    - find the index of the current word in the constant array.
    - push that value to a new array
    - return the new array as the result


*/

const WORDS = [ 'zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
               'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(array) {
  let sortedWordArray = convertNumbersToWords(array).sort();
  
  return convertWordsToNumbers(sortedWordArray);
}

function convertNumbersToWords(array) {
  let newArray = [];
  
  for (let i = 0; i < array.length; i += 1) {
    let wordToPush = WORDS[array[i]];
    newArray.push(wordToPush);
  }
  
  return newArray;
}

function convertWordsToNumbers(arrayOfWords) {
  let digitArray = [];
  
  for (let i = 0; i < arrayOfWords.length; i += 1) {
    let numberToPush = WORDS.indexOf(arrayOfWords[i]);
    digitArray.push(numberToPush);
  }
  
  return digitArray;
}



console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
console.log(alphabeticNumberSort([0, 3, 6, 1, 19, 5, 2, 7, 8, 9, 15, 12, 11, 13, 14, 10, 16, 17, 18, 4]));
//output: [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

//console.log(convertNumbersToWords([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));