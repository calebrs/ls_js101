function rotateArray(array) {
  for (let i = 0; i < array.length; i += 1) {
    array.splice(i, 0, array.pop());
  }
  return array;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log(rotateArray(['a', 'b', 'c']));
console.log(rotateArray(['a']));
console.log(rotateArray([1, 'a', 3, 'c']));
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));
console.log(rotateArray([]));