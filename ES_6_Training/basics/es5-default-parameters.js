function addition(a = 10, b = 10) {
    if (!a) {
        a = 10;
    }
    if (!b) {
        b = 20;
    }
    return a + b;
}

console.log("Addition is " + addition());
console.log("Addition is " + addition(10));
console.log("Addition is " + addition(10, 20));
console.log("Addition is " + addition(10, 20, 30));
