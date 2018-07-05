// function Person() {
//     this.firstName = "Manish";
//     this.lastName = "Kaushik";
//     this.printInformation = function () {
//         return "First Name is " + this.firstName + " Last Name is " + this.lastName;
//     }
//     var socialNumber = "34394993";
// }

// var person = new Person();

// //person.firstName = "Pravinkumar";
// //person.lastName = "R. D.";
// console.log(person.socialNumber);
// console.log("First Name is " + person.firstName + " Last Name is " + person.lastName)
// //console.log(person.printInformation());



function Person() {
    //Public Members
    Object.defineProperty(this, "firstName", {
        get: function () {
            return _firstName;
        },
        set: function (value) {
            _firstName = value;
        }
    });
    Object.defineProperty(this, "lastName", {
        get: function () {
            return _lastName;
        },
        set: function (value) {
            _lastName = value;
        }
    });

    this.printInformation = function () {
        return "First Name is " + this.firstName + " Last Name is " + this.lastName;
    }
    //Private Members
    var _firstName, _lastName;
}

var person = new Person();

person.firstName = "Pravinkumar";
person.lastName = "R. D.";
console.log(person.printInformation());

//console.log(window.Person === Person);

function Employee() {
    Object.defineProperty(this, "employeeId", {
        get: function () {
            return _employeeId;
        },
        set: function (value) {
            _employeeId = value;
        }
    });
    Object.defineProperty(this, "email", {
        get: function () {
            return _email;
        },
        set: function (value) {
            _email = value;
        }
    });
    var _employeeId, _email;
}

//Prototype object is-a relation
Employee.prototype = new Person();

// var employee = new Employee();
// employee.firstName = "Alisha";
// employee.lastName = "C.";
// console.log(employee.printInformation());

// console.log(employee instanceof Person);
// console.log(employee instanceof Employee);

function SuperEmployee() {

}
SuperEmployee.prototype = new Employee();
var employee = new SuperEmployee();
employee.firstName = "Alisha";
employee.lastName = "C.";
console.log(employee.printInformation());

console.log(employee instanceof Person);
console.log(employee instanceof Employee);
console.log(employee instanceof SuperEmployee);

function Order() {
    var _orderNumber = 0;
    this.getNextOrderNumber = function () {
        return ++Order.initialOrderNumber;
    }
}
Order.initialOrderNumber = 0;
// Order.getNextOrderNumber = function () {
//     return ++Order.initialOrderNumber;
// }
//Declaring Instance Members
// Order.prototype.printValue = function () {
//     return 100;
// }

//Declaring Static Members
Order.printValue = function () {
    return 200;
}

var order1 = new Order();
console.log("Next Order number is " + order1.getNextOrderNumber());
var order2 = new Order();
console.log("Next Order number is " + order2.getNextOrderNumber());
console.log(Order.printValue());
console.log(Order.printValue());