// class Person {
//     constructor() {
//         this.firstName = "Manish";
//         this.lastName = "Kaushik";
//     }
//     printPersonInformation() {
//         return `Person Name is ${this.firstName}  ${this.lastName}`;
//     }
// }

// let person = new Person();
// console.log(person.printPersonInformation());

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    printPersonInformation() {
        return `Person Name is ${this.firstName}  ${this.lastName}`;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}

let person = new Person();
person.firstName = "Manish";
person.lastName = "Kaushik";
console.log(person.printPersonInformation());
console.log(typeof Person);

//console.log(window.Person === Person);
//IS-A relation
class Employee extends Person {
    constructor() {
        super();
        this.employeeId;
        this.email;
    }
}

let employee = new Employee();
employee.firstName = "Manish";
employee.lastName = "Kaushik";
console.log(employee.printPersonInformation());
console.log(employee instanceof Person);
console.log(employee instanceof Employee);

class Order {
    constructor(){
        
    }
    getNextOrderNumber() {
        return ++Order.orderNumber;
    }
    static getPiValue() {
        return 3.14;
    }
}
Order.orderNumber = 0;
var order1 = new Order();
console.log("Next Order number is " + order1.getNextOrderNumber());
var order2 = new Order();
console.log("Next Order number is " + Order.getPiValue());