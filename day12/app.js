// JavaScript Medium Challenges

// 1.Falsy or Truthy

// Given 2 values,return the first one if it is falsy,otherwise return second one
//  using !!element we can check if the value is false

function falsyOrTruthy(n1, n2) {
  return !n1 ? n1 : n2;
}
console.log(falsyOrTruthy(0, 1));

//  2. Return length of given array

function arrayLength(arr) {
  return arr.length;
}

console.log(arrayLength([1, 2, 3]));

//  3. Get last element in an array

function arrayLastElement(arr) {
  return arr[arr.length - 1];
}

console.log(arrayLastElement([1, 2, 5]));

//  4. Find the sum of an array

function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arraySum([1, 2, 5]));

// 5. Add up the numbers from the single number

// Given a number , add up all the numbers from one to the number that is given .
// Eg. an input 4 will give 1+2+3+4 = 10

function progresiveSum(n1) {
  let sum = 0;

  for (let i = 1; i <= n1; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(progresiveSum(3));

// 6.Calculate the time

// Given a number in seconds , Return this number in mm:ss format.

function calcTime(seconds) {
  let timeMinutes = Math.floor(seconds / 60);
  let timeSeconds = seconds % 60;

  if (timeMinutes.toString().length === 1) {
    timeMinutes = "0" + timeMinutes;
  }
  return timeMinutes + ":" + timeSeconds;
}

console.log(calcTime(130));

// 7. Find the largest number

// Given an array of numbers ,return the largest number of that array

function largestNum(arr) {
  max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largestNum([12, 1, 55, 7]));

// 8. Reverse a string

// Given a String , Return the reversed string

function reverseString(str) {
  let reversedString = "";
  for (let i = 0; i < str.length; i++) {
    reversedString = str[i] + reversedString;
  }
  return reversedString;
}
console.log(reverseString("abc"));

// 9.Turn every element in array into 0

// Given an array of elements,return the same length array filled with 0

// 1. for loop

function convertToZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}
console.log(convertToZeros([0, 1, 2]));

// 2. fill

function convertToZeros(arr) {
  return new Array(arr.length).fill(0);
}
console.log(convertToZeros([0, 1, 2]));

// 3. map

function convertToZeros(arr) {
  return arr.map((elem) => 0);
}
console.log(convertToZeros([0, 1, 2]));

//  10. Filter out all the apples

// Given an array of fruits, if it is an apple removeit from an array.

//1. for loop
function removeApple(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "apple") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeApple(["apple", "Banana", "orange"]));

// 2. filter

function removeApple(arr) {
  return arr.filter((elem) => elem !== "apple");
}

console.log(removeApple(["apple", "Banana", "orange"]));

// 11. Filter out all the falsy values
// 1. for loop
function filterOutFalsy(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!!arr[i] === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filterOutFalsy(["", "a", 0, null, undefined, "0"]));

// 2. filter
function filterOutFalsy(arr) {
  return arr.filter((elem) => !!elem === true);
}

console.log(filterOutFalsy(["", "a", 0, null, undefined, "0"]));

// 12. Truthy to true, Falsy to false

// Given an array of truthy and falsy values, return the same array of elements into its boolean value.

// 1. for loop
function convertToBoolean(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!!arr[i] === true) {
      newArr.push(true);
    } else {
      newArr.push(false);
    }
  }
  return newArr;
}

console.log(convertToBoolean(["", "a", 0, null, undefined, "0"]));

// 2. map
function convertToBoolean(arr) {
  return arr.map((elem) => !!elem);
}

console.log(convertToBoolean(["", "a", 0, null, undefined, "0"]));
