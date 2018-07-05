'use strict'
// var count = 0;

// function Next() {
//     return count += 1;
// }

// function Counter() {
//     var count = 0;
//     return function () {
//         return count += 1;
//     }
// }

// var Next = Counter();

// var Next = (function () {
//     var count = 0;
//     return function () {
//         return count += 1;
//     }
// })();

// console.log(Next());
// console.log(Next());
// // count = 100;
// console.log(Next());

function Counter(cntBy) {
    var count = 0;
    return function () {
        return count += cntBy;
    }
}

console.log("Counter 5");

var Cnt5 = Counter(5);
console.log(Cnt5());
console.log(Cnt5());
console.log(Cnt5());

console.log("Counter 10");

var Cnt10 = Counter(10);
console.log(Cnt10());
console.log(Cnt10());
console.log(Cnt10());