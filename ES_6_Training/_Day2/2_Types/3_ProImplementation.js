var Synechron;

(function(Synechron){
    function Person(n) {
        this._name = n;
    }
    
    Person.prototype.getName = function () {
        return this._name;
    }
    
    Person.prototype.setName = function (n) {
        this._name = n;
    }

    Synechron.Person = Person;
})(Synechron = Synechron || {});

console.log(Synechron);

var p1 = new Synechron.Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Synechron.Person("Ramakant");
console.log(p2.getName());
p2.setName("Subodh");
console.log(p2.getName());
