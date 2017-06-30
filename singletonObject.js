//Singleton Object to be created by javascript

var singleton = (function () {

    var instance;

    function createInstance() {
        var prashant = "Dahiwadekar";

        function add() {
            return "Hi from function";
        };

        return {
            Add: add,
            Prashant: prashant
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = new createInstance();
            }
            return instance;
        }

    };

})();
//singleton.getInstance()
// singleton.getInstance();

// console.log(singleton.getInstance() === singleton.getInstance());
// console.log(singleton.getInstance().Prashant);
// console.log(singleton.getInstance().Add())


var addition = (function () {
    function x() {
        console.log(1);
    }
    var y = new x();

    // return function(){
    //     return y
    // }

    return {
        anotherInstance: function () {
            return y
        }
    }
})();

console.log(addition.anotherInstance() === addition.anotherInstance());