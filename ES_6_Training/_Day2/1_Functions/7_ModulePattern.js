// var a = 10;

// function Check() {
//     console.log(a);
// }

// Check();

// var a = 10;

// (function () {
//     console.log(a);
// })();

// (function (x) {
//     console.log(x);
// })(a);

// var calculator;

// (function (c) {
//     function Add(x, y) {
//         return x + y;
//     }

//     function Subtract(x, y) {
//         return x - y;
//     }

//     function Multiply(x, y) {
//         return x * y;
//     }

//     function Divide(x, y) {
//         return x / y;
//     }

//     c.Add = Add;
//     c.Sub = Subtract;
//     c.Mul = Multiply;
//     c.Div = Divide;
// })(calculator = calculator || {});

// console.log(calculator.Add(2, 3));
// console.log(calculator.Sub(2, 3));
// console.log(calculator.Mul(2, 3));
// console.log(calculator.Div(2, 3));

//Revealing Module
var calculator = (function () {
    function Add(x, y) {
        return x + y;
    }

    function Subtract(x, y) {
        return x - y;
    }

    function Multiply(x, y) {
        return x * y;
    }

    function Divide(x, y) {
        return x / y;
    }

    // return {
    //     Add: Add,
    //     Subtract: Subtract,
    //     Multiply: Multiply
    // };

    //ES 2015
    return {
        Add, Subtract, Multiply
    };
})();

// var Add = calculator.Add;
// var Subtract = calculator.Subtract;

// ES2015 - Object Destructuring
var { Add, Subtract } = calculator;

// console.log(Add(2, 3));
// console.log(Subtract(2, 3));

// console.log(calculator.Add(2, 3));
// console.log(calculator.Subtract(2, 3));
// console.log(calculator.Multiply(2, 3));

// Array
var arr = [10, 20, 30, 40, 50, 60];

// var x = arr[0];
// var y = arr[1];

// ES2015 - Array Destructuring
// var [x, y] = arr;

// var [x, , y] = arr;
// console.log(x, y);


var [x, , y] = arr;

console.log("Before, ", x, y);

[x,y]=[y,x];
console.log("After, ", x, y);
