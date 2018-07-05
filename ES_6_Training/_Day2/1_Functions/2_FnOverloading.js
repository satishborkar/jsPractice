// function hello() {
//     function M1() {
//         console.log("Hello World");
//     }

//     function M2(name) {
//         console.log("Hello, ", name);
//     }

//     if (arguments.length == 0)
//         M1();
//     else if (arguments.length == 1)
//         M2(arguments[0]);
//     else
//         throw "Invalid Parameters";
// }

var hello = (function () {
    function M1() {
        console.log("Hello World");
    }

    function M2(name) {
        console.log("Hello, ", name);
    }

    return function () {
        if (arguments.length == 0)
            M1();
        else if (arguments.length == 1)
            M2(arguments[0]);
        else
            throw "Invalid Parameters";
    };
})();

hello();
hello("Manish");