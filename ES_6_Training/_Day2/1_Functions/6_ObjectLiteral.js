// var obj = null;
// var obj = new Object();

// Object Literal (JavaScript Object)
var obj = {
    id: 1,
    name: "Manish",
    display: function () {
        console.log(this);
    }
};

// console.log(typeof obj);
// obj.display();

// console.log(obj);
// console.log(JSON.stringify(obj));

function Counter(cntBy) {
    var count = 0;
    return {
        next: function () {
            return count += cntBy;
        },
        prev: function () {
            return count -= cntBy;
        }
    };
}

console.log("Counter 5");

var Cnt5 = Counter(5);
console.log(Cnt5.next());
console.log(Cnt5.next());
console.log(Cnt5.prev());
console.log(Cnt5.next());
