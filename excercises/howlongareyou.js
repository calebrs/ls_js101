/*
problem:
input: string
output: an array of each word a space then the words length

Examples: see code

Data:
strings as input
array as output

Algorithm:
split the string by spaces
transform the array/iterate through the array
return the word with a space then the length

return the array


*/
function wordLengths(string) {
  if (string === undefined || string.length === 0) {
    return [];
  }

  
  return string.split(' ')
               .map(word => `${word} ${word.length}`);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []