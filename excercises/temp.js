/*
input - sentance or word that's a string, words are seperated by spaces.
words have at least one letter and the whole string will have at least one word
output - sentance or a word that's a string, words are seperated by spaces
sentance goes in and then a sentance where the first and last letters of each word
are swapped.
input is string, arrays
output is string
read in the string as an array
take each word and swap the first and last letter
    break string into array
    set first letter string
    set last letter string
    reassign first index
    reassign last index
    join the array back
join the array by ' '


*/
function swap(sentance) {
  let sentanceArray = sentance.split(' ');
  let swappedSentanceArray = sentanceArray.map(word => swapFirstAndLastLetter(word));
  return swappedSentanceArray.join(' ');
}

function swapFirstAndLastLetter(word) {
  
  if (word.length === 1) return word;
  
  let wordArray = word.split('');
  let firstLetter = wordArray[0];
  let lastLetter = wordArray[wordArray.length - 1];
  
  wordArray[0] = lastLetter;
  wordArray[wordArray.length - 1] = firstLetter;
  
  return wordArray.join('');
}



console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));