'use strict';
// var a = 10;
// a = 10;
// console.log(a);

// function Check() {
//     x = 10;
//     console.log("Inside Check, x is: ", x);
// }

// Check();
// console.log("Outside Check, x is: ", x);

// Hoisting
// x = "Hello There!";
// console.log("x is: ", x);

// var x;

// var a = 10;
// var a = "Hello";

// console.log(a);

// var x = "ABC";
// console.log("Before, x is ", x);

// for (var x = 0; x < 5; x++) {
//     console.log("Inside, x is ", x);
// }

// console.log("After, x is ", x);

function Check() {
    var x = "Manish";
    if (true) {
        var x = 10;
    }
    return x;
}

console.log(Check());