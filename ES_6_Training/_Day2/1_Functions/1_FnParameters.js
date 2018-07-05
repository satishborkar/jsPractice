// function hello(name) {
//     console.log("Hello, ", name);
// }

// hello("Manish");
// hello();
// hello("Abhijeet","Gole");

// function Add(x, y) {
//     x = x || 0;
//     y = y || 0;

//     if ((typeof x == "number") && (typeof y) == "number")
//         return x + y;

//     throw "Invalid Parameters";
// }

// ES2015 - Default Parameters
// function Add(x = 0, y = 0) {
//     if ((typeof x == "number") && (typeof y) == "number")
//         return x + y;

//     throw "Invalid Parameters";
// }

// console.log(Add(2, 3));
// console.log(Add(2));
// try {
//     console.log(Add(2, "ABC"));
// }
// catch (m) {
//     console.error(m)
// }
// finally {
//     console.log("Always Runs...");
// }
// console.log(Add(20, 30));

// var i = 1000000000000000000000000000000000000000000000000000;
// console.log(i);

// Handling Extra Arguments
// function hello(name) {
//     console.log("Hello, ", name);
//     console.log(arguments);
// }

// ES2015 - Rest Parameters
// function hello(name, ...args) {
//     console.log("Hello, ", name);
//     console.log(args);
// }

// hello("Abhijeet");
// hello("Abhijeet", "Gole");
// hello("Abhijeet", "Gole", "Pune");
// hello("Abhijeet", "Gole", "Pune", 411038);
// hello("Abhijeet", "Gole", "Pune", 411038, "Kothrud");

function average(...n) {
    console.log(n)
    var sum = 0;
    for (let i = 0; i < n.length; i++) {
        // console.log(n[i]);
        sum += n[i];
    }

    return sum / n.length;
}

console.log(average(1));
console.log(average(1, 2, 3, 4));
console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9));

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//ES2015 - Spread Operator

console.log(average(...arr));