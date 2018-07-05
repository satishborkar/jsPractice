// function Check(){
//     console.log("Check Called...");
// }

// Check();
// Check.call();
// Check.apply();

// var f = Check.bind();
// f();

// function Check(){
//     console.log(this);
// }

// Check();

function display() {
    console.log(this);
    console.log(this.id, this.name);
}

function check(a, b) {
    console.log(this);
    console.log(a, b);
}

var e1 = {
    id: 1,
    name: "Manish"
};

var e2 = {
    id: 2,
    name: "Abhijeet"
};

// Borrow Functions
// display.call(e1);
// display.call(e2);

// check(1, 2);
// check.call(e1, 1, 2);
// check.apply(e1, [1, 2]);

e1.display = display.bind(e1);
e1.display();

e2.display = display.bind(e2);
e2.display();