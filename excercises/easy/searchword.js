/*
problem:
input: a word and a string of text
output: a numer that represents how many time the word appears in the string of text



Examples:
See code

Data:
two string inputs
arrays to manage the sentance/words

Algorithm:
split the sentace into an array
iterate through the array and SELECT all the words that match the input word
return the length of the filtered array

*/
function searchWord(word, string) {
  return string.split(' ')
               .map(elem => {
                 if (elem.toUpperCase() === word.toUpperCase()) {
                   return `**${elem.toUpperCase()}**`
                 }
                 return elem;
               })
               .join(' ');
}



const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

console.log(searchWord('sed', text));     // 4
console.log(searchWord('est', text));     // 0
console.log(searchWord('est,', text));    // 2