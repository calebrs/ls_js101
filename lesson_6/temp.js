function joinOr(array, divider = ', ', statement = 'or') {
  switch (array.length) {
    case 1: 
      return array
    case 2:
      return `${array[0]} ${statement} ${array[1]}`
    default:
      return `${array.slice(0, array.length - 1).join(divider)}${divider}${statement} ${array[array.length - 1]}`
      // code
  }
}

console.log(joinOr([1, 2]));
console.log(joinOr([1, 2, 3]));
console.log(joinOr([1, 2, 3], '; '));
console.log(joinOr([1, 2, 3], ', ', 'and'));