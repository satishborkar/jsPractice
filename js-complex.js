"use strict";

function sum(a) {
    var sum = a;
    function inner(b) {
        sum += b;
        return inner;
    }
    inner.toString = function () {
        return sum;
    }
    return inner;
}

sum(1)(2)(3)(4)(5);


function add(x) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    };
}

add(1)(1)(1)(1)(1)(1)(); //6


var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//get length of Object
Object.keys(person).length // 4
Object.values(person).length // 4