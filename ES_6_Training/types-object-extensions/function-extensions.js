function synechronMessage() {
    return "Welcome to Synechron";
}

console.log(synechronMessage.name);

var anotherSyneMesg = function () {
    return "Another Welcome from Synechron";
}

console.log(anotherSyneMesg.name);


class Person {
    constructor() {

    }
    print() {
        //logic
    }
};

var p1 = new Person();
console.log("Person => ", Person.name);
console.log("p1.print => ", p1.print.name);
