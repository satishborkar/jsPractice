'use strict'

// 1. Using Bind
// function Person(a) {
//     this.age = a;

//     this.growOld = function () {
//         console.log(this);
//         this.age += 1;
//     }
// }

// var p = new Person(20);

// // for (let i = 0; i < 5; i++) {
// //     p.growOld();
// //     console.log(p.age);
// // }

// window.setInterval(p.growOld.bind(p), 1000);

// window.setInterval(function () {
//     console.log(p.age);
// }, 1000);

//2. Lexical Closure
// function Person(a) {
//     var self = this;
//     self.age = a;

//     self.growOld = function () {
//         self.age += 1;
//     }
// }

// var p = new Person(20);

// window.setInterval(p.growOld, 1000);

// window.setInterval(function () {
//     console.log(p.age);
// }, 1000);

function Person(a) {
    this.age = a;

    this.growOld = () => {
        this.age += 1;
    }
}

var p = new Person(20);

window.setInterval(p.growOld, 1000);

window.setInterval(function () {
    console.log(p.age);
}, 1000);