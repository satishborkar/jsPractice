(function () {
'use strict';

// Case 1
// export default function square(x) {
//     return x * x;
// }

// Case 2
// export function square(x) {
//     return x * x;
// }

// export function Check(){
//     console.log("Check from lib Module..");
// }

// Case 3
function square(x) {
    return x * x;
}

function Check() {
    console.log("Check from lib Module..");
}

// Case 1
// import sqr from './lib';
// console.log(sqr(2));

// Case 2
// import { square, Check } from './lib';
// console.log(square(2));
// Check();

// Case 3
console.log(square(2));
Check();

// rollup main.js --output.format iife --output.file bundle.js

}());
