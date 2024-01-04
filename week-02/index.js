// // const fs = require('fs')

// // function rockReadFile() {
// //     return new Promise(function(resolve) {
// //         fs.readFile("a.txt", "utf-8", function(err, data) {
// //             resolve(data);
// //         });
// //     });
// // }

// // function onDone(data) {
// //     console.log(data);
// // }

// // rockReadFile().then(onDone);

// function rockAsyncFunction() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve("Hii, after 5 seconds")
//         }, 5000)
//     });
// }


// async function main() {
//     const value = await rockAsyncFunction();
//     console.log("Hellooooo")
//     console.log(value);
// }
// main();
// console.log("Hii, instantly")

let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function mulFive(num) {
    return num*5;
}

function isEven(num) {
    return num%2==0
}

function sumOfEle(num1, num2) {
    return num1 + num2
} 

let arrTwo = arrOne.map(mulFive);
let arrThree = arrOne.filter(isEven);
let arrFour = arrOne.reduce(sumOfEle);
// console.log(arrTwo)
// console.log(arrThree)
// console.log(arrFour)
function findExample(arr) {
    console.log("Original Array:", arr);
  
    let found = arr.find(function(item) {
      return item > 3;
    });
    console.log("After find:", found);
  }
  findExample([1, 2, 3, 4, 5]);
  
  // sort()
  function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
  sortExample([5, 2, 3, 4, 1]);