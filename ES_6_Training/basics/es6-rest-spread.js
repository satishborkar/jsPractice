function printNames(...names) {
    for (var index = 0; index < names.length; index++) {
        console.log(names[index]);
    }
}

printNames("A", "B", "C", "D", "E");

//ES5
function addition2(a, b) {
    var restItems = Array.prototype.slice.call(arguments, 2);
    return a + b + restItems.length;
}
console.log(addition2(10, 20, 10, 10, 10));

//ES6
function addition(a, b, ...others) {
    return a + b + others.length;
}
console.log(addition(10, 20, 10, 10, 10));

//Spread
var numbers = [34, 56, 55, 23, 89];
console.log(Math.min(...numbers));