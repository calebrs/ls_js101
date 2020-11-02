/*
let nums = [1, 2, 3];
let reversedNums = nums.slice().reverse();

reversedNums; // => [3, 2, 1]
nums;         // => [1, 2, 3]

On line we declare a new variable 'nums' and assign it to an array which contains three numbers that are elements.
on line two we call the built-in array funtion 'slice' on the nums array with no arguments, which returns a shallow copy of the 'nums' array.
On the return value of the slice fucntion, we invoke the reverse function with no argumnents, which returns the array it was called on but in reverse order.
Line four calls the reversed?Nums variable, who's return value is an array which contains [3,2,1]
while on line 5 the nums variable is called and returns the original array that was declared on line 1 which is [1,2,3]. This demonstrates how the array.prototype.slice() functiuon can be used 
to create a copy of an array. Changes made to the copy do not effect the original array.

function union(arr1, arr2) {
  let newArray = [];
  let arrayConcat = arr1.concat(arr2);
  let arraySort = arrayConcat.sort();
  
  for (let i = 0; i < arraySort.length; i += 1) {
    if (arraySort[i] !== arraySort[i - 1]) {
      newArray.push(arraySort[i]);
    }
  }
  
  return newArray;
}

On line 15 we declare a new function called union that has two parameters, arr1, and arr2. 
on line 16 we create a new variable called 'newArray' and assign it to an empty array. 
line 17 the code calls the concat function on the variable arr1 with the argument arr2 and sets the return value of that function call to another variable called arrayConcat.
line 18 creates a new variable arraySort and assigns it to the value of arrayConcat sorted in ascending order.

line 20 starts a for loop that will loop as many times as the length of the arraySort array. Each iteration the code on lines 21 and 23 will execute. 
if the current index value on arraySort does not equal the previous value of arraySort then the current value will be pushed to the newArray variable.
After all iterations, newArray is returned to the function invocation. So in effect, this code takes two arrays, combines them, sorts them in ascending order and them removes any values that are duplicated.

What is the return value and why?

[1, 2, 3].filter(num => 'hi');

The return value of this statment is '[1,2,3]'. This is becuase when the filter function is called on the array [1,2,3] it executes the callback fuction which checks whether or not the code after the arraw (=>) evaluates to true or false.
because 'hi' is truthy, the callback function will always evaluate to true meaning that each element in the array will go into the reutrn array of the filter function invokation.
let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);

On line 38, the global variable greeting is assigned the string value 'Hello'.
Line 40 starts a while loop that executes lines 41 and 42 until an ending condition is met. As such, line 41 reassigns the variable greeting to the String value 'Hi'
while line 42 ends the while loop that was started on line 40. Finally, line 45 calls the console.log function with the variable greeting's value as an argument, which
will log to the console 'Hi'. This code demonstrates that when a global variable is declared it can be accessed within any block (it has global scope) in the program/document. Thus when the greeting
was reassigned within the while loop, the global variable changed to 'Hi'.

function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return doubledNums;
}

How does this code demonstrate the principle of transformation?
On line 53 a new function called doubleNumbers is declared with the parameter number. 
When the function is invoked lines 54 through 64 will execute. Line 54 and 55 declare new variables that will be used in the function 
doubleNums is assigned to an empty array and counter is set to the number 0. A while loop begins on line 57 the runs the code on lines 58 and 61 over and over while
the variable counmter is less than the length of the numbers variable/parameter, becasue the counter is incremented by one on line 61, the loop will run the same number of times as the length of the array.
a new variable called currentNum is declared on line 58 and set equal to the current element of the numbers array (counter represents the index of the current element).
next, line 59 calls the built-in push function to add currentNum times two to the doubledNums. As previously mentioned, line 61 increments the counter variable by one allowing the 
the loop to run over all the elements in the array. lastly on line 64 the value of the the variable doubledNums is returned to whereever this funtion is invoked. So, in effect this function
doubles each number of the input array, places it in a new array, then returns that array. This demonstrates transformation becuase each element of the input array is altered. The input
array will have the same length as the output array.

What will the code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

the code on line 80 declares a new variable arr1 and sets it equal to an array with 5 elements, two of which are objects and three of which are numbers
the next line of code creates a shallow copy of arr1 using the slice method and sets it equal to the new variable arr2.
line 82 then reassigns the 'first' property of the first element in arr2 to the number 42.
line 83 will then log the array [{ first: 42 }, { second: "value2" }, 3, 4, 5] to the console. 
Because arr2 is only a shallow copy, nested objects still are pointers, meaning that the object in arr1 is the same object as the one in arr2. The reassignment will chnage the value 
in both arrays.

what does the following code output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

Line 96 will log false to the console. nanArray[0]'s value is NaN. The expression evaluates to false becuase NaN is not equal to NaN.

what happens if we modify a after placing it in arr?

let a = [1, 3];
let b = [2];
let arr = [a, b];

arr;

a[1] = 5;
arr;

106 returns the value of the variable arr, which is an array: [[1, 3], 2]
on line 108, the value at index 1 in array 'a' is reassigned the value 5.
the reuslt of the second arr call will be [[1, 5], 2]. even though the arr is a new variable, the array that is inside of arr still acts as a reference/pointer.
meaning that arr[0] is equal to and points to the same array as the variable 'a'.

What is the result of the following call?

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps("Paper", "rock"));

The two most inner calls resolve to "paper" and "Rock" which means the next invokatoin of rps resolves to
"Paper". Lastly the final rps invocation resolves to "Paper". The inner most invocations will get evaluated first so that that the outer invocations can have a
meaningful value it can use. 

What is the return value of map in the following code? why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

the map method gets called on the array with a callback that returns the current element in the array if the length of the string element is longer than 3 characters.
The first iteration of the callback will return undefined because no else condition is specified in the callback, and the second iteration will return 'bear'. .map
creates a new array with the return values of its callback resulting in the array: [Undefinded, 'bear']


What is the callback's return value in the following code? Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

the method every returns either true or false, based on the return values of its callback function. If all the return values of the callback are true the call will be true.
If any of the values evaluate to valse, every will be false.
In this case the callback iterates through the array 
and for each iteration reassigns 'num' to num * 2. because 'every' is looking for boolean values, and each iteration returns a truthy value (which evaluates to true),
'every' will evaluate to true.

*/
