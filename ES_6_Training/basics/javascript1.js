function printInformation(a, b) {
    console.log(a + " " + b);
    console.log("Id is " + this.id + " name is " + this.contactName + " lives in city " + this.city);
}

var Customer = {
    id: 3349,
    contactName: "Pravinkumar R. D.",
    city: "Pune",
    // printInformation: function () {
    //     console.log("Id is " + this.id + " name is " + this.contactName + " lives in city " + this.city);
    // }
}

var Employee = {
    id: 8989,
    contactName: "Manish Kaushik",
    city: "Pune",
    // printInformation: function () {
    //     console.log("Id is " + this.id + " name is " + this.contactName + " lives in city " + this.city);
    // }
}

printInformation.apply(Customer, [23.90, 67.90]);
printInformation.apply(Employee, [89.90, 77.56]);

