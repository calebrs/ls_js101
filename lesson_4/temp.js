let statement = "The Flintstones Rock";

let newObj = {};
let statementArray = statement.split('');

statementArray.filter(letter => letter !== ' ').forEach((letter) => {
  if (!newObj.hasOwnProperty(letter)) {
    newObj[letter] = 1;
  } else {
    newObj[letter] += 1;
  }
})

console.log(newObj);