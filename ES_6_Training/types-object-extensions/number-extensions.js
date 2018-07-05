var num1 = "NaN";

console.log("parseFloat", parseFloat === Number.parseFloat);
console.log("parseInt", parseInt === Number.parseInt);

var result = isNaN(num1);
console.log("Global isNaN", result);
console.log("Number isNaN", Number.isNaN(num1));

var num2 = "324";
console.log("Global isFinite  => ", isFinite(num2));
console.log("Number isFinite  => ", Number.isFinite(num2));


console.log("Number isInteger  => ", Number.isInteger(NaN));
console.log("Number isInteger  => ", Number.isInteger(undefined));
console.log("Number isInteger  => ", Number.isInteger(Infinity));
console.log("Number isInteger  => ", Number.isInteger(23));
console.log("Number isInteger  => ", Number.isInteger(45.90));
