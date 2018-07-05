var Add = (function () {
    function M1(x, y) {
        return x + y;
    }

    function M2(x, y, z) {
        return x + y + z;
    }

    return function () {
        if (arguments.length == 2)
            return M1(arguments[0], arguments[1]);
        else if (arguments.length == 3)
            return M2(arguments[0], arguments[1], arguments[2]);
        else
            throw "Invalid Parameters";
    };
})();

console.log(Add(2, 3));
console.log(Add(2, 3, 4));
