// function Employee(n) {
//     this.name = n;
// }

// var e1 = new Employee("Manish");
// e1.name = "";

// function Employee() {
// }

// Object.defineProperty(Employee.prototype, "firstname", {
//     value: "Not Set",
//     writable: true
// })

// var e1 = new Employee();
// console.log(e1.firstname);
// e1.firstname = "Manish";
// console.log(e1.firstname);

var Employee = (function () {
    function Employee() {
    }

    var _fname, _lname;

    Object.defineProperty(Employee.prototype, "firstname", {
        set: function (value) {
            if (!value)
                throw "First Name connot be empty..";
            _fname = value;
        },
        get: function () {
            return _fname;
        },
        enumerable: true
    });

    Object.defineProperty(Employee.prototype, "lastname", {
        set: function (value) {
            if (!value)
                throw "Last Name connot be empty..";
            _lname = value;
        },
        get: function () {
            return _lname;
        },
        enumerable: true
    });

    return Employee;
})();

var e1 = new Employee();
e1.firstname = "Manish";
// console.log(e1.firstname);
e1.lastname = "Sharma";
// console.log(e1.lastname);
// console.log(e1._fname);  //Donot Use (Meant as Private Member)

for (const key in e1) {
    console.log(key + "\t" + e1[key]);
}
