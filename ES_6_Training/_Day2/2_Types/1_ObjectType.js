var toy1 = new Object();
// toy1.color = "red";

Object.prototype.color = "red";

console.log(toy1);

var toy2 = new Object();
console.log(toy2);