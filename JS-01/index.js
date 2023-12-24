// function sum(a, b) {
//     return (a+b);
// }

// function sub(a, b) {
//     return a - b;
// }

// function calArithmetic(a, b, func) {
//     const val = func(a, b);
//     return val;
// }

// // console.log(calArithmetic(10, 10, sum));
// // let i = 31;
// // function counter() {
// //     if(i) {
// //         i--;
// //     console.log(i);
// //     } else {
// //         clearInterval();
// //     }
// // }
// // setInterval(counter, 100);

// function displayTime() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
  
//     console.clear();
//     console.log(`${hours}:${minutes}:${seconds}`);
//   }
  
// //   const prev = new Date().getSeconds();
// //   setTimeout(displayTime, 1000);
// //   const curr = new Date().getSeconds();
// //   console.log(curr-prev);
//   setInterval(displayTime, 1000);
  
// let str = "Vikash Rock";
const user ={
    nam: "Vikash Rock",
    age: 23
}
let nw = JSON.stringify(user);
