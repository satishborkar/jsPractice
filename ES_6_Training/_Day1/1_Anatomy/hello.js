// console.log("Hello from JavaScript File...");

var N1 = {};

(function () {
    function LocalAdd(numberOne, numberTwo) {
        var sum = numberOne + numberTwo;
        return sum;
    }

    N1.Add = LocalAdd;
})(N1);