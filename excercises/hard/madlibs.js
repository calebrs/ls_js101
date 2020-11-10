/*
Problem:
input: a string template that has identifiers for verbs, adverbs, adjectives, and nouns
output: the template filled out randomly with words - string
rules:
Use words from a pool of predefined values


Examples: SEE CODE Below



Data Structures
pools of random words: verbs, adverbs, nouns, adjectives
template structured in a way that I can parse/identify where the keywords are.
Way to iterate through the template
output is string
randomly choose a word for each template

Algorithm:
  


*/

let template1 = "The [noun] [verb] the [noun]'s [noun]."
let template2 = "The [adjective] brown [noun] [adverb] [verb] the [adjective] yellow [noun], who [adverb] [verb] his [noun] and looks around."

const NOUNS = ['cat', 'dog', 'horse', 'pig'];
const ADJECTIVES = ['blue', 'happy', 'juicy', 'gross'];
const VERBS = ['flys', 'tickles', 'eats', 'grabs'];
const ADVERBS = ['quickly', 'slowly', 'quietly', 'bashfully'];


function madlibs(template) {
  
  
}

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".