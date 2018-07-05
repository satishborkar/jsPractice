class MyCollection {
    constructor() {
        this._numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    // [Symbol.iterator](){
    //     const self = this;
    //     let i = 0;

    //     return {
    //         next(){
    //             let value, done = true;

    //             if(self._numbers[i]!== undefined){
    //                 value = self._numbers[i];
    //                 done = false;
    //                 i+=1;
    //             }

    //             return {
    //                 value: value,
    //                 done: done
    //             }
    //         }
    //     };
    // }

    *[Symbol.iterator]() {
        for (let i = 0; i < this._numbers.length; i++) {
            yield this._numbers[i];
        }
    }
}

var obj = new MyCollection();

for (const n of obj) {
    console.log(n);
}

//Generator
// function* idGenerator(){
//     let index = 0;
//     while(true)
//         yield index++;
// }

// let seq = idGenerator();
// // console.log(seq);

// for (let i = 0; i < 5; i++) {
//     console.log(seq.next());  
// }

// Iterator
// let makeIterator = function (arr) {
//     let current = 0;
//     return {
//         next() {
//             return current < arr.length ? {
//                 value: arr[current++],
//                 done: false
//             } :
//                 {
//                     done: true
//                 };
//         }
//     }
// }

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let iterator = makeIterator(numbers);

// while (true) {
//     let { value, done } = iterator.next();
//     if (done) break;
//     console.log(value);
// }
