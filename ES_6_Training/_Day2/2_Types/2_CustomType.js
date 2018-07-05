function Person(n) {
    this._name = n;

    this.getName = function () {
        return this._name;
    }

    this.setName = function (n) {
        this._name = n;
    }
}

var p1 = new Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Person("Ramakant");
console.log(p2.getName());
p2.setName("Subodh");
console.log(p2.getName());
