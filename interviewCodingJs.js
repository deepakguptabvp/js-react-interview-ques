// Question: Implement a function to reverse a string without using the built-in reverse() method. 

// function reverseString(str) {
//     let reversedStr = '';

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }
//     return reversedStr
// }

// const originalString = "Hello World !!"
// const reversedString = reverseString(originalString);
// console.log(reversedString);

// Given an array of numbers, write a function to find the largest and smallest numbers in the array. 
// in-built function

// let arr = [2, 3, 5, 67, 6, 3, 12, 76, 6887, 43];
// function findMinMax(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
//     return { min, max };
// }

// let { min, max } = findMinMax(arr);
// console.log("Minimum number : ", min);
// console.log("Maximum number : ", max);

//--------------solving through custom function----------------------------------

// let arr2 = [23, 3, 5, 67, 6, 3, 12, 76, 87, 43];
// function findMinMax(numbers) {
//     if (arr.length === 0) {
//         return { min: undefined, max: undefined };
//     }

//     let min = numbers[0];
//     let max = numbers[0];

//     for (let i = 0; i <= numbers.length; i++) {
//         if (numbers[i] < min) {
//             min = numbers[i]
//         } else if (numbers[i] > max) {
//             max = numbers[i]
//         }
//     }
//     return { min, max };
// }

// const { min, max } = findMinMax(arr);
// console.log("Minimum number : ", min);
// console.log("Maximum number : ", max);

// Implement a function to find the sum of all the numbers in an array.
// function Sum(number) {
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         sum += number[i]
//     }
//     return sum;
// }
// let number = [3, 4, 2, 1, 0];
// const sum = Sum(number);
// console.log(Sum(number));


//write a program to find the second most occurring character in the given string "assassin" in js.
// function findSecondMostOccurringChar(str) {
// Create a character count object
//     const charCount = {};
//     for (const char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

// Convert object to an array of [char, count] pairs
//     const charCounts = Object.entries(charCount);

// Sort the array by count in descending order
//     charCounts.sort((a, b) => b[1] - a[1]);

// Check if there is a second most frequent character
//     if (charCounts.length >= 2 && charCounts[1][1] !== charCounts[0][1]) {
//         return charCounts[1][0];
//     }

// No second most frequent character found
//     return null;
// }

// const str = "assassin";
// const secondMostChar = findSecondMostOccurringChar(str);

// if (secondMostChar) {
//     console.log("Second most occurring character:", secondMostChar);
// } else {
//     console.log("No second most occurring character found.");
// }

// var a = 6; 
// function test(){
//     var a  = 7;
//     function again(){
//         var a = 8;
//         alert(a);
//     }
//     again();
//     alert(a);
// }

// test();
// alert(a);


// var x = 0;
// function foo() {
//     x++;
//     this.x = x;
//     return foo;
// }
// var bar = new new foo;
// console.log(bar.x);

// var arr = [10, 1, 2, 3].shift()
// console.log("Shifted value:" + arr);

// const o = {name: "alex", hobbies: ["cricket", "music"]};
// Object.freeze(o);
// o.hobbies[1] = "dance";
// console.log(o.hobbies)


// ques
const arr = ["hello", 1, "Hello"]
arr.sort()
console.log(arr)


// ques
// console.log(3 === 3 === 3);


// // ques
// (function (x) {
//     return (function (y) {
//         console.log(x)
//     })(2)
// })(1);


// // ques
// function foo1()
// {
// return {
// bar: "hello"
// };
// }
// function foo2()
// {
// return
// {
// bar: "hello"
// };
// }